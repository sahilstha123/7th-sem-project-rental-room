import express from "express";
import cookieParser from "cookie-parser";
import postRoutes from "./routes/post.route.js";
import authRoutes from "./routes/auth.route.js";
import testRoutes from "./routes/test.route.js";
import userRoutes from "./routes/user.route.js";
import chatRoutes from "./routes/chat.route.js";
import messageRoutes from "./routes/message.route.js";

import cors from "cors";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

const app = express();

// CORS Configuration
const corsOptions = {
  origin: process.env.CLIENT_URL, // Allowed client URL (React app)
  credentials: true, // Allow cookies to be sent with the requests
};

console.log("CORS Origin:", process.env.CLIENT_URL); // Debugging log

// Use CORS middleware with the specified options
app.use(cors(corsOptions));

// Middleware to parse JSON and cookies
app.use(express.json());
app.use(cookieParser());

// Define routes
app.use("/api/auth", authRoutes);
app.use("/api/post", postRoutes);
// Register the routes
app.use("/api/test", testRoutes);
app.use("/api/users", userRoutes);
app.use("/api/chats", chatRoutes);
app.use("/api/messages", messageRoutes);
// Start the server
app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
