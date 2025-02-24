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
  const getCategory = allMenu.filter(item => item.category.includes(`${getCategoryParams}`))


  res.render("pages/shop", {
    title: "shop",
    headerTitle: getCategoryParams,
    pageType: "category",
    dataArray: getCategory,
    image: "",
    featuredText: "Features text",
  });
};

export const renderProduct = (req, res) => {
  const getProductParams = req.params.slug;
  const getProduct = allMenu.find(item => item.slug === getProductParams);

  res.render("pages/shop", {
    title: "shop",
    headerTitle: getProductParams,
    pageType: "product",
    dataArray: getProduct,
    image: "",
    featuredText: "Features text",
  });
};
