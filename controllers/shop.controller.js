import { allMenu } from "../data/foodData.js";
import { getImageUrl } from "../utils/functions.js";

export const renderShop = (req, res) => {
  const getShopParams = req.params.shop;
  res.render("pages/shop", {
    title: "shop",
    headerTitle: getShopParams,
    pageType: "shop",
    favicon: "",
    dataArray: allMenu.map((item) => ({
      ...item,
      image: getImageUrl(item.category, item.slug),
    })),
    featuredText: "Features text",
  });
};

export const renderCategory = (req, res) => {
  const getCategoryParams = req.params.category;
  const getCategory = allMenu.filter((item) =>
    item.category.includes(`${getCategoryParams}`)
  );

  if (getCategory.length === 0) {
    return res.status(404).render("pages/404", { title: "Category Not Found" });
  }

  res.render("pages/shop", {
    title: "shop",
    headerTitle: getCategoryParams,
    pageType: "category",
    dataArray: getCategory.map((item) => ({
      ...item,
      image: getImageUrl(item.category, item.slug),
    })),
    featuredText: "",
  });
};

export const renderProduct = (req, res) => {
  const getProductParams = req.params.slug;
  const getProduct = allMenu.find((item) => item.slug === getProductParams);

  if (!getProduct) {
    return res.status(404).render("pages/404", { title: "Product Not Found" });
  }

  res.render("pages/shop", {
    title: "shop",
    headerTitle: getProductParams,
    pageType: "product",
    dataArray: {
      ...getProduct,
      image: getImageUrl(getProduct.category, getProduct.slug),
    },
    featuredText: getProduct.description,
  });
};
