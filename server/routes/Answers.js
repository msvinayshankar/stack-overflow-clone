import express from "express";

const router = express.Router();

router.patch("/post/:id", auth, postAnswer);

export default router;