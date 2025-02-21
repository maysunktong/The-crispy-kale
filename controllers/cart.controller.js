export const renderCart = (req, res) => {
  res.render("pages/cart", {
    title: "Home",
    headerTitle: "Home",
    pageType: "home",
    favicon: "",
    dataArray: "",
    featuredText: "Features text",
  });
}
