import express from "express";

const indexRouter = express.Router();

indexRouter.get('/', (req, res, next) =>
  res.status(200).json({ message: 'This GET request works bud!' })
);

export default indexRouter;
