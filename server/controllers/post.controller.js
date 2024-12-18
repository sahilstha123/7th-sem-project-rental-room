import prisma from "../lib/prisma.js";
import jwt from "jsonwebtoken";
export const getPosts = async (req, res) => {
  const query = req.query;

  try {
    // Validate price range
    const minPrice = parseInt(query.minPrice) || 2000;
    const maxPrice = parseInt(query.maxPrice) || 40000;
    if (isNaN(minPrice) || isNaN(maxPrice)) {
      return res.status(400).json({ message: "Invalid price range" });
    }

    // Fetch posts based on query parameters
    const posts = await prisma.post.findMany({
      where: {
        city: query.city || undefined,
        property: query.property || undefined,
        bedroom: parseInt(query.bedroom) || undefined,
        price: {
          gte: minPrice,
          lte: maxPrice,
        },
      },
    });

    // JWT verification and user identification
    let userId = null;
    const token = req.cookies?.token; // Use req.cookies instead of req.cookie
    if (token) {
      try {
        const payload = jwt.verify(token, process.env.JWT_SECRET);
        userId = payload.id;
      } catch (err) {
        console.warn("Invalid token");
      }
    }

    // Check if posts are saved
    const postsWithSaved = await Promise.all(
      posts.map(async (post) => {
        const saved = userId
          ? await prisma.savedPost.findUnique({
              where: {
                userId_postId: {
                  userId,
                  postId: post.id,
                },
              },
            })
          : null;
        return { ...post, isSaved: saved ? true : false };
      })
    );

    res.status(200).json(postsWithSaved);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to get posts" });
  }
};

export const getPost = async (req, res) => {
  const id = req.params.id;
  try {
    const post = await prisma.post.findUnique({
      where: { id },
      include: {
        postDetail: true,
        user: {
          select: {
            username: true,
            avatar: true,
          },
        },
      },
    });
    res.status(200).json(post);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to get post" });
  }
};

export const addPost = async (req, res) => {
  const body = req.body;
  const tokenUserId = req.userId;
  try {
    const newPost = await prisma.post.create({
      data: {
        ...body.postData,
        userId: tokenUserId,
        postDetail: {
          create: body.postDetail,
        },
      },
    });
    res.status(200).json(newPost);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to create post" });
  }
};

export const updatePost = async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const tokenUserId = req.userId;

  try {
    const post = await prisma.post.findUnique({ where: { id } });

    // Check if the post exists and if the user is authorized to update
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    if (post.userId !== tokenUserId) {
      return res.status(403).json({ message: "Not Authorized!" });
    }

    const updatedPost = await prisma.post.update({
      where: { id },
      data: {
        ...body.postData,
        postDetail: {
          update: body.postDetail,
        },
      },
    });
    res.status(200).json(updatedPost);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to update post" });
  }
};

export const deletePost = async (req, res) => {
  const id = req.params.id;
  const tokenUserId = req.userId;
  try {
    const post = await prisma.post.findUnique({
      where: { id },
    });

    if (post.userId !== tokenUserId) {
      return res.status(403).json({ message: "Not Authorized!" });
    }

    await prisma.post.delete({
      where: { id },
    });
    res.status(200).json({ message: "Post deleted" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to delete post" });
  }
};
