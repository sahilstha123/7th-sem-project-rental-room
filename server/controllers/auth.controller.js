import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import prisma from "../lib/prisma.js";

export const Register = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // CHECK IF USERNAME OR EMAIL ALREADY EXISTS
    const existingUser = await prisma.user.findFirst({
      where: {
        OR: [{ username: username }, { email: email }],
      },
    });

    if (existingUser) {
      return res
        .status(400)
        .json({ message: "Username or Email already exists!" });
    }

    // HASH THE PASSWORD
    const hashedPassword = await bcrypt.hash(password, 10);

    // CREATE A NEW USER AND SAVE TO DB
    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
    });

    console.log(newUser);

    res.status(201).json({ message: "User created successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to create user!" });
  }
};

export const Login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await prisma.user.findUnique({
      where: { username },
    });

    if (!user) return res.status(401).json({ message: "Invalid Credentials!" });

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid)
      return res.status(401).json({ message: "Invalid Credentials!" });
    const age = 1000 * 60 * 60 * 24 * 7; // Expires in 7 days
    // Create a JWT token
    const token = jwt.sign(
      { id: user.id, isAdmin: false },
      process.env.JWT_SECRET,
      {
        expiresIn: age, // Token expires in 7 days
      }
    );

    // Set the token in the cookie
    res.cookie("token", token, {
      httpOnly: true, // Can't access cookie via JavaScript
      secure: false, // Set to true in production (requires HTTPS)
      maxAge: age,
    });

    // Respond with user data and token
    res.status(200).json({
      message: "Login successful",
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
      },
      token, // You can also include the token here if you want to store it in localStorage
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to login" });
  }
};

export const Logout = (req, res) => {
  res.clearCookie("token").status(200).json({ message: "Logout Successful" });
};
