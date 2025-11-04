import express from "express";
import { authMiddleware } from "../middleware/authMiddleware.js";

const verifyUserRequest = express.Router();

verifyUserRequest.get("/user/verify", async (req, res, next) => {
  await authMiddleware(req, res, next)
});

export default verifyUserRequest;
