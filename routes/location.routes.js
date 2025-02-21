import express from "express";
import { renderLocation } from '../controllers/location.controller.js';

const locationRouter = express.Router();

locationRouter.get("/", renderLocation)

export default locationRouter;
