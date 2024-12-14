import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import prisma from "../lib/prisma.js";
import { v4 as uuidv4 } from "uuid"; // For generating unique verification tokens (if needed)

export const Register = async (req, res) => {
  const { username, email, password } = req.body;

  // Validate required fields
  if (!username || !email || !password) {
    return res.status(400).json({ message: "All fields are required!" });
  }

  try {
    // Check if user with this username or email already exists
    const existingUser = await prisma.user.findFirst({
      where: {
        OR: [{ username: username }, { email: email }],
      },
    });

    if (existingUser) {
      return res
        .status(400)
        .json({ message: "Username or email already exists!" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Optional: Create a unique verification token if using email verification
    const verificationToken = uuidv4();

    // Create a new user and save to DB
    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
        verificationToken, // Optional field if you're using email verification
      },
    });

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ message: "Failed to create user" });
  }
};

export const Login = async (req, res) => {
  const { username, password } = req.body;

  // Validate required fields
  if (!username || !password) {
    return res
      .status(400)
      .json({ message: "Username and password are required!" });
  }

  try {
    // Check if the user exists
    const user = await prisma.user.findUnique({
      where: { username },
    });

    // If user does not exist, return error
    if (!user) return res.status(401).json({ message: "Invalid Credentials!" });

    // Check if the password is correct
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid)
      return res.status(401).json({ message: "Password does not match" });

    // Generate a JWT token
    const token = jwt.sign(
      { id: user.id },
      process.env.JWT_SECRET_KEY, // Ensure this is stored securely in env
      { expiresIn: "7d" } // Token expiration set to 7 days
    );

    // Set JWT token as HttpOnly cookie
    const age = 1000 * 60 * 60 * 24 * 7; // Token expiry duration (7 days)
    res
      .cookie("token", token, {
        httpOnly: true,
        maxAge: age,
        // secure: true, // Enable this in production if using HTTPS
      })
      .status(200)
      .json({ message: "Login successful!" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to Login!" });
  }
};

export const Logout = (req, res) => {
  // Clear the token cookie to log out the user
  res.clearCookie("token").status(200).json({ message: "Logout Successful" });
};
