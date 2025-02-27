export const renderCart = (req, res) => {
  res.render("pages/cart", {
    title: "cart",
    headerTitle: "Cart",
    pageType: "cart",
    favicon: "",
    dataArray: "",
    featuredText: "Features text",
  });
};
