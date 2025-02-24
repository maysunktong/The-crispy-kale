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
    dataArray: getCategoryParams,
    image: "",
    featuredText: "Features text",
    slug: ""
  });
};

export const renderProduct = (req, res) => {
  const getProductParams = req.params.slug;

  res.render("pages/shop", {
    title: "shop",
    headerTitle: getProductParams,
    pageType: "product",
    dataArray: getProductParams,
    image: "",
    featuredText: "Features text",
    slug: ""
  });
};
