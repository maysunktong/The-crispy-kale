export const renderMerchandise = (req, res) => {
  res.render("pages/merchandise", {
    title: "Home",
    headerTitle: "Home",
    pageType: "home",
    favicon: "",
    dataArray: "",
    featuredText: "Features text",
  });
};
