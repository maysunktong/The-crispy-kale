import express from "express";
import { renderMerchandise } from "../controllers/merchandise.controller.js";

const merchandiseRouter = express.Router();

merchandiseRouter.get("/", renderMerchandise);

export default merchandiseRouter;
