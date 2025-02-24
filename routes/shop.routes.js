import express from "express";
import { renderShop, renderCategory, renderProduct } from "../controllers/shop.controller.js";

const shopRouter = express.Router();

shopRouter.get("/", renderShop);

shopRouter.get("/:category", renderCategory);
shopRouter.get("/:category/:slug", renderProduct)

export default shopRouter;
