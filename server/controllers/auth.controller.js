import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import prisma from "../lib/prisma.js";

export const Register = async (req, res) => {
  //   console.log(req.body);
  const { username, email, password } = req.body;
  try {
    //   HASH THE PASSWORD
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log(hashedPassword);
    // CREATE A NEW USER AND SAVE TO DB
    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
    });
    console.log(newUser);
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ message: "failed to create user" });
  }
};

export const Login = async (req, res) => {
  const { username, password } = req.body;
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
      return res.status(401).json({ message: "Invalid Credentials!" });
    // Generate a cookie token and send to the user
    // res.setHeader("Set-Cookie", "test=" + "myValue");
    const age = 1000 * 60 * 60 * 24 * 7;
    const token = jwt.sign(
      {
        id: user.id,
      },
      process.env.JWT_SECRET_KEY,
      { expiresIn: age }
    );
    res
      .cookie("token", token, {
        httpOnly: true,
        // secure:true
        maxAge: age,
      })
      .status(200)
      .json({ message: "Login successful!" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to Login!" });
  }
};

export const Logout = (req, res) => {
  res.clearCookie("token").status(200).json({ message: "logout Successful" });
};
