export const renderShop = (req, res) => {
  res.render("pages/shop", {
    title: "Home",
    headerTitle: "Home",
    pageType: "home",
    favicon: "",
    dataArray: "",
    featuredText: "Features text",
  });
};
