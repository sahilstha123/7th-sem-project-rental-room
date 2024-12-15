// lib/prisma.js
import { PrismaClient } from "@prisma/client";

// Enable Prisma logging for queries, info, warnings, and errors
const prisma = new PrismaClient({
  log: ["query", "info", "warn", "error"],
});

export default prisma;
