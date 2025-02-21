export const renderMerchandise = (req, res) => {
  res.render("pages/merchandise", {
    title: "Home",
    headerTitle: "Merchandise",
    pageType: "home",
    favicon: "",
    dataArray: "",
    featuredText: "Features text",
  });
};
