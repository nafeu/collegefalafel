'use strict';

app.service('menuService', function() {

this.getMenu = function() {

  return {

    "SANDWICH_EAST_COAST_DONAIR": {
      "name": "East Coast Donair",
      "desc": "White or whole wheat pita - filled with donair meat & toppings of your choice with sweet donair sauce.",
      "price": "$10.99"
    },

    "SANDWICH_CHICKEN_SHAWARMA": {
      "name": "Chicken Shawarma",
      "desc": "White or whole wheat pita - filled with marinated chicken & toppings of your choice.",
      "price": "$9.99"
    },

    "SANDWICH_BEEF_SHAWARMA": {
      "name": "Beef Shawarma",
      "desc": "White or whole wheat pita - filled with marinated beef & toppings of your choice with sweet donair sauce.",
      "price": "$10.99"
    },

    "SANDWICH_LAMB_SHAWARMA": {
      "name": "Lamb Shawarma",
      "desc": "White or whole wheat pita - filled with marinated lamb & toppings of your choice.",
      "price": "$11.99"
    },

    "SANDWICH_FALAFEL": {
      "name": "Falafel",
      "desc": "White or whole wheat pita - filled with 3 vegan falafel balls & toppings of your choice.",
      "price": "$9.99"
    },

    "SANDWICH_CHICKEN_BREAST_KEBAB": {
      "name": "Chicken Breast Kebab",
      "desc": "White or whole wheat pita - filled with marinated chicken breast & toppings of your choice with sweet donair sauce.",
      "price": "$10.99"
    },

    "SANDWICH_VEAL_LIVER": {
      "name": "Veal Liver",
      "desc": "White or whole wheat pita - filled with marinated veal liver & toppings of your choice.",
      "price": "$10.99"
    },

    "SANDWICH_KEFTA_BURGER": {
      "name": "Kefta Burger",
      "desc": "White or whole wheat pita - filled with lean ground beef & toppings of your choice",
      "price": "$10.99"
    },

    "SANDWICH_VEGETARIAN": {
      "name": "Vegetarian",
      "desc": "White or whole wheat pita - filled with stuffed eggplant & toppings of your choice.",
      "price": "$9.99"
    },

    "SANDWICH_FISH_FILLET": {
      "name": "Fish Fillet",
      "desc": "White or whole wheat pita - filled with marinated fish fillet & toppings of your choice.",
      "price": "$11.99"
    },

    "SANDWICH_BREAKFAST_SANDWICH": {
      "name": "Breakfast Sandwich",
      "desc": "White or whole wheat pita - filled with scrambled eggs & toppings of your choice.",
      "price": "$9.99"
    },

    "PLATE_EAST_COAST_DONAIR": {
      "name": "East Coast Donair",
      "desc": "Rice with mixed vegetables and curried potatoes - with donair meat & sides and toppings of your choice with sweet donair sauce.",
      "price": "$16.99"
    },

    "PLATE_CHICKEN_SHAWARMA": {
      "name": "Chicken Shawarma",
      "desc": "Rice with mixed vegetables and curried potatoes - with marinated chicken & sides, toppings and sauces of your choice",
      "price": "$16.99"
    },

    "PLATE_BEEF_SHAWARMA": {
      "name": "Beef Shawarma",
      "desc": "Rice with mixed vegetables and curried potatoes - with marinated beef & sides, toppings and sauces of your choice",
      "price": "$16.99"
    },

    "PLATE_LAMB_SHAWARMA": {
      "name": "Lamb Shawarma",
      "desc": "Rice with mixed vegetables and curried potatoes - with marinated lamb & sides, toppings and sauces of your choice",
      "price": "$17.99"
    },

    "PLATE_FALAFEL": {
      "name": "Falafel",
      "desc": "Rice with mixed vegetables and curried potatoes - with 3 falafel balls & sides, toppings and sauces of your choice",
      "price": "$15.99"
    },

    "PLATE_CHICKEN_BREAST_KEBAB": {
      "name": "Chicken Breast Kebab",
      "desc": "Rice with mixed vegetables and curried potatoes - with marinated chicken breast & sides, toppings and sauces of your choice",
      "price": "$16.99"
    },

    "PLATE_VEAL_LIVER": {
      "name": "Veal Liver",
      "desc": "Rice with mixed vegetables and curried potatoes - with marinated veal liver & sides, toppings and sauces of your choice",
      "price": "$16.99"
    },

    "PLATE_KEFTA_BURGER": {
      "name": "Kefta Burger",
      "desc": "Rice with mixed vegetables and curried potatoes - with lean ground beef & sides, toppings and sauces of your choice",
      "price": "$16.99"
    },

    "PLATE_VEGETARIAN": {
      "name": "Vegetarian",
      "desc": "Rice with mixed vegetables and curried potatoes - with stuffed eggplant & sides, toppings and sauces of your choice",
      "price": "$16.99"
    },

    "PLATE_FISH_FILLET": {
      "name": "Fish Fillet",
      "desc": "Rice with mixed vegetables and curried potatoes - with marinated fish fillet & sides, toppings and sauces of your choice",
      "price": "$17.99"
    },

    "PLATE_SHRIMP": {
      "name": "Shrimp",
      "desc": "Rice with mixed vegetables and curried potatoes - with shrimp & sides, toppings and sauces of your choice",
      "price": "$17.99"
    },

    "SIDE_SPINACH_PIE": {
      "name": "Spinach Pie",
      "desc": "Spinach, feta cheese, onion, dill, egg, olive oil, baked into phyllo.",
      "price": "$4.59"
    },

    "SIDE_CHEESE_PIE": {
      "name": "Cheese Pie",
      "desc": "Feta cheese, butter, egg, olive oil, wrapped into a crisp phyllo shell.",
      "price": "$4.59"
    },

    "SIDE_LEEK_ROLL": {
      "name": "Leek Roll",
      "desc": "Leek, cheese, onion, egg, olive oil, wrapped into a crisp phyllo roll.",
      "price": "$3.49"
    },

    "SIDE_CHICKEN_SAMOUSA": {
      "name": "Chicken Samousa",
      "desc": "Chicken - Potato, corn, green peas, carrots.",
      "price": "$3.49"
    },

    "SIDE_BEEF_SAMOUSA": {
      "name": "Beef Samousa",
      "desc": "Beef - Potato, corn, green peas, carrots.",
      "price": "$3.49"
    },

    "SIDE_VEGETABLE_SAMOUSA": {
      "name": "Vegetable Samousa",
      "desc": "Veggie - Potato, corn, green peas, carrots.",
      "price": "$3.49"
    },

    "SIDE_GRAPE_VINE_ROLL_GF": {
      "name": "Grape Vine Roll (GF)",
      "desc": "Grape leaves stuffed with fresh herbs, rice, tomato & onion. Cooked to perfection",
      "price": "$2.29"
    },

    "SIDE_FALAFEL_BALL_GF": {
      "name": "Falafel Ball (GF)",
      "desc": "Choice of chickpea, fava bean or mix of both (3 falafel balls).",
      "price": "$4.99"
    },

    "SIDE_LENTIL_SOUP_GF": {
      "name": "Lentil Soup (GF)",
      "desc": "Soup with green lentils, herbs, onions, tomato, carrots, and garlic.",
      "price": "$6.89"
    },

    "SIDE_STUFFED_EGGPLANT_GF": {
      "name": "Stuffed Eggplant (GF)",
      "desc": "Filled with eggplant, onion, garlic, tomatoes, and fresh herbs.",
      "price": "$8.99"
    },

    "SIDE_HUMMUS_GF": {
      "name": "Hummus (GF)",
      "desc": "Made from boiled chickpeas, Tahina (sesame sauce), garlic, lemon and, black pepper",
      "price": "$4.59"
    },

    "SIDE_STUFFED_PEPPER_GF": {
      "name": "Stuffed Pepper (GF)",
      "desc": "Filled with green or red pepper, rice, tomato, onion, and fresh herbs.",
      "price": "$8.99"
    },

    "SIDE_CURRIED_POTATOES_GF": {
      "name": "Curried Potatoes (GF)",
      "desc": "(n/a)",
      "price": "$6.89"
    },

    "SIDE_RICE_WITH_MIXED_VEGETABLES_GF": {
      "name": "Rice With Mixed Vegetables (GF)",
      "desc": "(n/a)",
      "price": "$6.89"
    },

    "SIDE_FRESH_CUT_FRIES_GF": {
      "name": "Fresh Cut Fries (GF)",
      "desc": "(n/a)",
      "price": "$6.89"
    },

    "SALAD_CHICKPEA_SALAD_GF": {
      "name": "Chickpea Salad (GF) ",
      "desc": "Chickpea, red onion, carrot, green pepper, red pepper, celery.",
      "price": "$7.99"
    },

    "SALAD_TABOULI_SALAD": {
      "name": "Tabouli Salad",
      "desc": "Parsley, red onion, diced tomatoes, bollgur (chopped wheat or grain).",
      "price": "$7.99"
    },

    "SALAD_MEDITERRANEAN_SALAD_GF": {
      "name": "Mediterranean Salad (GF)",
      "desc": "Tomatoes, green or red pepper, red onion, lettuce, cucumber, feta.",
      "price": "$7.99"
    },

    "COMBO_EAST_COAST_DONAIR": {
      "name": "East Coast Donair",
      "desc": "Combo includes a donair sandwich with your choice of toppings and sauces a beverage and a soup or salad.",
      "price": "$16.99"
    },

    "COMBO_CHICKEN_SHAWARMA": {
      "name": "Chicken Shawarma",
      "desc": "Combo includes a chicken shawarmasandwich with your choice of toppings and sauces a beverage and a soup or salad.",
      "price": "$16.99"
    },

    "COMBO_BEEF_SHAWARMA": {
      "name": "Beef Shawarma",
      "desc": "Combo includes a beef shawarma sandwich with your choice of toppings and sauces a beverage and a soup or salad.",
      "price": "$16.99"
    },

    "COMBO_LAMB_SHAWARMA": {
      "name": "Lamb Shawarma",
      "desc": "Combo includes a lamb shawarma sandwich with your choice of toppings and sauces a beverage and a soup or salad.",
      "price": "$17.99"
    },

    "COMBO_FALAFEL": {
      "name": "Falafel",
      "desc": "Combo includes a falafel sandwich with your choice of toppings and sauces a beverage and a soup or salad.",
      "price": "$15.99"
    },

    "COMBO_CHICKEN_BREAST_KEBAB": {
      "name": "Chicken Breast Kebab",
      "desc": "Combo includes a chicken breast kebab sandwich with your choice of toppings and sauces a beverage and a soup or salad.",
      "price": "$16.99"
    },

    "COMBO_VEAL_LIVER": {
      "name": "Veal Liver",
      "desc": "Combo includes a veal liversandwich with your choice of toppings and sauces a beverage and a soup or salad.",
      "price": "$16.99"
    },

    "COMBO_KEFTA_BURGER": {
      "name": "Kefta Burger",
      "desc": "Combo includes a kefta burger sandwich with your choice of toppings and sauces a beverage and a soup or salad.",
      "price": "$16.99"
    },

    "COMBO_VEGETARIAN": {
      "name": "Vegetarian",
      "desc": "Combo includes a vegetarian sandwich with your choice of toppings and sauces a beverage and a soup or salad.",
      "price": "$16.99"
    },

    "COMBO_FISH_FILLET": {
      "name": "Fish Fillet",
      "desc": "Combo includes a fish fillet sandwich with your choice of toppings and sauces a beverage and a soup or salad.",
      "price": "$17.99"
    },

    "COMBO_BREAKFAST_SANDWICH": {
      "name": "Breakfast Sandwich",
      "desc": "Combo includes a breakfest sandwich with your choice of toppings and sauces a beverage and a soup or salad.",
      "price": "$17.99"
    },

    "DESSERT_RICE_PUDDING_GF": {
      "name": "Rice Pudding (GF)",
      "desc": "Arborio rice with milk and sugar topped with cinnamon ",
      "price": "$4.59"
    },

    "DESSERT_TRIANGLE_BAKLAVA": {
      "name": "Triangle Baklava",
      "desc": "Phyllo pastry filled with walnuts, cinnamon & sweetened with honey.",
      "price": "$4.59"
    },

    "DESSERT_FINGER_BAKLAVA": {
      "name": "Finger Baklava",
      "desc": "Phyllo pastry filled with chopped nuts & sweetened with honey & rolled into logs.",
      "price": "$3.49"
    },

    "DESSERT_ALMOND_COOKIE": {
      "name": "Almond Cookie ",
      "desc": "Rich crescent-shaped cookie containing ground almonds.",
      "price": "$2.29"
    },

    "DESSERT_HONEY_NUT_COOKIE": {
      "name": "Honey Nut Cookie",
      "desc": "A combination of nuts and honey baked to golden brown perfection.",
      "price": "$2.29"
    },

    "DESSERT_ALMOND_CAKE": {
      "name": "Almond Cake",
      "desc": "Semolina, almond, & butter. Baked to perfection, topped with sliced almonds",
      "price": "$3.49"
    },

    "VEGAN_FALAFEL_SANDWICH": {
      "name": "Falafel Sandwich",
      "desc": "White or whole wheat pita - filled with 3 vegan falafel balls & toppings of your choice.",
      "price": "$9.99"
    },

    "VEGAN_VEGETARIAN_SANDWICH": {
      "name": "Vegetarian Sandwich",
      "desc": "White or whole wheat pita - filled with stuffed eggplant & toppings of your choice.",
      "price": "$9.99"
    },

    "VEGAN_FALAFEL_PLATE": {
      "name": "Falafel Plate",
      "desc": "Rice and potatoes - with 3 falafel balls & sides, toppings and sauces of your choice",
      "price": "$15.99"
    },

    "VEGAN_VEGETARIAN_PLATE": {
      "name": "Vegetarian Plate",
      "desc": "Rice and potatoes - with stuffed eggplant & sides, toppings and sauces of your choice",
      "price": "$15.99"
    },

    "VEGAN_FALAFEL_COMBO": {
      "name": "Falafel Combo",
      "desc": "Combo includes a falafel sandwich with your choice of toppings and sauces a beverage and a soup or salad.",
      "price": "$15.99"
    },

    "VEGAN_VEGETARIAN_COMBO": {
      "name": "Vegetarian Combo",
      "desc": "Combo includes a vegetarian sandwich with your choice of toppings and sauces a beverage and a soup or salad.",
      "price": "$15.99"
    },

    "VEGAN_VEGETARIAN_SAMOUSA": {
      "name": "Vegetarian Samousa",
      "desc": "Veggie - Potato, corn, green peas, carrots.",
      "price": "$3.49"
    },

    "VEGAN_GRAPE_VINE_ROLL": {
      "name": "Grape Vine Roll",
      "desc": "Grape leaves stuffed with fresh herbs, rice, tomato & onion. Cooked to perfection",
      "price": "$2.29"
    },

    "VEGAN_STUFFED_EGGPLANT": {
      "name": "Stuffed Eggplant ",
      "desc": "Filled with eggplant, onion, garlic, tomatoes, and fresh herbs.",
      "price": "$8.99"
    },

    "VEGAN_STUFFED_PEPPER": {
      "name": "Stuffed Pepper",
      "desc": "Filled with green or red pepper, rice, tomato, onion, and fresh herbs.",
      "price": "$8.99"
    },

    "VEGAN_FALAFEL_BALL": {
      "name": "Falafel Ball",
      "desc": "Choice of chickpea, fava bean or mix of both (3 falafel balls).",
      "price": "$4.99"
    },

    "VEGAN_CURRIED_POTATOES": {
      "name": "Curried Potatoes",
      "desc": "(n/a)",
      "price": "$6.89"
    },

    "VEGAN_CURRIED_RICE_WITH_MIXED_VEGETABLES": {
      "name": "Curried Rice With Mixed Vegetables",
      "desc": "(n/a)",
      "price": "$6.89"
    },

    "VEGAN_FRESH_CUT_FRIES": {
      "name": "Fresh Cut Fries",
      "desc": "(n/a)",
      "price": "$6.89"
    },

    "VEGAN_LENTIL_SOUP": {
      "name": "Lentil Soup",
      "desc": "Soup with green lentils, herbs, onions, tomato, carrots, and garlic.",
      "price": "$6.89"
    },

    "VEGAN_CHICKPEA_SALAD": {
      "name": "Chickpea Salad ",
      "desc": "Chickpea, red onion, carrot, green pepper, red pepper, celery.",
      "price": "$7.99"
    },

    "VEGAN_TABOULI_SALAD": {
      "name": "Tabouli Salad",
      "desc": "Parsley, red onion, diced tomatoes, bollgur (chopped wheat or grain).",
      "price": "$7.99"
    },

    "VEGAN_MEDITERRANEAN_SALAD_GF": {
      "name": "Mediterranean Salad (GF)",
      "desc": "Tomatoes, green or red pepper, red onion, lettuce, cucumber, feta.",
      "price": "$7.99"
    },

    "BEVERAGE_ROOT_BEER": {
      "name": "Root Beer ",
      "desc": "335mL Glass Bottle",
      "price": "$3.99"
    },

    "BEVERAGE_GINGER_BEER": {
      "name": "Ginger Beer",
      "desc": "335mL Glass Bottle",
      "price": "$3.99"
    },

    "BEVERAGE_MANGO_JUICE": {
      "name": "Mango Juice",
      "desc": "473mL Glass Bottle",
      "price": "$3.99"
    },

    "BEVERAGE_WATER": {
      "name": "Water",
      "desc": "600mL Plastic Bottle",
      "price": "$1.99"
    },

    "BEVERAGE_CHOCOLATE_MILK_SMALL": {
      "name": "Chocolate Milk (SMALL)",
      "desc": "237mL Carton",
      "price": "$1.99"
    },

    "BEVERAGE_CHOCOLATE_MILK_LARGE": {
      "name": "Chocolate Milk (LARGE)",
      "desc": "473mL Carton",
      "price": "$2.99"
    },

    "BEVERAGE_SAN_PELLEGRINO": {
      "name": "San Pellegrino",
      "desc": "330mL Can - choice between 4 flavors: Orange, Blood Orange, Lemon, Orange & Pomegranate ",
      "price": "$2.99"
    },

    "BEVERAGE_SUMOL": {
      "name": "Sumol",
      "desc": "330 mL Can - choice between 3 flavors: Orange, Pineapple & Passion Fruit",
      "price": "$2.99"
    },

    "BEVERAGE_COCA_COLA": {
      "name": "Coca Cola",
      "desc": "500mL Plastic Bottle",
      "price": "$3.99"
    },

    "BEVERAGE_DIET_COKE": {
      "name": "Diet Coke",
      "desc": "335mL Can",
      "price": "$1.99"
    },

    "BEVERAGE_CANADA_DRY": {
      "name": "Canada Dry",
      "desc": "335mL Can",
      "price": "$1.99"
    },

    "BEVERAGE_NESTEA": {
      "name": "Nestea",
      "desc": "335mL Can",
      "price": "$2.29"
    },

    "BEVERAGE_SPRITE": {
      "name": "Sprite",
      "desc": "335mL Can",
      "price": "$1.99"
    },

    "BEVERAGE_COMPAL": {
      "name": "Compal",
      "desc": "200mL Glass Bottle- choice between 4 flavours: Peach, Pear, Apple, Orange ",
      "price": "$1.99"
    },

    "BEVERAGE_YERBA_MATE": {
      "name": "Yerba Mate",
      "desc": "173mL Can",
      "price": "$4.49"
    },

    "BEVERAGE_BLACK_RIVER": {
      "name": "Black River",
      "desc": "300mL Glass Bottle - choice between 4 flavours: Barlerr Pear Nectar, Pure Orange, Classic Lemonade, Grape Juice ",
      "price": "$2.99"
    },

    "BEVERAGE_PERRIER": {
      "name": "Perrier",
      "desc": "330 mL Glass Bottle - spakling spring water",
      "price": "$3.99"
    },

    "BEVERAGE_KAMBUCHA": {
      "name": "Kambucha",
      "desc": "330mL Glass Bottle - choice between 2 flavours: Ginger Lemon, Cherry Plum",
      "price": "$4.99"
    }

  }

}

});

