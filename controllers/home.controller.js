export const renderHome = (req, res) => {
  res.render("pages/index", {
    title: "Home",
    headerTitle: "Home",
    pageType: "home",
    favicon: "",
    dataArray: "",
    featuredText: "Features text",
  });
};
