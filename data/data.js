class Menu {
  constructor(name, group, description, dietary, nutrition, price, image) {
    this.name = name;
    this.group = group;
    this.description = description;
    this.dietary = dietary;
    this.nutrition = nutrition;
    this.price = price;
    this.image = image;
  }
}

const salads = [
  new Menu(
    "Cobb",
    "salad",
    "Iceberg & romaine lettuce, grilled chicken breast, crispy bacon, organic egg, blue cheese, hass avocado, cherry tomato and dijon mustard vinaigrette.",
    {
      vegan: false,
      vegetarian: false,
      keto: true,
      collagen: false,
      "plant-based": false,
      "high-protein": true,
      spicy: false,
      "dairy-free": false,
    },
    { kCal: 315, fat: 23, protein: 20, carbs: 7 },
    125,
    ""
  ),
];
