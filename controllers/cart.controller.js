export const renderCart = (req, res) => {
  res.render("pages/cart", {
    title: "Home",
    headerTitle: "Cart",
    pageType: "home",
    favicon: "",
    dataArray: "",
    featuredText: "Features text",
  });
};
