import express from "express";

const shopRouter = express.Router();

shopRouter.get("/", (req, res) => {
  res.render("pages/shop")
})

shopRouter.use("/", categoryRouter)

export default shopRouter;
