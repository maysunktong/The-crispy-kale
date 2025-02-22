import express from "express";
import { renderShop, renderCategory, renderSlug } from "../controllers/shop.controller.js";

const shopRouter = express.Router();

shopRouter.get("/", renderShop);

shopRouter.get("/:category", renderCategory);
shopRouter.get("/:category/:slug", renderSlug)

export default shopRouter;
