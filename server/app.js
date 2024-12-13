// app.js
import express from "express";
import cookieParser from "cookie-parser";
import postRoutes from "./routes/post.route.js";
import authRoute from "./routes/auth.route.js";

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoute);
app.use("/api/post", postRoutes); // Handle post routes

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
