export const renderLocation = (req, res) => {
  res.render("pages/locations", {
    title: "locations",
    headerTitle: "Locations",
    pageType: "locations",
    favicon: "",
    dataArray: "",
    featuredText: "Features text",
  });
};
