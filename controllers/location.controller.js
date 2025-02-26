export const renderLocation = (req, res) => {
  res.render("pages/locations", {
    title: "Home",
    headerTitle: "Locations",
    pageType: "location",
    favicon: "",
    dataArray: "",
    featuredText: "Features text",
  });
};
