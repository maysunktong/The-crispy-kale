export const renderLocation = (req, res) => {
  res.render("pages/locations", {
    title: "Home",
    headerTitle: "Locations",
    pageType: "home",
    favicon: "",
    dataArray: "",
    featuredText: "Features text",
  });
};
