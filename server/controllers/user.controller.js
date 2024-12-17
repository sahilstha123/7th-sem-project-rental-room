import prisma from "../lib/prisma.js";
import bcrypt from "bcrypt";
export const getUsers = async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.status(200).json(users);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to get Users!" });
  }
};
export const getUser = async (req, res) => {
  const id = req.params.id;
  try {
    const users = await prisma.user.findUnique({
      where: { id },
    });
    res.status(200).json(users);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to get Users!" });
  }
};
export const updateUser = async (req, res) => {
  const id = req.params.id;
  const tokenUserId = req.userId;
  const { password, avatar, ...inputs } = req.body;

  if (id !== tokenUserId) {
    return res.status(403).json({ message: "Not Authorized" });
  }

  try {
    let updatedData = { ...inputs };

    if (password) {
      const hashedPassword = await bcrypt.hash(password, 10);
      updatedData.password = hashedPassword;
    }
    // Update avatar only if provided in the request body
    if (avatar !== undefined) {
      updatedData.avatar = avatar;
    }

    const updatedUser = await prisma.user.update({
      where: { id },
      data: updatedData,
    });

    res.status(200).json(updatedUser);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to update User!" });
  }
};

export const deleteUser = async (req, res) => {
  const id = req.params.id;
  const tokenUserId = req.userId;

  if (id !== tokenUserId) {
    return res.status(403).json({ message: "Not Authorized" });
  }
  try {
    await prisma.user.delete({
      where: { id },
    });
    res.status(200).json({ message: "User deleted" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to get Users!" });
  }
};
