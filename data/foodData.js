function slugify(text) {
  return text
    .toString()
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "");
}

class Menu {
  constructor(
    name,
    category,
    description,
    dietary,
    nutrition,
    price,
    bestseller
  ) {
    this.name = name;
    this.category = category;
    this.description = description;
    this.dietary = dietary;
    this.nutrition = nutrition;
    this.price = price;
    this.bestseller = bestseller;
    this.image = slugify(name);
    this.slug = slugify(name);
  }
}

const salads = [
  new Menu(
    "Cobb",
    "salads",
    "iceberg & romaine lettuce, grilled chicken breast, crispy bacon, organic egg, blue cheese, hass avocado, cherry tomato and dijon mustard vinaigrette.",
    {
      vegan: false,
      vegetarian: false,
      keto: true,
      "high-protein": true,
      spicy: false,
      "dairy-free": false,
    },
    { kCal: 315, fat: 23, protein: 20, carbs: 7 },
    129,
    false
  ),
  new Menu(
    "Classic Caesar",
    "salads",
    "romaine, crispy bacon, quail egg, parmesan cheese, whole wheat croutons and getfresh signature caesar dressing",
    {
      vegan: false,
      vegetarian: false,
      keto: false,
      "high-protein": true,
      spicy: false,
      "dairy-free": false,
    },
    { kCal: 155, fat: 7, protein: 12, carbs: 11 },
    129,
    true
  ),
  new Menu(
    "Roast Beef Cobb",
    "salads",
    "iceberg & romaine lettuce, australian roast beef, crispy bacon, organic egg, blue cheese, avocado, cherry tomato and dijon mustard vinaigrette",
    {
      vegan: false,
      vegetarian: false,
      keto: true,
      "high-protein": true,
      spicy: false,
      "dairy-free": false,
    },
    { kCal: 320, fat: 24, protein: 18, carbs: 8 },
    159,
    false
  ),
  new Menu(
    "Roast Beef Club",
    "salads",
    "mixed oak, australian roast beef, paris ham, crispy bacon, organic egg, cheddar cheese, japanese cucumber, cherry tomato and thousand island dressing",
    {
      vegan: false,
      vegetarian: false,
      keto: true,
      "high-protein": true,
      spicy: false,
      "dairy-free": false,
    },
    { kCal: 257, fat: 17, protein: 21, carbs: 5 },
    159,
    false
  ),
  new Menu(
    "Smoked Salmon Caesar",
    "salads",
    "romaine, smoked atlantic salmon, crispy bacon, quail egg, parmesan cheese, whole wheat croutons and getfresh signature caesar dressing",
    {
      vegan: false,
      vegetarian: false,
      keto: false,
      "high-protein": true,
      spicy: false,
      "dairy-free": false,
    },
    { kCal: 160, fat: 8, protein: 10, carbs: 12 },
    149,
    true
  ),
  new Menu(
    "Grilled Chicken Caesar",
    "salads",
    "romaine, grilled chicken breast, crispy bacon, quail egg, parmesan cheese, whole wheat croutons and getfresh signature caesar dressing",
    {
      vegan: false,
      vegetarian: false,
      keto: false,
      "high-protein": true,
      spicy: false,
      "dairy-free": false,
    },
    { kCal: 172, fat: 8, protein: 13, carbs: 12 },
    139,
    true
  ),
  new Menu(
    "Grilled Salmon Caesar",
    "salads",
    "romaine, grilled atlantic salmon steak, crispy bacon, quail egg, parmesan cheese, whole wheat croutons and getfresh signature caesar dressing",
    {
      vegan: false,
      vegetarian: false,
      keto: false,
      "high-protein": true,
      spicy: false,
      "dairy-free": false,
    },
    { kCal: 165, fat: 8, protein: 9, carbs: 12 },
    149,
    false
  ),
  new Menu(
    "New Orleans",
    "salads",
    "mixed oak, cajun spiced chicken breast, cherry tomato, japanese cucumber, quail egg, edamame, roasted red pepper, sweet corn, feta cheese and sundried tomato vinaigrette",
    {
      vegan: false,
      vegetarian: false,
      keto: false,
      "high-protein": true,
      spicy: false,
      "dairy-free": false,
    },
    { kCal: 283, fat: 18, protein: 19, carbs: 10 },
    139,
    false
  ),
  new Menu(
    "Mexican Chopped Chicken",
    "salads",
    "mixed lettuce, spiced chicken breast, red beans, hass avocado, jalapeno salsa, roasted red peppers, cheddar cheese, red onion, sweet corn, cherry tomato, smashed tortilla chips, spiced avocado dressing",
    {
      vegan: false,
      vegetarian: false,
      keto: false,
      "high-protein": true,
      spicy: true,
      "dairy-free": false,
    },
    { kCal: 366, fat: 30, protein: 12, carbs: 12 },
    139,
    false
  ),
  new Menu(
    "The Vegan Amigo",
    "salads",
    "mixed lettuce, mexican spiced tempeh, red bean, avocado, jalapeño salsa, red bell pepper, red onion, sweet corn, cherry tomato, smashed tortilla chips, spiced avocado dressing",
    {
      vegan: true,
      vegetarian: false,
      keto: false,
      "high-protein": false,
      spicy: true,
      "dairy-free": false,
    },
    { kCal: 292, fat: 24, protein: 8, carbs: 11 },
    139,
    false
  ),
  new Menu(
    "The Greek",
    "salads",
    "iceberg lettuce, japanese cucumber, bell pepper, cherry tomato, red onion, kalamata olive, feta cheese, oregano and lemon-lime vinaigrette",
    {
      vegan: false,
      vegetarian: true,
      keto: false,
      "high-protein": false,
      spicy: false,
      "dairy-free": false,
    },
    { kCal: 149, fat: 9, protein: 3, carbs: 14 },
    139,
    false
  ),
  new Menu(
    "Roasted Japanese Pumpkin",
    "salads",
    "roasted roasted japanese kabocha pumpkin, wild rocket, cherry tomato, red onion, roasted red pepper, sundried tomato, feta cheese, sunflower seeds, honey balsamic dressing",
    {
      vegan: true,
      vegetarian: false,
      keto: false,
      "high-protein": false,
      spicy: false,
      "dairy-free": false,
    },
    { kCal: 344, fat: 12, protein: 12, carbs: 47 },
    139,
    true
  ),
];

const soups = [
  new Menu(
    "Japanese Pumpkin",
    "soups",
    "creamy japanese kabocha pumpkin soups with sunflower seeds",
    {
      vegan: false,
      vegetarian: true,
      keto: false,
      "high-protein": true,
      spicy: false,
      "dairy-free": true,
    },
    { kCal: 128, fat: 4, protein: 5, carbs: 18 },
    79,
    true
  ),
  new Menu(
    "Minestrone",
    "soups",
    "diced italian vegetables in rich tomato broth with orzo pasta and fresh basil",
    {
      vegan: true,
      vegetarian: true,
      keto: false,
      "high-protein": false,
      spicy: false,
      "dairy-free": true,
    },
    { kCal: 197, fat: 5, protein: 5, carbs: 33 },
    79,
    false
  ),
  new Menu(
    "Tomato and Basil",
    "soups",
    "classic mediterranean tomato soups with italian basil",
    {
      vegan: true,
      vegetarian: true,
      keto: true,
      "high-protein": false,
      spicy: false,
      "dairy-free": true,
    },
    { kCal: 89, fat: 2, protein: 3, carbs: 18 },
    79,
    true
  ),
  new Menu(
    "Broccoli and Spinach",
    "soups",
    "blended broccoli and baby spinach topped with whole wheat croutons",
    {
      vegan: false,
      vegetarian: true,
      keto: false,
      "high-protein": false,
      spicy: false,
      "dairy-free": false,
    },
    { kCal: 118, fat: 2, protein: 8, carbs: 16 },
    79,
    false
  ),
  new Menu(
    "Multi Grain Toast",
    "soups",
    "sourdough toast served with butter",
    {
      vegan: true,
      vegetarian: true,
      keto: false,
      "high-protein": true,
      spicy: false,
      "dairy-free": true,
    },
    { kCal: 180, fat: 4, protein: 8, carbs: 24 },
    29,
    false
  ),
];

const desserts = [
  new Menu(
    "Mango Sunrise Smoothie Bowl",
    "desserts",
    "creamy mango, passion fruit & coconut milk smoothie base, topped with honey nut granola, fresh mango, toasted almonds and chia seeds",
    {
      vegan: false,
      vegetarian: true,
      keto: false,
      "high-protein": false,
      spicy: false,
      "dairy-free": false,
    },
    { kCal: 336, fat: 8, protein: 8, carbs: 62 },
    119,
    true
  ),
  new Menu(
    "Chocolate Dream Smoothie Bowl",
    "desserts",
    "chocolate and cashew nut butter base with whey protein and milk topped with dark chocolate chips, roasted coconut, chia seeds and toasted almonds",
    {
      vegan: false,
      vegetarian: true,
      keto: false,
      "high-protein": true,
      spicy: false,
      "dairy-free": false,
    },
    { kCal: 461, fat: 13, protein: 21, carbs: 65 },
    119,
    true
  ),
  new Menu(
    "Overnight Oats",
    "desserts",
    "rolled oats, milk, wild honey, chia seeds, dried cranberries and toasted almonds",
    {
      vegan: false,
      vegetarian: true,
      keto: false,
      "high-protein": true,
      spicy: false,
      "dairy-free": false,
    },
    { kCal: 489, fat: 13, protein: 28, carbs: 63 },
    79,
    true
  ),
  new Menu(
    "Strawberry and Coconut Chia Pudding",
    "desserts",
    "slow-cooked chia seed, coconut milk sugar-free strawberry jam",
    {
      vegan: true,
      vegetarian: false,
      keto: false,
      "high-protein": false,
      spicy: false,
      "dairy-free": true,
    },
    { kCal: 195, fat: 11, protein: 4, carbs: 20 },
    79,
    true
  ),
  new Menu(
    "Mango and Coconut Chia Pudding",
    "desserts",
    "slow-cooked chia seeds, coconut milk and sugar-free mango jam",
    {
      vegan: true,
      vegetarian: false,
      keto: false,
      "high-protein": false,
      spicy: false,
      "dairy-free": true,
    },
    { kCal: 178, fat: 10, protein: 4, carbs: 19 },
    79,
    true
  ),
  new Menu(
    "Carrot Cake",
    "desserts",
    "dairy-free carrot cake with raisins, walnut, cinnamon and velvety cashew cream cheese frosting",
    {
      vegan: true,
      vegetarian: false,
      keto: false,
      "high-protein": false,
      spicy: false,
      "dairy-free": true,
    },
    { kCal: 439, fat: 23, protein: 9, carbs: 49 },
    59,
    false
  ),
  new Menu(
    "Dark Chocolate Mousse Pie",
    "desserts",
    "rich and moist chocolate mousse infused with premium cacao and coconut cream",
    {
      vegan: true,
      vegetarian: false,
      keto: false,
      "high-protein": false,
      spicy: false,
      "dairy-free": true,
    },
    { kCal: 380, fat: 24, protein: 6, carbs: 35 },
    69,
    false
  ),
];

const beverages = [
  new Menu(
    "Lemonrange",
    "beverages",
    "lemon, pineapple, orange",
    {
      vegan: true,
      vegetarian: true,
      keto: false,
      "high-protein": false,
      spicy: false,
      "dairy-free": true,
    },
    {},
    59,
    true
  ),
  new Menu(
    "Carranger",
    "beverages",
    "carrot, orange and ginger",
    {
      vegan: true,
      vegetarian: true,
      keto: false,
      "high-protein": false,
      spicy: false,
      "dairy-free": true,
    },
    {},
    59,
    true
  ),
  new Menu(
    "Barrot",
    "beverages",
    "beetroot, green apple, carrot and orange",
    {
      vegan: true,
      vegetarian: true,
      keto: false,
      "high-protein": false,
      spicy: false,
      "dairy-free": true,
    },
    {},
    59,
    true
  ),
  new Menu(
    "Tangerine",
    "beverages",
    "pure tangerine orange juice",
    {
      vegan: true,
      vegetarian: true,
      keto: false,
      "high-protein": false,
      spicy: false,
      "dairy-free": true,
    },
    {},
    59,
    true
  ),
  new Menu(
    "Espresso",
    "beverages",
    "Excellent espresso shot",
    {
      vegan: true,
      vegetarian: true,
      keto: false,
      "high-protein": false,
      spicy: false,
      "dairy-free": true,
    },
    {},
    49,
    false
  ),
  new Menu(
    "Americano",
    "beverages",
    "A cup of Americano to begin your day",
    {
      vegan: true,
      vegetarian: true,
      keto: false,
      "high-protein": false,
      spicy: false,
      "dairy-free": true,
    },
    {},
    49,
    false
  ),
  new Menu(
    "Cappuccino",
    "beverages",
    "A cup of Cappuccino",
    {
      vegan: false,
      vegetarian: true,
      keto: false,
      "high-protein": false,
      spicy: false,
      "dairy-free": false,
    },
    {},
    49,
    false
  ),
  new Menu(
    "Iced Americano",
    "beverages",
    "A cup of Iced Americano",
    {
      vegan: true,
      vegetarian: true,
      keto: false,
      "high-protein": false,
      spicy: false,
      "dairy-free": true,
    },
    {},
    49,
    false
  ),
  new Menu(
    "Iced Coconut Long Black",
    "beverages",
    "A cup of Iced Coconut Long Black Coffee",
    {
      vegan: true,
      vegetarian: true,
      keto: false,
      "high-protein": false,
      spicy: false,
      "dairy-free": true,
    },
    {},
    49,
    true
  ),
  new Menu(
    "Iced Lemon Tea",
    "beverages",
    "A cup of Iced Lemon Tea",
    {
      vegan: true,
      vegetarian: true,
      keto: false,
      "high-protein": false,
      spicy: false,
      "dairy-free": true,
    },
    {},
    49,
    false
  ),
  new Menu(
    "Latte",
    "beverages",
    "A cup of Latte",
    {
      vegan: false,
      vegetarian: true,
      keto: false,
      "high-protein": false,
      spicy: false,
      "dairy-free": false,
    },
    {},
    49,
    false
  ),
  new Menu(
    "Thai Breakfast Tea",
    "beverages",
    "A cup of Thai Tea for your breakfast",
    {
      vegan: true,
      vegetarian: true,
      keto: false,
      "high-protein": false,
      spicy: false,
      "dairy-free": true,
    },
    {},
    49,
    false
  ),
];

const allMenu = [...salads, ...soups, ...desserts, ...beverages];

export { allMenu, beverages, desserts, salads, soups };
