import { allMenu } from "../data/foodData.js";
import { getImageUrl } from '../utils/functions.js';

export const renderHome = (req, res) => {
  const getHomeParams = req.params.home
  res.render("pages/index", {
    title: "Home",
    headerTitle: "The Crunchy Kale Restaurant",
    pageType: "home",
    favicon: "",
    dataArray: allMenu.map((item) => ({
      ...item,
      image: getImageUrl(item.category, item.slug),
    })),
    featuredText: "Features text",
  });
};
