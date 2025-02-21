export const renderHome = (req, res) => {
  res.render("pages/index", {
    title: "Home",
    headerTitle: "The Crunchy Kale Restaurant",
    pageType: "home",
    favicon: "",
    dataArray: "",
    featuredText: "Features text",
  });
};
