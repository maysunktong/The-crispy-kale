import express from "express";
import { renderCart } from "../controllers/cart.controller.js";

const cartRouter = express.Router();

cartRouter.get("/", renderCart);

export default cartRouter;
