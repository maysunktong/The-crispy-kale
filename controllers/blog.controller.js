export const renderBlog = (req, res) => {
  res.render("pages/blog", {
    title: "blog",
    headerTitle: "Blog",
    pageType: "blog",
    favicon: "",
    dataArray: "",
    featuredText: "Features text",
  });
};
