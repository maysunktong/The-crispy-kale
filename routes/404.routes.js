import express from "express";

const notFoundRouter = express.Router();

notFoundRouter.use((req, res) => {
  res.status(404).render("pages/404", {
    title: "Page Not Found",
    headerTitle: "Oops! Page Not Found",
    pageType: "404",
    message: "The page you are looking for does not exist.",
  });
});

export default notFoundRouter;
