import express from "express";
import {
  shouldBeLoggedIn,
  shouldBeAdmin,
} from "../controllers/test.controller.js";
import { verifyToken } from "../middleware/verifyToken.js";

const router = express.Router();

// Use middleware and route handler
router.get("/should-be-logged-in", verifyToken, shouldBeLoggedIn);
router.get("/should-be-admin", shouldBeAdmin);

export default router;
