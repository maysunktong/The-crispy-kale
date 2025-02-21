import express from "express";
import { renderShop } from "../controllers/shop.controller.js";

const shopRouter = express.Router();

shopRouter.get("/", renderShop);

export default shopRouter;
