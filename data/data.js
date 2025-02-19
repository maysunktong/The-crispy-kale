function slugify(text) {
  return text
    .toString()
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-");
}

class Menu {
  constructor(name, group, description, dietary, nutrition, price, image) {
    this.name = name;
    this.group = group;
    this.description = description;
    this.dietary = dietary;
    this.nutrition = nutrition;
    this.price = price;
    this.image = slugify(name);
    this.slug = slugify(name);
  }
}

const salads = [
  new Menu(
    "Cobb",
    "salad",
    "iceberg & romaine lettuce, grilled chicken breast, crispy bacon, organic egg, blue cheese, hass avocado, cherry tomato and dijon mustard vinaigrette.",
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
    129
  ),
  new Menu(
    "Classic Caesar",
    "salad",
    "romaine, crispy bacon, quail egg, parmesan cheese, whole wheat croutons and getfresh signature caesar dressing",
    {
      vegan: false,
      vegetarian: false,
      keto: false,
      collagen: false,
      "plant-based": false,
      "high-protein": true,
      spicy: false,
      "dairy-free": false,
    },
    { kCal: 155, fat: 7, protein: 12, carbs: 11 },
    129
  ),
  new Menu(
    "Roast Beef Cobb",
    "salad",
    "iceberg & romaine lettuce, australian roast beef, crispy bacon, organic egg, blue cheese, avocado, cherry tomato and dijon mustard vinaigrette",
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
    { kCal: 320, fat: 24, protein: 18, carbs: 8 },
    159
  ),
  new Menu(
    "Roast Beef Club",
    "salad",
    "mixed oak, australian roast beef, paris ham, crispy bacon, organic egg, cheddar cheese, japanese cucumber, cherry tomato and thousand island dressing",
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
    { kCal: 257, fat: 17, protein: 21, carbs: 5 },
    159
  ),
  new Menu(
    "Smoked Salmon Caesar",
    "salad",
    "romaine, smoked atlantic salmon, crispy bacon, quail egg, parmesan cheese, whole wheat croutons and getfresh signature caesar dressing",
    {
      vegan: false,
      vegetarian: false,
      keto: false,
      collagen: false,
      "plant-based": false,
      "high-protein": true,
      spicy: false,
      "dairy-free": false,
    },
    { kCal: 160, fat: 8, protein: 10, carbs: 12 },
    149
  ),
  new Menu(
    "Grilled Chicken Caesar",
    "salad",
    "romaine, grilled chicken breast, crispy bacon, quail egg, parmesan cheese, whole wheat croutons and getfresh signature caesar dressing",
    {
      vegan: false,
      vegetarian: false,
      keto: false,
      collagen: false,
      "plant-based": false,
      "high-protein": true,
      spicy: false,
      "dairy-free": false,
    },
    { kCal: 172, fat: 8, protein: 13, carbs: 12 },
    139
  ),
  new Menu(
    "Grilled Salmon Caesar",
    "salad",
    "romaine, grilled atlantic salmon steak, crispy bacon, quail egg, parmesan cheese, whole wheat croutons and getfresh signature caesar dressing",
    {
      vegan: false,
      vegetarian: false,
      keto: false,
      collagen: false,
      "plant-based": false,
      "high-protein": true,
      spicy: false,
      "dairy-free": false,
    },
    { kCal: 165, fat: 8, protein: 9, carbs: 12 },
    149
  ),
  new Menu(
    "New Orleans",
    "salad",
    "mixed oak, cajun spiced chicken breast, cherry tomato, japanese cucumber, quail egg, edamame, roasted red pepper, sweet corn, feta cheese and sundried tomato vinaigrette",
    {
      vegan: false,
      vegetarian: false,
      keto: false,
      collagen: false,
      "plant-based": false,
      "high-protein": true,
      spicy: false,
      "dairy-free": false,
    },
    { kCal: 283, fat: 18, protein: 19, carbs: 10 },
    139
  ),
  new Menu(
    "Mexican Chopped Chicken",
    "salad",
    "mixed lettuce, spiced chicken breast, red beans, hass avocado, jalapeno salsa, roasted red peppers, cheddar cheese, red onion, sweet corn, cherry tomato, smashed tortilla chips, spiced avocado dressing",
    {
      vegan: false,
      vegetarian: false,
      keto: false,
      collagen: false,
      "plant-based": false,
      "high-protein": true,
      spicy: true,
      "dairy-free": false,
    },
    { kCal: 366, fat: 30, protein: 12, carbs: 12 },
    139
  ),
  new Menu(
    "The Vegan Amigo",
    "salad",
    "mixed lettuce, mexican spiced tempeh, red bean, avocado, jalapeño salsa, red bell pepper, red onion, sweet corn, cherry tomato, smashed tortilla chips, spiced avocado dressing",
    {
      vegan: true,
      vegetarian: false,
      keto: false,
      collagen: false,
      "plant-based": false,
      "high-protein": false,
      spicy: true,
      "dairy-free": false,
    },
    { kCal: 292, fat: 24, protein: 8, carbs: 11 },
    139
  ),
  new Menu(
    "The Greek",
    "salad",
    "iceberg lettuce, japanese cucumber, bell pepper, cherry tomato, red onion, kalamata olive, feta cheese, oregano and lemon-lime vinaigrette",
    {
      vegan: false,
      vegetarian: true,
      keto: false,
      collagen: false,
      "plant-based": false,
      "high-protein": false,
      spicy: false,
      "dairy-free": false,
    },
    { kCal: 149, fat: 9, protein: 3, carbs: 14 },
    139
  ),
  new Menu(
    "Roasted Japanese Pumpkin",
    "salad",
    "roasted roasted japanese kabocha pumpkin, wild rocket, cherry tomato, red onion, roasted red pepper, sundried tomato, feta cheese, sunflower seeds, honey balsamic dressing",
    {
      vegan: true,
      vegetarian: false,
      keto: false,
      collagen: false,
      "plant-based": false,
      "high-protein": false,
      spicy: false,
      "dairy-free": false,
    },
    { kCal: 344, fat: 12, protein: 12, carbs: 47 },
    139
  ),
];

const soups = [
  new Menu(
    "Japanese Pumpkin",
    "soup",
    "creamy japanese kabocha pumpkin soup with sunflower seeds",
    {
      vegan: true,
      vegetarian: false,
      keto: false,
      collagen: false,
      "plant-based": false,
      "high-protein": false,
      spicy: false,
      "dairy-free": false,
    },
    { kCal: 128, fat: 4, protein: 5, carbs: 18 },
    79
  ),
  new Menu(
    "Minestrone",
    "soup",
    "diced italian vegetables in rich tomato broth with orzo pasta and fresh basil",
    {
      vegan: true,
      vegetarian: false,
      keto: false,
      collagen: false,
      "plant-based": false,
      "high-protein": false,
      spicy: false,
      "dairy-free": false,
    },
    { kCal: 197, fat: 5, protein: 5, carbs: 33 },
    79
  ),
  new Menu(
    "Tomato and Basil",
    "soup",
    "classic mediterranean tomato soup with italian basil",
    {
      vegan: true,
      vegetarian: false,
      keto: false,
      collagen: false,
      "plant-based": false,
      "high-protein": false,
      spicy: false,
      "dairy-free": false,
    },
    { kCal: 89, fat: 2, protein: 3, carbs: 18 },
    79
  ),
  new Menu(
    "Broccoli and Spinach",
    "soup",
    "blended broccoli and baby spinach topped with whole wheat croutons",
    {
      vegan: true,
      vegetarian: false,
      keto: false,
      collagen: false,
      "plant-based": false,
      "high-protein": false,
      spicy: false,
      "dairy-free": false,
    },
    { kCal: 118, fat: 2, protein: 8, carbs: 16 },
    79
  ),
  new Menu(
    "Multi Grain Toast",
    "soup",
    "sourdough toast served with butter",
    {
      vegan: false,
      vegetarian: true,
      keto: false,
      collagen: false,
      "plant-based": false,
      "high-protein": false,
      spicy: false,
      "dairy-free": false,
    },
    { kCal: 180, fat: 4, protein: 8, carbs: 24 },
    29
  ),
];

const desserts = [
  new Menu(
    "Mango Sunrise Smoothie Bowl",
    ["desserts", "smoothie bowl"],
    "creamy mango, passion fruit & coconut milk smoothie base, topped with honey nut granola, fresh mango, toasted almonds and chia seeds",
    {
      vegan: false,
      vegetarian: true,
      keto: false,
      collagen: false,
      "plant-based": false,
      "high-protein": false,
      spicy: false,
      "dairy-free": false,
    },
    { kCal: 336, fat: 8, protein: 8, carbs: 62 },
    119
  ),
  new Menu(
    "Chocolate Dream Smoothie Bowl",
    ["desserts", "smoothie bowl"],
    "chocolate and cashew nut butter base with whey protein and milk topped with dark chocolate chips, roasted coconut, chia seeds and toasted almonds",
    {
      vegan: false,
      vegetarian: true,
      keto: false,
      collagen: false,
      "plant-based": false,
      "high-protein": true,
      spicy: false,
      "dairy-free": false,
    },
    { kCal: 461, fat: 13, protein: 21, carbs: 65 },
    119
  ),
  new Menu(
    "Overnight Oats",
    ["desserts", "jar"],
    "rolled oats, milk, wild honey, chia seeds, dried cranberries and toasted almonds",
    {
      vegan: false,
      vegetarian: true,
      keto: false,
      collagen: false,
      "plant-based": false,
      "high-protein": true,
      spicy: false,
      "dairy-free": false,
    },
    { kCal: 489, fat: 13, protein: 28, carbs: 63 },
    79
  ),
  new Menu(
    "Strawberry and Coconut Chia Pudding",
    ["desserts", "jar"],
    "slow-cooked chia seed, coconut milk sugar-free strawberry jam",
    {
      vegan: true,
      vegetarian: false,
      keto: false,
      collagen: false,
      "plant-based": false,
      "high-protein": false,
      spicy: false,
      "dairy-free": true,
    },
    { kCal: 195, fat: 11, protein: 4, carbs: 20 },
    79
  ),
  new Menu(
    "Mango and Coconut Chia Pudding",
    ["desserts", "jar"],
    "slow-cooked chia seeds, coconut milk and sugar-free mango jam",
    {
      vegan: true,
      vegetarian: false,
      keto: false,
      collagen: false,
      "plant-based": false,
      "high-protein": false,
      spicy: false,
      "dairy-free": true,
    },
    { kCal: 178, fat: 10, protein: 4, carbs: 19 },
    79
  ),
  new Menu(
    "Carrot Cake",
    ["desserts", "cake"],
    "dairy-free carrot cake with raisins, walnut, cinnamon and velvety cashew cream cheese frosting",
    {
      vegan: true,
      vegetarian: false,
      keto: false,
      collagen: false,
      "plant-based": false,
      "high-protein": false,
      spicy: false,
      "dairy-free": true,
    },
    { kCal: 439, fat: 23, protein: 9, carbs: 49 },
    59
  ),
  new Menu(
    "Dark Chocolate Mousse Pie",
    ["desserts", "cake"],
    "rich and moist chocolate mousse infused with premium cacao and coconut cream",
    {
      vegan: true,
      vegetarian: false,
      keto: false,
      collagen: false,
      "plant-based": false,
      "high-protein": false,
      spicy: false,
      "dairy-free": true,
    },
    { kCal: 380, fat: 24, protein: 6, carbs: 35 },
    69
  ),
];

const beverages = [
  new Menu(
    "Lemonrange",
    ["beverage", "juice", "cold"],
    "lemon, pineapple, orange",
    {
      vegan: true,
      vegetarian: true,
      keto: false,
      collagen: false,
      "plant-based": false,
      "high-protein": false,
      spicy: false,
      "dairy-free": true,
    },
    {},
    59
  ),
  new Menu(
    "Carranger",
    ["beverage", "juice", "cold"],
    "carrot, orange and ginger",
    {
      vegan: true,
      vegetarian: true,
      keto: false,
      collagen: false,
      "plant-based": false,
      "high-protein": false,
      spicy: false,
      "dairy-free": true,
    },
    {},
    59
  ),
  new Menu(
    "Barrot",
    ["beverage", "juice", "cold"],
    "beetroot, green apple, carrot and orange",
    {
      vegan: true,
      vegetarian: true,
      keto: false,
      collagen: false,
      "plant-based": false,
      "high-protein": false,
      spicy: false,
      "dairy-free": true,
    },
    {},
    59
  ),
  new Menu(
    "Tangerine",
    ["beverage", "juice", "cold"],
    "pure tangerine orange juice",
    {
      vegan: true,
      vegetarian: true,
      keto: false,
      collagen: false,
      "plant-based": false,
      "high-protein": false,
      spicy: false,
      "dairy-free": true,
    },
    {},
    59
  ),
  new Menu(
    "Espresso",
    ["beverage", "coffee", "hot"],
    "Excellent espresso shot",
    {
      vegan: true,
      vegetarian: true,
      keto: false,
      collagen: false,
      "plant-based": false,
      "high-protein": false,
      spicy: false,
      "dairy-free": true,
    },
    {},
    49
  ),
  new Menu(
    "Americano",
    ["beverage", "coffee", "hot"],
    "A cup of Americano to begin your day",
    {
      vegan: true,
      vegetarian: true,
      keto: false,
      collagen: false,
      "plant-based": false,
      "high-protein": false,
      spicy: false,
      "dairy-free": true,
    },
    {},
    49
  ),
  new Menu(
    "Cappuccino",
    ["beverage", "coffee", "hot"],
    "A cup of Cappuccino",
    {
      vegan: false,
      vegetarian: true,
      keto: false,
      collagen: false,
      "plant-based": false,
      "high-protein": false,
      spicy: false,
      "dairy-free": false,
    },
    {},
    49
  ),
  new Menu(
    "Iced Americano",
    ["beverage", "coffee", "ice"],
    "A cup of Iced Americano",
    {
      vegan: true,
      vegetarian: true,
      keto: false,
      collagen: false,
      "plant-based": false,
      "high-protein": false,
      spicy: false,
      "dairy-free": true,
    },
    {},
    49
  ),
  new Menu(
    "Iced Coconut Long Black",
    ["beverage", "coffee", "ice"],
    "A cup of Iced Coconut Long Black Coffee",
    {
      vegan: true,
      vegetarian: true,
      keto: false,
      collagen: false,
      "plant-based": false,
      "high-protein": false,
      spicy: false,
      "dairy-free": true,
    },
    {},
    49
  ),
  new Menu(
    "Iced Lemon Tea",
    ["beverage", "tea", "ice"],
    "A cup of Iced Lemon Tea",
    {
      vegan: true,
      vegetarian: true,
      keto: false,
      collagen: false,
      "plant-based": false,
      "high-protein": false,
      spicy: false,
      "dairy-free": true,
    },
    {},
    49
  ),
  new Menu(
    "Latte",
    ["beverage", "coffee", "hot"],
    "A cup of Latte",
    {
      vegan: false,
      vegetarian: true,
      keto: false,
      collagen: false,
      "plant-based": false,
      "high-protein": false,
      spicy: false,
      "dairy-free": false,
    },
    {},
    49
  ),
  new Menu(
    "Strawberry Matcha Latte",
    ["beverage", "tea", "ice"],
    "A cup of Strawberry Matcha Latte",
    {
      vegan: false,
      vegetarian: true,
      keto: false,
      collagen: false,
      "plant-based": false,
      "high-protein": false,
      spicy: false,
      "dairy-free": false,
    },
    {},
    49
  ),
  new Menu(
    "Thai Breakfast Tea",
    ["beverage", "tea", "hot"],
    "A cup of Thai Tea for your breakfast",
    {
      vegan: true,
      vegetarian: true,
      keto: false,
      collagen: false,
      "plant-based": false,
      "high-protein": false,
      spicy: false,
      "dairy-free": true,
    },
    {},
    49
  ),
];
