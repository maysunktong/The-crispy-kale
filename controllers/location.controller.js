export const renderLocation = (req, res) => {
  res.render("pages/locations", {
    title: "location",
    headerTitle: "Locations",
    pageType: "location",
    favicon: "",
    dataArray: "",
    featuredText: "Features text",
  });
};
