import express from "express";

var router = express.Router();

router.get('/', (req, res, next) =>
  res.status(200).json({ message: 'This GET request works bud!' })
);

export default indexRouter;
