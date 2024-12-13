import express from "express";
import cookieParser from "cookie-parser";
import postRoutes from "./routes/post.route.js";
import authRoute from "./routes/auth.route.js";
import cors from "cors";

const app = express();

// Allow requests from the client URL and handle cookies
app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));

// Middleware to parse JSON and cookies
app.use(express.json());
app.use(cookieParser());

// Define routes
app.use("/api/auth", authRoute);
app.use("/api/post", postRoutes);

// Start the server
app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
