import express from "express";
import { renderBlog } from "../controllers/blog.controller.js";

const blogRouter = express.Router();

blogRouter.get("/", renderBlog);

export default blogRouter;
