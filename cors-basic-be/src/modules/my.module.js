import express from "express";

const myRouter = express.Router();

// http://localhost:3050/my/
myRouter.get("/", (req, res, next) => {
  try {
    res.status(200).send("/my 라우터의 루트에요.");
  } catch (e) {
    next(e);
  }
});

export default myRouter;
