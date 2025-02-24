import { allMenu } from "../data/foodData.js";

export const renderShop = (req, res) => {
  const getShopParams = req.params.shop;
  res.render("pages/shop", {
    title: "shop",
    headerTitle: getShopParams,
    pageType: "shop",
    favicon: "",
    dataArray: "",
    featuredText: "Features text",
  });
};

export const renderCategory = (req, res) => {
  const getCategoryParams = req.params.category;

  res.render("pages/shop", {
    title: "shop",
    headerTitle: getCategoryParams,
    pageType: "category",
    dataArray: "",
    image: "",
    featuredText: "Features text",
  });
};

export const renderSlug = (req, res) => {
  const getSlugParams = req.params.slug;

  res.render("pages/shop", {
    title: "shop",
    headerTitle: getSlugParams,
    pageType: "product",
    dataArray: "",
    image: "",
    featuredText: "Features text",
  });
};
