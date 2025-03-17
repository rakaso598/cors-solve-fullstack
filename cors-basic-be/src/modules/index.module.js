import express from "express";
import myRouter from "./my.module.js";

const router = express.Router();

router.use("/my", myRouter);

export default router;
