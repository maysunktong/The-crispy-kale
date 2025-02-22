import { allMenu } from "../data/foodData.js";

export const renderShop = (req, res) => {
  res.render("pages/shop", {
    title: "Home",
    headerTitle: "Shop",
    pageType: "shop",
    favicon: "",
    dataArray: "",
    featuredText: "Features text",
  });
};

export const renderCategory = (req, res) => {
  const getCategoryParams = req.params.category;

  res.render("pages/shop", {
    title: "Home",
    headerTitle: getCategoryParams,
    pageType: "category",
    favicon: "",
    dataArray: "",
    featuredText: "Features text",
  });
};

export const renderSlug = (req, res) => {
  const slug = req.params.slug;

  res.render("pages/shop", {
    title: "Home",
    headerTitle: "Product",
    pageType: "product",
    favicon: "",
    dataArray: "",
    featuredText: "Features text",
  });
};
