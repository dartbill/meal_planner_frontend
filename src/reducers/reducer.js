const initialState = {
    recipes: { breakfast: [], lunch: [], dinner: [], dessert: [], snacks: [] },
    recipe_id: "12",
    users_recipe_history: [
        {date: "date", recipes: {
        breakfast: [{id:"", title: "", fave:""}], 
        lunch: [{id:"", title: "", fave:""}], 
        dinner: [{id:"", title: "", fave:""}], 
        dessert: [{id:"", title: "", fave:""}], 
        snacks: [{id:"", title: "fgdfgfd", fave:""}]}}
    ],
    loading: false,
    meal_plan_recipes: { breakfast:[], lunch: [], dinner: [], dessert: [], snacks: [
        {
            "cheap": false,
            "dairyFree": false,
            "extendedIngredients": [
                {
                    "id": 11282,
                    "aisle": "Produce",
                    "image": "brown-onion.png",
                    "consistency": "SOLID",
                    "name": "onion",
                    "nameClean": "onion",
                    "original": "1/2 cup finely chopped onion",
                    "originalName": "finely chopped onion",
                    "amount": 0.5,
                    "unit": "cup",
                    "meta": [
                        "finely chopped"
                    ],
                    "measures": {
                        "us": {
                            "amount": 0.5,
                            "unitShort": "cups",
                            "unitLong": "cups"
                        },
                        "metric": {
                            "amount": 118.294,
                            "unitShort": "ml",
                            "unitLong": "milliliters"
                        }
                    }
                },
                {
                    "id": 11143,
                    "aisle": "Produce",
                    "image": "celery.jpg",
                    "consistency": "SOLID",
                    "name": "celery",
                    "nameClean": "celery",
                    "original": "1/2 cup finely chopped celery",
                    "originalName": "finely chopped celery",
                    "amount": 0.5,
                    "unit": "cup",
                    "meta": [
                        "finely chopped"
                    ],
                    "measures": {
                        "us": {
                            "amount": 0.5,
                            "unitShort": "cups",
                            "unitLong": "cups"
                        },
                        "metric": {
                            "amount": 118.294,
                            "unitShort": "ml",
                            "unitLong": "milliliters"
                        }
                    }
                },
                {
                    "id": 1145,
                    "aisle": "Milk, Eggs, Other Dairy",
                    "image": "butter-sliced.jpg",
                    "consistency": "SOLID",
                    "name": "unsalted butter",
                    "nameClean": "unsalted butter",
                    "original": "6 tablespoons unsalted butter",
                    "originalName": "unsalted butter",
                    "amount": 6,
                    "unit": "tablespoons",
                    "meta": [
                        "unsalted"
                    ],
                    "measures": {
                        "us": {
                            "amount": 6,
                            "unitShort": "Tbsps",
                            "unitLong": "Tbsps"
                        },
                        "metric": {
                            "amount": 6,
                            "unitShort": "Tbsps",
                            "unitLong": "Tbsps"
                        }
                    }
                },
                {
                    "id": 10115136,
                    "aisle": "Seafood",
                    "image": "lump-crabmeat.png",
                    "consistency": "SOLID",
                    "name": "lump crab meat",
                    "nameClean": "lump crabmeat",
                    "original": "1 pound lump crab meat",
                    "originalName": "lump crab meat",
                    "amount": 1,
                    "unit": "pound",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 1,
                            "unitShort": "lb",
                            "unitLong": "pound"
                        },
                        "metric": {
                            "amount": 453.592,
                            "unitShort": "g",
                            "unitLong": "grams"
                        }
                    }
                },
                {
                    "id": 18079,
                    "aisle": "Pasta and Rice",
                    "image": "breadcrumbs.jpg",
                    "consistency": "SOLID",
                    "name": "dry bread crumbs",
                    "nameClean": "breadcrumbs",
                    "original": "1/3 cup fine dry bread crumbs",
                    "originalName": "fine dry bread crumbs",
                    "amount": 0.33333334,
                    "unit": "cup",
                    "meta": [
                        "dry",
                        "fine"
                    ],
                    "measures": {
                        "us": {
                            "amount": 0.333,
                            "unitShort": "cups",
                            "unitLong": "cups"
                        },
                        "metric": {
                            "amount": 78.863,
                            "unitShort": "ml",
                            "unitLong": "milliliters"
                        }
                    }
                },
                {
                    "id": 4025,
                    "aisle": "Condiments",
                    "image": "mayonnaise.png",
                    "consistency": "LIQUID",
                    "name": "mayonnaise",
                    "nameClean": "mayonnaise",
                    "original": "1/2 cup mayonnaise",
                    "originalName": "mayonnaise",
                    "amount": 0.5,
                    "unit": "cup",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 0.5,
                            "unitShort": "cups",
                            "unitLong": "cups"
                        },
                        "metric": {
                            "amount": 118.294,
                            "unitShort": "ml",
                            "unitLong": "milliliters"
                        }
                    }
                },
                {
                    "id": 1032034,
                    "aisle": "Spices and Seasonings",
                    "image": "seasoning.jpg",
                    "consistency": "SOLID",
                    "name": "seafood seasoning",
                    "nameClean": "seafood seasoning",
                    "original": "1/2 teaspoon seafood seasoning",
                    "originalName": "seafood seasoning",
                    "amount": 0.5,
                    "unit": "teaspoon",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 0.5,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
                        },
                        "metric": {
                            "amount": 0.5,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
                        }
                    }
                },
                {
                    "id": 6971,
                    "aisle": "Condiments",
                    "image": "dark-sauce.jpg",
                    "consistency": "LIQUID",
                    "name": "worcestershire sauce",
                    "nameClean": "worcestershire sauce",
                    "original": "1/2 teaspoon Worcestershire sauce",
                    "originalName": "Worcestershire sauce",
                    "amount": 0.5,
                    "unit": "teaspoon",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 0.5,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
                        },
                        "metric": {
                            "amount": 0.5,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
                        }
                    }
                },
                {
                    "id": 6168,
                    "aisle": "Condiments",
                    "image": "hot-sauce-or-tabasco.png",
                    "consistency": "LIQUID",
                    "name": "hot sauce",
                    "nameClean": "hot sauce",
                    "original": "3 drops hot sauce",
                    "originalName": "hot sauce",
                    "amount": 3,
                    "unit": "drops",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 3,
                            "unitShort": "drops",
                            "unitLong": "drops"
                        },
                        "metric": {
                            "amount": 3,
                            "unitShort": "drops",
                            "unitLong": "drops"
                        }
                    }
                },
                {
                    "id": 11297,
                    "aisle": "Produce;Spices and Seasonings",
                    "image": "parsley.jpg",
                    "consistency": "SOLID",
                    "name": "parsley",
                    "nameClean": "parsley",
                    "original": "2 tablespoons minced parsley",
                    "originalName": "minced parsley",
                    "amount": 2,
                    "unit": "tablespoons",
                    "meta": [
                        "minced"
                    ],
                    "measures": {
                        "us": {
                            "amount": 2,
                            "unitShort": "Tbsps",
                            "unitLong": "Tbsps"
                        },
                        "metric": {
                            "amount": 2,
                            "unitShort": "Tbsps",
                            "unitLong": "Tbsps"
                        }
                    }
                }
            ],
            "glutenFree": false,
            "id": 639620,
            "image": "https://spoonacular.com/recipeImages/639620-556x370.jpg",
            "instructions": "Cook onion and celery in 4 tablespoons butter over moderately low heat, until tender and transfer to a bowl. Stir in crab and bread crumbs.\nIn a small bowl whisk together mayonnaise, seafood seasoning, Worcestershire sauce, hot sauce, parsley, and salt and pepper to taste and stir into crab mixture until combined well.\nLine a baking sheet with wax paper. Form crab mixture into 6 flattened rounds. Chill crab cakes, covered with plastic wrap, at least 1 hour.\nHeat 1 tablespoon butter over moderate heat until foam subsides and cook half of crab cakes until golden brown, about 2 to 3 minutes on each side. Cook remaining cakes in remaining tablespoon butter in same manner.",
            "pricePerServing": 306.34,
            "readyInMinutes": 45,
            "servings": 6,
            "sourceUrl": "https://www.foodista.com/recipe/BC488L24/classic-new-england-crab-cakes",
            "summary": "Classic New England Crab Cakes could be just the <b>pescatarian and ketogenic</b> recipe you've been looking for. This recipe serves 6 and costs $3.06 per serving. One serving contains <b>323 calories</b>, <b>15g of protein</b>, and <b>26g of fat</b>. This recipe from Foodista has 23 fans. Head to the store and pick up lump crab meat, parsley, bread crumbs, and a few other things to make it today. It works best as a hor d'oeuvre, and is done in around <b>around 45 minutes</b>. Taking all factors into account, this recipe <b>earns a spoonacular score of 53%</b>, which is good. Similar recipes are <a href=\"https://spoonacular.com/recipes/classic-crab-cakes-402459\">Classic Crab Cakes</a>, <a href=\"https://spoonacular.com/recipes/classic-crab-cakes-299228\">Classic Crab Cakes</a>, and <a href=\"https://spoonacular.com/recipes/classic-maryland-crab-cakes-667129\">Classic Maryland Crab Cakes</a>.",
            "title": "Classic New England Crab Cakes",
            "vegan": false,
            "vegetarian": false,
            "lock": true,
            "fave": false
        },
        {
            "cheap": false,
            "dairyFree": false,
            "extendedIngredients": [
                {
                    "id": 11260,
                    "aisle": "Produce",
                    "image": "mushrooms.png",
                    "consistency": "SOLID",
                    "name": "mushrooms",
                    "nameClean": "fresh mushrooms",
                    "original": "200 grams fresh shitaki mushrooms, sliced",
                    "originalName": "fresh shitaki mushrooms, sliced",
                    "amount": 200,
                    "unit": "grams",
                    "meta": [
                        "fresh",
                        "sliced"
                    ],
                    "measures": {
                        "us": {
                            "amount": 7.055,
                            "unitShort": "oz",
                            "unitLong": "ounces"
                        },
                        "metric": {
                            "amount": 200,
                            "unitShort": "g",
                            "unitLong": "grams"
                        }
                    }
                },
                {
                    "id": 11260,
                    "aisle": "Produce",
                    "image": "mushrooms.png",
                    "consistency": "SOLID",
                    "name": "mushroom",
                    "nameClean": "fresh mushrooms",
                    "original": "100 grams white mushroom, sliced",
                    "originalName": "white mushroom, sliced",
                    "amount": 100,
                    "unit": "grams",
                    "meta": [
                        "white",
                        "sliced"
                    ],
                    "measures": {
                        "us": {
                            "amount": 3.527,
                            "unitShort": "oz",
                            "unitLong": "ounces"
                        },
                        "metric": {
                            "amount": 100,
                            "unitShort": "g",
                            "unitLong": "grams"
                        }
                    }
                },
                {
                    "id": 11215,
                    "aisle": "Produce",
                    "image": "garlic.png",
                    "consistency": "SOLID",
                    "name": "garlic",
                    "nameClean": "garlic",
                    "original": "1 head garlic, sliced",
                    "originalName": "garlic, sliced",
                    "amount": 1,
                    "unit": "head",
                    "meta": [
                        "sliced"
                    ],
                    "measures": {
                        "us": {
                            "amount": 1,
                            "unitShort": "head",
                            "unitLong": "head"
                        },
                        "metric": {
                            "amount": 1,
                            "unitShort": "head",
                            "unitLong": "head"
                        }
                    }
                },
                {
                    "id": 1001,
                    "aisle": "Milk, Eggs, Other Dairy",
                    "image": "butter-sliced.jpg",
                    "consistency": "SOLID",
                    "name": "butter",
                    "nameClean": "butter",
                    "original": "3 tablespoons butter",
                    "originalName": "butter",
                    "amount": 3,
                    "unit": "tablespoons",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 3,
                            "unitShort": "Tbsps",
                            "unitLong": "Tbsps"
                        },
                        "metric": {
                            "amount": 3,
                            "unitShort": "Tbsps",
                            "unitLong": "Tbsps"
                        }
                    }
                },
                {
                    "id": 14106,
                    "aisle": "Alcoholic Beverages",
                    "image": "white-wine.jpg",
                    "consistency": "LIQUID",
                    "name": "white wine",
                    "nameClean": "dry white wine",
                    "original": "1 tablespoon white wine",
                    "originalName": "white wine",
                    "amount": 1,
                    "unit": "tablespoon",
                    "meta": [
                        "white"
                    ],
                    "measures": {
                        "us": {
                            "amount": 1,
                            "unitShort": "Tbsp",
                            "unitLong": "Tbsp"
                        },
                        "metric": {
                            "amount": 1,
                            "unitShort": "Tbsp",
                            "unitLong": "Tbsp"
                        }
                    }
                },
                {
                    "id": 6112,
                    "aisle": "Ethnic Foods;Condiments",
                    "image": "dark-sauce.jpg",
                    "consistency": "SOLID",
                    "name": "teriyaki sauce",
                    "nameClean": "teriyaki sauce",
                    "original": "1 tablespoon teriyaki sauce",
                    "originalName": "teriyaki sauce",
                    "amount": 1,
                    "unit": "tablespoon",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 1,
                            "unitShort": "Tbsp",
                            "unitLong": "Tbsp"
                        },
                        "metric": {
                            "amount": 1,
                            "unitShort": "Tbsp",
                            "unitLong": "Tbsp"
                        }
                    }
                },
                {
                    "id": 2069,
                    "aisle": "Oil, Vinegar, Salad Dressing",
                    "image": "balsamic-vinegar.jpg",
                    "consistency": "LIQUID",
                    "name": "balsamic vinegar",
                    "nameClean": "balsamic vinegar",
                    "original": "1 tablespoon balsamic vinegar",
                    "originalName": "balsamic vinegar",
                    "amount": 1,
                    "unit": "tablespoon",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 1,
                            "unitShort": "Tbsp",
                            "unitLong": "Tbsp"
                        },
                        "metric": {
                            "amount": 1,
                            "unitShort": "Tbsp",
                            "unitLong": "Tbsp"
                        }
                    }
                },
                {
                    "id": 1002030,
                    "aisle": "Spices and Seasonings",
                    "image": "pepper.jpg",
                    "consistency": "SOLID",
                    "name": "ground pepper",
                    "nameClean": "black pepper",
                    "original": "1/2 ts ground black pepper",
                    "originalName": "ground black pepper",
                    "amount": 0.5,
                    "unit": "ts",
                    "meta": [
                        "black"
                    ],
                    "measures": {
                        "us": {
                            "amount": 0.5,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
                        },
                        "metric": {
                            "amount": 0.5,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
                        }
                    }
                },
                {
                    "id": 2047,
                    "aisle": "Spices and Seasonings",
                    "image": "salt.jpg",
                    "consistency": "SOLID",
                    "name": "salt",
                    "nameClean": "table salt",
                    "original": "1/2 ts salt",
                    "originalName": "salt",
                    "amount": 0.5,
                    "unit": "ts",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 0.5,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
                        },
                        "metric": {
                            "amount": 0.5,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
                        }
                    }
                },
                {
                    "id": 4582,
                    "aisle": "Oil, Vinegar, Salad Dressing",
                    "image": "vegetable-oil.jpg",
                    "consistency": "LIQUID",
                    "name": "cooking oil",
                    "nameClean": "cooking oil",
                    "original": "1/4 ts chilly oil",
                    "originalName": "chilly oil",
                    "amount": 0.25,
                    "unit": "ts",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 0.25,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
                        },
                        "metric": {
                            "amount": 0.25,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
                        }
                    }
                },
                {
                    "id": 11297,
                    "aisle": "Produce;Spices and Seasonings",
                    "image": "parsley.jpg",
                    "consistency": "SOLID",
                    "name": "parsley",
                    "nameClean": "parsley",
                    "original": "1/4 cup chopped parsley",
                    "originalName": "chopped parsley",
                    "amount": 0.25,
                    "unit": "cup",
                    "meta": [
                        "chopped"
                    ],
                    "measures": {
                        "us": {
                            "amount": 0.25,
                            "unitShort": "cups",
                            "unitLong": "cups"
                        },
                        "metric": {
                            "amount": 59.147,
                            "unitShort": "ml",
                            "unitLong": "milliliters"
                        }
                    }
                },
                {
                    "id": 11291,
                    "aisle": "Produce",
                    "image": "spring-onions.jpg",
                    "consistency": "SOLID",
                    "name": "spring onions",
                    "nameClean": "spring onions",
                    "original": "1/4 cup diced spring onions",
                    "originalName": "diced spring onions",
                    "amount": 0.25,
                    "unit": "cup",
                    "meta": [
                        "diced"
                    ],
                    "measures": {
                        "us": {
                            "amount": 0.25,
                            "unitShort": "cups",
                            "unitLong": "cups"
                        },
                        "metric": {
                            "amount": 59.147,
                            "unitShort": "ml",
                            "unitLong": "milliliters"
                        }
                    }
                }
            ],
            "glutenFree": true,
            "id": 661669,
            "image": "https://spoonacular.com/recipeImages/661669-556x370.jpg",
            "instructions": "Melt butter in frying pan, add garlic and stir fry till fragrant.  Add mushrooms and stir fry for 1/2 min.  Add white wine and let it evaporate.  Fry for another 1 min, add salt, black pepper, balsamic vinegar, teriyaki sauce and chilly oil. Fry for another minute. Turn heat to low and add parsley and spring onions and mix well and transfer to serving plate.",
            "pricePerServing": 97.58,
            "readyInMinutes": 45,
            "servings": 4,
            "sourceUrl": "https://www.foodista.com/recipe/CYB7K7TL/stir-fry-mushrooms-in-butter-garlic-and-white-wine",
            "summary": "Need a <b>gluten free hor d'oeuvre</b>? Stir Fry Mushrooms In Butter, Garlic And White Wine could be a great recipe to try. One serving contains <b>119 calories</b>, <b>3g of protein</b>, and <b>9g of fat</b>. This recipe serves 4. For <b>98 cents per serving</b>, this recipe <b>covers 10%</b> of your daily requirements of vitamins and minerals. 7 people found this recipe to be delicious and satisfying. From preparation to the plate, this recipe takes around <b>around 45 minutes</b>. A mixture of shitaki mushrooms, mushroom, butter, and a handful of other ingredients are all it takes to make this recipe so delicious. It is brought to you by Foodista. With a spoonacular <b>score of 33%</b>, this dish is rather bad. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/mushrooms-with-garlic-and-sage-in-white-wine-sauce-948505\">Mushrooms with Garlic and Sage in White Wine Sauce</a>, <a href=\"https://spoonacular.com/recipes/chicken-and-mushrooms-in-garlic-white-wine-sauce-207529\">Chicken and Mushrooms in Garlic White Wine Sauce</a>, and <a href=\"https://spoonacular.com/recipes/chicken-and-mushrooms-in-a-garlic-white-wine-sauce-896904\">Chicken and Mushrooms in a Garlic White Wine Sauce</a>.",
            "title": "Stir Fry Mushrooms In Butter, Garlic And White Wine",
            "vegan": false,
            "vegetarian": false,
            "lock": true,
            "fave": false
        },
        {
            "cheap": false,
            "dairyFree": true,
            "extendedIngredients": [
                {
                    "id": 9037,
                    "aisle": "Produce",
                    "image": "avocado.jpg",
                    "consistency": "SOLID",
                    "name": "avocados",
                    "nameClean": "avocado",
                    "original": "2 avocados, fairly soft, peeled and pit removed",
                    "originalName": "avocados, fairly soft, peeled and pit removed",
                    "amount": 2,
                    "unit": "",
                    "meta": [
                        "soft",
                        "peeled"
                    ],
                    "measures": {
                        "us": {
                            "amount": 2,
                            "unitShort": "",
                            "unitLong": ""
                        },
                        "metric": {
                            "amount": 2,
                            "unitShort": "",
                            "unitLong": ""
                        }
                    }
                },
                {
                    "id": 9160,
                    "aisle": "Produce",
                    "image": "lime-juice.png",
                    "consistency": "LIQUID",
                    "name": "lime juice",
                    "nameClean": "lime juice",
                    "original": "1 tablespoon lime juice",
                    "originalName": "lime juice",
                    "amount": 1,
                    "unit": "tablespoon",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 1,
                            "unitShort": "Tbsp",
                            "unitLong": "Tbsp"
                        },
                        "metric": {
                            "amount": 1,
                            "unitShort": "Tbsp",
                            "unitLong": "Tbsp"
                        }
                    }
                },
                {
                    "id": 1002068,
                    "aisle": "Oil, Vinegar, Salad Dressing",
                    "image": "vinegar-(white).jpg",
                    "consistency": "LIQUID",
                    "name": "white wine vinegar",
                    "nameClean": "white wine vinegar",
                    "original": "¼ teaspoon white wine vinegar",
                    "originalName": "white wine vinegar",
                    "amount": 0.25,
                    "unit": "teaspoon",
                    "meta": [
                        "white"
                    ],
                    "measures": {
                        "us": {
                            "amount": 0.25,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
                        },
                        "metric": {
                            "amount": 0.25,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
                        }
                    }
                },
                {
                    "id": 10011282,
                    "aisle": "Produce",
                    "image": "red-onion.png",
                    "consistency": "SOLID",
                    "name": "red onion",
                    "nameClean": "red onion",
                    "original": "½ red onion, minced",
                    "originalName": "red onion, minced",
                    "amount": 0.5,
                    "unit": "",
                    "meta": [
                        "red",
                        "minced"
                    ],
                    "measures": {
                        "us": {
                            "amount": 0.5,
                            "unitShort": "",
                            "unitLong": ""
                        },
                        "metric": {
                            "amount": 0.5,
                            "unitShort": "",
                            "unitLong": ""
                        }
                    }
                },
                {
                    "id": 11977,
                    "aisle": "Produce",
                    "image": "serrano-pepper.jpg",
                    "consistency": "SOLID",
                    "name": "serrano pepper",
                    "nameClean": "serrano pepper",
                    "original": "1 Serrano pepper, minced",
                    "originalName": "Serrano pepper, minced",
                    "amount": 1,
                    "unit": "",
                    "meta": [
                        "minced"
                    ],
                    "measures": {
                        "us": {
                            "amount": 1,
                            "unitShort": "",
                            "unitLong": ""
                        },
                        "metric": {
                            "amount": 1,
                            "unitShort": "",
                            "unitLong": ""
                        }
                    }
                },
                {
                    "id": 11165,
                    "aisle": "Produce;Spices and Seasonings",
                    "image": "cilantro.png",
                    "consistency": "SOLID",
                    "name": "cilantro",
                    "nameClean": "cilantro",
                    "original": "2 tablespoons chopped cilantro",
                    "originalName": "chopped cilantro",
                    "amount": 2,
                    "unit": "tablespoons",
                    "meta": [
                        "chopped"
                    ],
                    "measures": {
                        "us": {
                            "amount": 2,
                            "unitShort": "Tbsps",
                            "unitLong": "Tbsps"
                        },
                        "metric": {
                            "amount": 2,
                            "unitShort": "Tbsps",
                            "unitLong": "Tbsps"
                        }
                    }
                },
                {
                    "id": 10211529,
                    "aisle": "Produce",
                    "image": "roma-tomatoes.png",
                    "consistency": "SOLID",
                    "name": "roma tomato",
                    "nameClean": "italian tomato",
                    "original": "1 roma tomato, pulp removed, then diced",
                    "originalName": "roma tomato, pulp removed, then diced",
                    "amount": 1,
                    "unit": "",
                    "meta": [
                        "diced"
                    ],
                    "measures": {
                        "us": {
                            "amount": 1,
                            "unitShort": "",
                            "unitLong": ""
                        },
                        "metric": {
                            "amount": 1,
                            "unitShort": "",
                            "unitLong": ""
                        }
                    }
                },
                {
                    "id": 2047,
                    "aisle": "Spices and Seasonings",
                    "image": "salt.jpg",
                    "consistency": "SOLID",
                    "name": "salt",
                    "nameClean": "table salt",
                    "original": "½ teaspoon salt",
                    "originalName": "salt",
                    "amount": 0.5,
                    "unit": "teaspoon",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 0.5,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
                        },
                        "metric": {
                            "amount": 0.5,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
                        }
                    }
                },
                {
                    "id": 1002030,
                    "aisle": "Spices and Seasonings",
                    "image": "pepper.jpg",
                    "consistency": "SOLID",
                    "name": "black pepper",
                    "nameClean": "black pepper",
                    "original": "¼ teaspoon freshly ground black pepper",
                    "originalName": "freshly ground black pepper",
                    "amount": 0.25,
                    "unit": "teaspoon",
                    "meta": [
                        "black",
                        "freshly ground"
                    ],
                    "measures": {
                        "us": {
                            "amount": 0.25,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
                        },
                        "metric": {
                            "amount": 0.25,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
                        }
                    }
                },
                {
                    "id": 1002014,
                    "aisle": "Spices and Seasonings",
                    "image": "ground-cumin.jpg",
                    "consistency": "SOLID",
                    "name": "cumin",
                    "nameClean": "cumin",
                    "original": "1/8 teaspoon cumin",
                    "originalName": "cumin",
                    "amount": 0.125,
                    "unit": "teaspoon",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 0.125,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
                        },
                        "metric": {
                            "amount": 0.125,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
                        }
                    }
                },
                {
                    "id": 1022020,
                    "aisle": "Spices and Seasonings",
                    "image": "garlic-powder.png",
                    "consistency": "SOLID",
                    "name": "garlic powder",
                    "nameClean": "garlic powder",
                    "original": "1/8 teaspoon garlic powder",
                    "originalName": "garlic powder",
                    "amount": 0.125,
                    "unit": "teaspoon",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 0.125,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
                        },
                        "metric": {
                            "amount": 0.125,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
                        }
                    }
                }
            ],
            "glutenFree": true,
            "id": 661188,
            "image": "https://spoonacular.com/recipeImages/661188-556x370.jpg",
            "instructions": "In a medium bowl, mash avocado and mix with lime juice and vinegar.\nStir in the salt, pepper, cumin, and garlic powder.\nMix in red onion, Serrano pepper, cilantro, and chopped tomato.",
            "pricePerServing": 91.88,
            "readyInMinutes": 45,
            "servings": 4,
            "sourceUrl": "https://www.foodista.com/recipe/Z7GWGX8D/spicy-seasoned-loaded-guacamole",
            "summary": "Spicy Seasoned Loaded Guacamole might be just the hor d'oeuvre you are searching for. This recipe makes 4 servings with <b>171 calories</b>, <b>2g of protein</b>, and <b>15g of fat</b> each. For <b>92 cents per serving</b>, this recipe <b>covers 9%</b> of your daily requirements of vitamins and minerals. If you have roma tomato, cumin, pepper, and a few other ingredients on hand, you can make it. 47 people found this recipe to be scrumptious and satisfying. It is a <b>very reasonably priced</b> recipe for fans of Mexican food. It is brought to you by Foodista. From preparation to the plate, this recipe takes roughly <b>roughly 45 minutes</b>. It is a good option if you're following a <b>gluten free, dairy free, lacto ovo vegetarian, and whole 30</b> diet. Overall, this recipe earns a <b>solid spoonacular score of 79%</b>. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/loaded-guacamole-tacos-874139\">Loaded Guacamole Tacos</a>, <a href=\"https://spoonacular.com/recipes/loaded-guacamole-nachos-610053\">Loaded Guacamole Nachos</a>, and <a href=\"https://spoonacular.com/recipes/fully-loaded-guacamole-621631\">Fully Loaded Guacamole</a>.",
            "title": "Spicy Seasoned Loaded Guacamole",
            "vegan": true,
            "vegetarian": true,
            "lock": true,
            "fave": false
        },
        {
            "cheap": false,
            "dairyFree": true,
            "extendedIngredients": [
                {
                    "id": 1002050,
                    "aisle": "Baking",
                    "image": "extract.png",
                    "consistency": "LIQUID",
                    "name": "almond extract",
                    "nameClean": "almond extract",
                    "original": "1 t. almond extract",
                    "originalName": "almond extract",
                    "amount": 1,
                    "unit": "t",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 1,
                            "unitShort": "tsp",
                            "unitLong": "teaspoon"
                        },
                        "metric": {
                            "amount": 1,
                            "unitShort": "tsp",
                            "unitLong": "teaspoon"
                        }
                    }
                },
                {
                    "id": 18371,
                    "aisle": "Baking",
                    "image": "white-powder.jpg",
                    "consistency": "SOLID",
                    "name": "baking powder",
                    "nameClean": "low sodium baking powder",
                    "original": "2 ½ t. baking powder",
                    "originalName": "baking powder",
                    "amount": 2.5,
                    "unit": "t",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 2.5,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
                        },
                        "metric": {
                            "amount": 2.5,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
                        }
                    }
                },
                {
                    "id": 18372,
                    "aisle": "Baking",
                    "image": "white-powder.jpg",
                    "consistency": "SOLID",
                    "name": "baking soda",
                    "nameClean": "baking soda",
                    "original": "½ t. baking soda",
                    "originalName": "baking soda",
                    "amount": 0.5,
                    "unit": "t",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 0.5,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
                        },
                        "metric": {
                            "amount": 0.5,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
                        }
                    }
                },
                {
                    "id": 20081,
                    "aisle": "Baking",
                    "image": "flour.png",
                    "consistency": "SOLID",
                    "name": "flour",
                    "nameClean": "wheat flour",
                    "original": "2 c. flour",
                    "originalName": "flour",
                    "amount": 2,
                    "unit": "c",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 2,
                            "unitShort": "cups",
                            "unitLong": "cups"
                        },
                        "metric": {
                            "amount": 473.176,
                            "unitShort": "ml",
                            "unitLong": "milliliters"
                        }
                    }
                },
                {
                    "id": 2047,
                    "aisle": "Spices and Seasonings",
                    "image": "salt.jpg",
                    "consistency": "SOLID",
                    "name": "salt",
                    "nameClean": "table salt",
                    "original": "¾ t. salt",
                    "originalName": "salt",
                    "amount": 0.75,
                    "unit": "t",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 0.75,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
                        },
                        "metric": {
                            "amount": 0.75,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
                        }
                    }
                },
                {
                    "id": 19335,
                    "aisle": "Baking",
                    "image": "sugar-in-bowl.png",
                    "consistency": "SOLID",
                    "name": "sugar",
                    "nameClean": "sugar",
                    "original": "1 ¼ c. sugar",
                    "originalName": "sugar",
                    "amount": 1.25,
                    "unit": "c",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 1.25,
                            "unitShort": "cups",
                            "unitLong": "cups"
                        },
                        "metric": {
                            "amount": 295.735,
                            "unitShort": "ml",
                            "unitLong": "milliliters"
                        }
                    }
                },
                {
                    "id": 12061,
                    "aisle": "Nuts",
                    "image": "almonds.jpg",
                    "consistency": "SOLID",
                    "name": "whole almonds",
                    "nameClean": "almonds",
                    "original": "1 ½ c. whole almonds, coarsely chopped",
                    "originalName": "whole almonds, coarsely chopped",
                    "amount": 1.5,
                    "unit": "c",
                    "meta": [
                        "whole",
                        "coarsely chopped"
                    ],
                    "measures": {
                        "us": {
                            "amount": 1.5,
                            "unitShort": "cups",
                            "unitLong": "cups"
                        },
                        "metric": {
                            "amount": 354.882,
                            "unitShort": "ml",
                            "unitLong": "milliliters"
                        }
                    }
                },
                {
                    "id": 1123,
                    "aisle": "Milk, Eggs, Other Dairy",
                    "image": "egg.png",
                    "consistency": "SOLID",
                    "name": "whole eggs",
                    "nameClean": "egg",
                    "original": "2 whole eggs, plus 1 egg, separated",
                    "originalName": "whole eggs, plus 1 egg, separated",
                    "amount": 2,
                    "unit": "",
                    "meta": [
                        "whole",
                        "separated"
                    ],
                    "measures": {
                        "us": {
                            "amount": 2,
                            "unitShort": "",
                            "unitLong": ""
                        },
                        "metric": {
                            "amount": 2,
                            "unitShort": "",
                            "unitLong": ""
                        }
                    }
                }
            ],
            "glutenFree": false,
            "id": 633078,
            "image": "https://spoonacular.com/recipeImages/633078-556x370.jpg",
            "instructions": "<ol><li>Preheat oven to 350 degrees. Line 2 baking sheets with parchment paper.</li><li>Sift together flour, sugar, baking powder, baking soda, and salt. Add 2 whole eggs and 1 egg yolk, almond extract, and almonds. Mix thoroughly until dough holds together. Add half of reserved egg white, if necessary, to make a cohesive dough.</li><li>With wet hands, shape dough into 4 logs, each 6 long and 1  in diameter. Place 3-4 apart on baking sheets. Bake on middle rack of oven until logs are light golden brown and spring back when touched (about 24 minutes). Cool 15 minutes.</li><li>Lower oven to 275. Slice logs with a serrated knife diagonally into 1/2 slices. Return to oven and bake until completely dry and crisp throughout (about 40 minutes). Cool.</li></ol>",
            "pricePerServing": 9.73,
            "readyInMinutes": 45,
            "servings": 60,
            "sourceUrl": "http://www.foodista.com/recipe/7LQFSKC5/authentic-italian-biscotti",
            "summary": "Authentic Italian Biscotti might be just the <b>Mediterranean</b> recipe you are searching for. This dessert has <b>54 calories</b>, <b>1g of protein</b>, and <b>2g of fat</b> per serving. For <b>10 cents per serving</b>, this recipe <b>covers 2%</b> of your daily requirements of vitamins and minerals. 24 people were impressed by this recipe. From preparation to the plate, this recipe takes about <b>45 minutes</b>. Head to the store and pick up almond extract, flour, sugar, and a few other things to make it today. It is a good option if you're following a <b>dairy free and vegetarian</b> diet. All things considered, we decided this recipe <b>deserves a spoonacular score of 27%</b>. This score is not so spectacular. Try <a href=\"https://spoonacular.com/recipes/authentic-italian-tiramisu-843027\">Authentic Italian Tiramisu</a>, <a href=\"https://spoonacular.com/recipes/authentic-italian-gluten-free-spaghetti-sauce-562773\">Authentic Italian Gluten Free Spaghetti Sauce</a>, and <a href=\"https://spoonacular.com/recipes/delicious-italian-biscotti-128313\">Delicious Italian Biscotti</a> for similar recipes.",
            "title": "Authentic Italian Biscotti",
            "vegan": false,
            "vegetarian": true,
            "lock": true,
            "fave": false
        },
        {
            "cheap": false,
            "dairyFree": false,
            "extendedIngredients": [
                {
                    "id": 12155,
                    "aisle": "Nuts;Baking",
                    "image": "walnuts.jpg",
                    "consistency": "SOLID",
                    "name": "walnut halves",
                    "nameClean": "walnuts",
                    "original": "1 cup walnut halves",
                    "originalName": "walnut halves",
                    "amount": 1,
                    "unit": "cup",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 1,
                            "unitShort": "cup",
                            "unitLong": "cup"
                        },
                        "metric": {
                            "amount": 236.588,
                            "unitShort": "ml",
                            "unitLong": "milliliters"
                        }
                    }
                },
                {
                    "id": 9326,
                    "aisle": "Produce",
                    "image": "watermelon.png",
                    "consistency": "SOLID",
                    "name": "watermelon",
                    "nameClean": "watermelon",
                    "original": "1 5 lb watermelon",
                    "originalName": "watermelon",
                    "amount": 5,
                    "unit": "lb",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 5,
                            "unitShort": "lb",
                            "unitLong": "pounds"
                        },
                        "metric": {
                            "amount": 2.268,
                            "unitShort": "kgs",
                            "unitLong": "kgs"
                        }
                    }
                },
                {
                    "id": 1019,
                    "aisle": "Cheese",
                    "image": "feta.png",
                    "consistency": "SOLID",
                    "name": "feta cheese",
                    "nameClean": "feta cheese",
                    "original": "7 oz feta cheese",
                    "originalName": "feta cheese",
                    "amount": 7,
                    "unit": "oz",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 7,
                            "unitShort": "oz",
                            "unitLong": "ounces"
                        },
                        "metric": {
                            "amount": 198.447,
                            "unitShort": "g",
                            "unitLong": "grams"
                        }
                    }
                },
                {
                    "id": 2064,
                    "aisle": "Produce",
                    "image": "mint.jpg",
                    "consistency": "SOLID",
                    "name": "mint",
                    "nameClean": "mint",
                    "original": "A few sprigs mint",
                    "originalName": "A few mint",
                    "amount": 3,
                    "unit": "sprigs",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 3,
                            "unitShort": "sprigs",
                            "unitLong": "sprigs"
                        },
                        "metric": {
                            "amount": 3,
                            "unitShort": "sprigs",
                            "unitLong": "sprigs"
                        }
                    }
                },
                {
                    "id": 93818,
                    "aisle": "Savory Snacks",
                    "image": "sunflower-seeds.jpg",
                    "consistency": "SOLID",
                    "name": "seeds",
                    "nameClean": "seeds",
                    "original": "1 tsp nigella seeds",
                    "originalName": "nigella seeds",
                    "amount": 1,
                    "unit": "tsp",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 1,
                            "unitShort": "tsp",
                            "unitLong": "teaspoon"
                        },
                        "metric": {
                            "amount": 1,
                            "unitShort": "tsp",
                            "unitLong": "teaspoon"
                        }
                    }
                }
            ],
            "glutenFree": true,
            "id": 1098388,
            "image": "https://spoonacular.com/recipeImages/1098388-556x370.jpg",
            "instructions": "<ol><li>Soak walnuts in hot water for five minutes in a bowl. Rinse and cover with cold water and a pinch of salt. Let stand for a few minutes (it can soak for as long as half a day and will get even better with longer soaking). Rinse and drain.</li><li>Cut your watermelon into cubes or use a spoon to scoop out the red flesh and put in a bowl.</li><li>Cube or crumble the cheese over the watermelon. </li><li>Add the walnut pieces and garnish with mint leaves.</li><li>Put your nigella seeds in a small pan and toast briefly on medium heat until fragrant.</li><li> Sprinkle seeds on the salad and enjoy!</li></ol>",
            "pricePerServing": 187.27,
            "readyInMinutes": 25,
            "servings": 6,
            "sourceUrl": "https://www.foodista.com/recipe/5HYNX33T/watermelon-salad-with-feta-walnut-nigella-seeds",
            "summary": "Watermelon Salad with Feta, Walnut & Nigella Seeds is a <b>gluten free, lacto ovo vegetarian, and primal</b> recipe with 6 servings. This hor d'oeuvre has <b>334 calories</b>, <b>10g of protein</b>, and <b>21g of fat</b> per serving. For <b>$1.87 per serving</b>, this recipe <b>covers 16%</b> of your daily requirements of vitamins and minerals. Not a lot of people made this recipe, and 1 would say it hit the spot. If you have walnut halves, watermelon, feta cheese, and a few other ingredients on hand, you can make it. It can be enjoyed any time, but it is especially good for <b>Summer</b>. From preparation to the plate, this recipe takes roughly <b>25 minutes</b>. It is brought to you by Foodista. With a spoonacular <b>score of 93%</b>, this dish is tremendous. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/quinoa-salad-with-feta-and-chia-seeds-558968\">Quinoa Salad with Fetan and Chia Seeds</a>, <a href=\"https://spoonacular.com/recipes/quinoa-salad-with-feta-pomegranate-seeds-and-raisins-512970\">Quinoa Salad with Feta, Pomegranate Seeds and Raisins</a>, and <a href=\"https://spoonacular.com/recipes/lemony-carrot-salad-with-mustard-seeds-and-feta-524174\">lemony carrot salad with mustard seeds and feta</a>.",
            "title": "Watermelon Salad with Feta, Walnut & Nigella Seeds",
            "vegan": false,
            "vegetarian": true,
            "lock": true,
            "fave": false
        },
        {
            "cheap": false,
            "dairyFree": false,
            "extendedIngredients": [
                {
                    "id": 9003,
                    "aisle": "Produce",
                    "image": "apple.jpg",
                    "consistency": "SOLID",
                    "name": "apples",
                    "nameClean": "apple",
                    "original": "2 large apples, peeled and diced",
                    "originalName": "apples, peeled and diced",
                    "amount": 2,
                    "unit": "large",
                    "meta": [
                        "diced",
                        "peeled"
                    ],
                    "measures": {
                        "us": {
                            "amount": 2,
                            "unitShort": "large",
                            "unitLong": "larges"
                        },
                        "metric": {
                            "amount": 2,
                            "unitShort": "large",
                            "unitLong": "larges"
                        }
                    }
                },
                {
                    "id": 19334,
                    "aisle": "Baking",
                    "image": "light-brown-sugar.jpg",
                    "consistency": "SOLID",
                    "name": "brown sugar",
                    "nameClean": "golden brown sugar",
                    "original": "1 tablespoon brown sugar",
                    "originalName": "brown sugar",
                    "amount": 1,
                    "unit": "tablespoon",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 1,
                            "unitShort": "Tbsp",
                            "unitLong": "Tbsp"
                        },
                        "metric": {
                            "amount": 1,
                            "unitShort": "Tbsp",
                            "unitLong": "Tbsp"
                        }
                    }
                },
                {
                    "id": 1017,
                    "aisle": "Cheese",
                    "image": "cream-cheese.jpg",
                    "consistency": "SOLID",
                    "name": "cream cheese",
                    "nameClean": "cream cheese",
                    "original": "4 ounces cream cheese, very cold and cubed",
                    "originalName": "cream cheese, very cold and cubed",
                    "amount": 4,
                    "unit": "ounces",
                    "meta": [
                        "very cold",
                        "cubed"
                    ],
                    "measures": {
                        "us": {
                            "amount": 4,
                            "unitShort": "oz",
                            "unitLong": "ounces"
                        },
                        "metric": {
                            "amount": 113.398,
                            "unitShort": "g",
                            "unitLong": "grams"
                        }
                    }
                },
                {
                    "id": 1125,
                    "aisle": "Milk, Eggs, Other Dairy",
                    "image": "egg-yolk.jpg",
                    "consistency": "SOLID",
                    "name": "egg yolk",
                    "nameClean": "egg yolk",
                    "original": "1 egg yolk",
                    "originalName": "egg yolk",
                    "amount": 1,
                    "unit": "",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 1,
                            "unitShort": "",
                            "unitLong": ""
                        },
                        "metric": {
                            "amount": 1,
                            "unitShort": "",
                            "unitLong": ""
                        }
                    }
                },
                {
                    "id": 18338,
                    "aisle": "Refrigerated;Frozen",
                    "image": "filo-dough.png",
                    "consistency": "SOLID",
                    "name": "filo dough",
                    "nameClean": "filo pastry",
                    "original": "Dough",
                    "originalName": "Dough",
                    "amount": 16,
                    "unit": "servings",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 16,
                            "unitShort": "servings",
                            "unitLong": "servings"
                        },
                        "metric": {
                            "amount": 16,
                            "unitShort": "servings",
                            "unitLong": "servings"
                        }
                    }
                },
                {
                    "id": 20081,
                    "aisle": "Baking",
                    "image": "flour.png",
                    "consistency": "SOLID",
                    "name": "flour",
                    "nameClean": "wheat flour",
                    "original": "cups flour",
                    "originalName": "flour",
                    "amount": 1,
                    "unit": "cups",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 1,
                            "unitShort": "cup",
                            "unitLong": "cup"
                        },
                        "metric": {
                            "amount": 236.588,
                            "unitShort": "ml",
                            "unitLong": "milliliters"
                        }
                    }
                },
                {
                    "id": 2001,
                    "aisle": "Spices and Seasonings",
                    "image": "allspice-ground.jpg",
                    "consistency": "SOLID",
                    "name": "ground allspice",
                    "nameClean": "allspice",
                    "original": "1/4 teaspoon ground allspice",
                    "originalName": "ground allspice",
                    "amount": 0.25,
                    "unit": "teaspoon",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 0.25,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
                        },
                        "metric": {
                            "amount": 0.25,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
                        }
                    }
                },
                {
                    "id": 2006,
                    "aisle": "Spices and Seasonings",
                    "image": "cardamom.jpg",
                    "consistency": "SOLID",
                    "name": "ground cardamom",
                    "nameClean": "cardamom",
                    "original": "1/8 teaspoon ground cardamom",
                    "originalName": "ground cardamom",
                    "amount": 0.125,
                    "unit": "teaspoon",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 0.125,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
                        },
                        "metric": {
                            "amount": 0.125,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
                        }
                    }
                },
                {
                    "id": 1012010,
                    "aisle": "Spices and Seasonings",
                    "image": "cinnamon.jpg",
                    "consistency": "SOLID",
                    "name": "ground cinnamon",
                    "nameClean": "ground cinnamon",
                    "original": "1/2 teaspoon ground cinnamon",
                    "originalName": "ground cinnamon",
                    "amount": 0.5,
                    "unit": "teaspoon",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 0.5,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
                        },
                        "metric": {
                            "amount": 0.5,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
                        }
                    }
                },
                {
                    "id": 2021,
                    "aisle": "Spices and Seasonings",
                    "image": "ginger.png",
                    "consistency": "SOLID",
                    "name": "ground ginger",
                    "nameClean": "ginger powder",
                    "original": "1/2 teaspoon ground ginger",
                    "originalName": "ground ginger",
                    "amount": 0.5,
                    "unit": "teaspoon",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 0.5,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
                        },
                        "metric": {
                            "amount": 0.5,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
                        }
                    }
                },
                {
                    "id": 9152,
                    "aisle": "Produce",
                    "image": "lemon-juice.jpg",
                    "consistency": "LIQUID",
                    "name": "juice of lemon",
                    "nameClean": "lemon juice",
                    "original": "Juice of 1/2 a lemon",
                    "originalName": "Juice a lemon",
                    "amount": 0.5,
                    "unit": "",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 0.5,
                            "unitShort": "",
                            "unitLong": ""
                        },
                        "metric": {
                            "amount": 0.5,
                            "unitShort": "",
                            "unitLong": ""
                        }
                    }
                },
                {
                    "id": 19911,
                    "aisle": "Cereal",
                    "image": "maple-syrup.png",
                    "consistency": "LIQUID",
                    "name": "maple syrup",
                    "nameClean": "maple syrup",
                    "original": "2 tablespoons maple syrup",
                    "originalName": "maple syrup",
                    "amount": 2,
                    "unit": "tablespoons",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 2,
                            "unitShort": "Tbsps",
                            "unitLong": "Tbsps"
                        },
                        "metric": {
                            "amount": 2,
                            "unitShort": "Tbsps",
                            "unitLong": "Tbsps"
                        }
                    }
                },
                {
                    "id": 1077,
                    "aisle": "Milk, Eggs, Other Dairy",
                    "image": "milk.png",
                    "consistency": "LIQUID",
                    "name": "milk",
                    "nameClean": "milk",
                    "original": "2 tablespoons milk",
                    "originalName": "milk",
                    "amount": 2,
                    "unit": "tablespoons",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 2,
                            "unitShort": "Tbsps",
                            "unitLong": "Tbsps"
                        },
                        "metric": {
                            "amount": 2,
                            "unitShort": "Tbsps",
                            "unitLong": "Tbsps"
                        }
                    }
                },
                {
                    "id": 19336,
                    "aisle": "Baking",
                    "image": "powdered-sugar.jpg",
                    "consistency": "SOLID",
                    "name": "powdered sugar",
                    "nameClean": "powdered sugar",
                    "original": "1/8 cup powdered sugar",
                    "originalName": "powdered sugar",
                    "amount": 0.125,
                    "unit": "cup",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 0.125,
                            "unitShort": "cups",
                            "unitLong": "cups"
                        },
                        "metric": {
                            "amount": 29.574,
                            "unitShort": "ml",
                            "unitLong": "milliliters"
                        }
                    }
                },
                {
                    "id": 19335,
                    "aisle": "Baking",
                    "image": "sugar-in-bowl.png",
                    "consistency": "SOLID",
                    "name": "sugar",
                    "nameClean": "sugar",
                    "original": "7 c.s sugar",
                    "originalName": "s sugar",
                    "amount": 7,
                    "unit": "c",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 7,
                            "unitShort": "cups",
                            "unitLong": "cups"
                        },
                        "metric": {
                            "amount": 1.656,
                            "unitShort": "l",
                            "unitLong": "liters"
                        }
                    }
                },
                {
                    "id": 1145,
                    "aisle": "Milk, Eggs, Other Dairy",
                    "image": "butter-sliced.jpg",
                    "consistency": "SOLID",
                    "name": "unsalted butter",
                    "nameClean": "unsalted butter",
                    "original": "1/2 cup unsalted butter, very cold and cubed",
                    "originalName": "unsalted butter, very cold and cubed",
                    "amount": 0.5,
                    "unit": "cup",
                    "meta": [
                        "unsalted",
                        "very cold",
                        "cubed"
                    ],
                    "measures": {
                        "us": {
                            "amount": 0.5,
                            "unitShort": "cups",
                            "unitLong": "cups"
                        },
                        "metric": {
                            "amount": 118.294,
                            "unitShort": "ml",
                            "unitLong": "milliliters"
                        }
                    }
                },
                {
                    "id": -1,
                    "aisle": "?",
                    "image": null,
                    "consistency": "SOLID",
                    "name": "frangelico",
                    "nameClean": null,
                    "original": "1 teaspoon Frangelico (or vanilla or rum)",
                    "originalName": "Frangelico (or vanilla or rum)",
                    "amount": 1,
                    "unit": "teaspoon",
                    "meta": [
                        "(or vanilla or rum)"
                    ],
                    "measures": {
                        "us": {
                            "amount": 1,
                            "unitShort": "tsp",
                            "unitLong": "teaspoon"
                        },
                        "metric": {
                            "amount": 1,
                            "unitShort": "tsp",
                            "unitLong": "teaspoon"
                        }
                    }
                }
            ],
            "glutenFree": false,
            "id": 632552,
            "image": "https://spoonacular.com/recipeImages/632552-556x370.jpg",
            "instructions": "<ol><li>Start dough by whisking dry ingredients in a medium sized bowl. Add butter and incorporate with a pastry blender until coarse crumbs develop. Add cream cheese and incorporate well.</li><li>Plop in egg yolk and stir with a fork until dough comes together into a ball.</li><li>Turn dough out onto a floured surface and roll into a uniform ball. Slightly press flat with the palm of your hand and wrap in plastic wrap. Chill at least one hour.</li><li>Once dough has chilled, set it on a floured surface and roll it out to about 10 x 12. Cut into sixteen even squares. Lay the dough squares on a parchment paper covered baking sheet and set in the freezer to chill.</li><li>In a separate bowl, toss the apples with the lemon juice, maple syrup, spices and brown sugar. Make sure to cover all of the apple pieces.</li><li>Take dough out of freezer. Drop about 1 tablespoon of filling into the center of each piece of dough. Fold one pointed edge towards its opposite corner to form a triangle.  Crimp edges with a fork along the seams. Repeat with all of the dough.</li><li>Brush a little milk over the top of each turnover and sprinkle with extra sugar if desired. (Pop back into the freezer for a quick chill if the dough is soft.). Bake in a preheated oven at 400 degrees for 20 minutes or until browned.</li></ol>",
            "pricePerServing": 67.09,
            "readyInMinutes": 45,
            "servings": 16,
            "sourceUrl": "http://www.foodista.com/recipe/TQVW7MTF/apple-hand-pies",
            "summary": "One serving contains <b>530 calories</b>, <b>3g of protein</b>, and <b>10g of fat</b>. For <b>65 cents per serving</b>, this recipe <b>covers 4%</b> of your daily requirements of vitamins and minerals. A couple people made this recipe, and 21 would say it hit the spot. A mixture of frangelico, maple syrup, butter, and a handful of other ingredients are all it takes to make this recipe so delicious. It is a good option if you're following a <b>vegetarian</b> diet. From preparation to the plate, this recipe takes roughly <b>45 minutes</b>. All things considered, we decided this recipe <b>deserves a spoonacular score of 16%</b>. This score is rather bad. Try <a href=\"https://spoonacular.com/recipes/apple-hand-pies-706227\">Apple Hand Pies</a>, <a href=\"https://spoonacular.com/recipes/apple-hand-pies-473724\">Apple Hand Pies</a>, and <a href=\"https://spoonacular.com/recipes/apple-hand-pies-617355\">Apple Hand Pies</a> for similar recipes.",
            "title": "Apple Hand Pies",
            "vegan": false,
            "vegetarian": true,
            "lock": true,
            "fave": false
        },
        {
            "cheap": false,
            "dairyFree": true,
            "extendedIngredients": [
                {
                    "id": 1129,
                    "aisle": "Milk, Eggs, Other Dairy",
                    "image": "hard-boiled-egg.png",
                    "consistency": "SOLID",
                    "name": "hard-boiled eggs",
                    "nameClean": "hard boiled egg",
                    "original": "12 hard-boiled eggs",
                    "originalName": "hard-boiled eggs",
                    "amount": 12,
                    "unit": "",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 12,
                            "unitShort": "",
                            "unitLong": ""
                        },
                        "metric": {
                            "amount": 12,
                            "unitShort": "",
                            "unitLong": ""
                        }
                    }
                },
                {
                    "id": 4025,
                    "aisle": "Condiments",
                    "image": "mayonnaise.png",
                    "consistency": "LIQUID",
                    "name": "mayonnaise",
                    "nameClean": "mayonnaise",
                    "original": "4 tablespoons mayonnaise",
                    "originalName": "mayonnaise",
                    "amount": 4,
                    "unit": "tablespoons",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 4,
                            "unitShort": "Tbsps",
                            "unitLong": "Tbsps"
                        },
                        "metric": {
                            "amount": 4,
                            "unitShort": "Tbsps",
                            "unitLong": "Tbsps"
                        }
                    }
                },
                {
                    "id": 2046,
                    "aisle": "Condiments",
                    "image": "regular-mustard.jpg",
                    "consistency": "LIQUID",
                    "name": "yellow mustard",
                    "nameClean": "mustard",
                    "original": "2 teaspoons yellow mustard",
                    "originalName": "yellow mustard",
                    "amount": 2,
                    "unit": "teaspoons",
                    "meta": [
                        "yellow"
                    ],
                    "measures": {
                        "us": {
                            "amount": 2,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
                        },
                        "metric": {
                            "amount": 2,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
                        }
                    }
                },
                {
                    "id": 2047,
                    "aisle": "Spices and Seasonings",
                    "image": "salt.jpg",
                    "consistency": "SOLID",
                    "name": "salt",
                    "nameClean": "table salt",
                    "original": "1 teaspoon salt",
                    "originalName": "salt",
                    "amount": 1,
                    "unit": "teaspoon",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 1,
                            "unitShort": "tsp",
                            "unitLong": "teaspoon"
                        },
                        "metric": {
                            "amount": 1,
                            "unitShort": "tsp",
                            "unitLong": "teaspoon"
                        }
                    }
                },
                {
                    "id": 1002020,
                    "aisle": "Spices and Seasonings",
                    "image": "granulated-garlic.png",
                    "consistency": "SOLID",
                    "name": "granulated garlic",
                    "nameClean": "granulated garlic",
                    "original": "1 teaspoon granulated garlic",
                    "originalName": "granulated garlic",
                    "amount": 1,
                    "unit": "teaspoon",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 1,
                            "unitShort": "tsp",
                            "unitLong": "teaspoon"
                        },
                        "metric": {
                            "amount": 1,
                            "unitShort": "tsp",
                            "unitLong": "teaspoon"
                        }
                    }
                },
                {
                    "id": 1002030,
                    "aisle": "Spices and Seasonings",
                    "image": "pepper.jpg",
                    "consistency": "SOLID",
                    "name": "ground pepper",
                    "nameClean": "black pepper",
                    "original": "1/2 teaspoon ground black pepper",
                    "originalName": "ground black pepper",
                    "amount": 0.5,
                    "unit": "teaspoon",
                    "meta": [
                        "black"
                    ],
                    "measures": {
                        "us": {
                            "amount": 0.5,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
                        },
                        "metric": {
                            "amount": 0.5,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
                        }
                    }
                },
                {
                    "id": 2028,
                    "aisle": "Spices and Seasonings",
                    "image": "paprika.jpg",
                    "consistency": "SOLID",
                    "name": "paprika",
                    "nameClean": "paprika",
                    "original": "Paprika to sprinkle on top",
                    "originalName": "Paprika to sprinkle on top",
                    "amount": 1,
                    "unit": "serving",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 1,
                            "unitShort": "serving",
                            "unitLong": "serving"
                        },
                        "metric": {
                            "amount": 1,
                            "unitShort": "serving",
                            "unitLong": "serving"
                        }
                    }
                }
            ],
            "glutenFree": true,
            "id": 635285,
            "image": "https://spoonacular.com/recipeImages/635285-556x370.jpg",
            "instructions": "Slice eggs in half lengthwise; remove yolks and set whites aside. In a small bowl, mash yolks with a fork. Add the mayonnaise, salt, garlic, pepper and mustard; mix well. Stuff or pipe into egg whites. Sprinkle with paprika.\nRefrigerate until serving.",
            "pricePerServing": 380.25,
            "readyInMinutes": 45,
            "servings": 1,
            "sourceUrl": "https://www.foodista.com/recipe/NWGPVRTM/blasians-deviled-eggs",
            "summary": "You can never have too many American recipes, so give Blasian's Deviled Eggs a try. This recipe makes 1 servings with <b>1336 calories</b>, <b>77g of protein</b>, and <b>106g of fat</b> each. For <b>$3.8 per serving</b>, this recipe <b>covers 50%</b> of your daily requirements of vitamins and minerals. It is a good option if you're following a <b>gluten free, dairy free, lacto ovo vegetarian, and whole 30</b> diet. From preparation to the plate, this recipe takes roughly <b>roughly 45 minutes</b>. This recipe is liked by 24 foodies and cooks. It is brought to you by Foodista. If you have hard-boiled eggs, granulated garlic, salt, and a few other ingredients on hand, you can make it. A couple people really liked this hor d'oeuvre. With a spoonacular <b>score of 93%</b>, this dish is outstanding. <a href=\"https://spoonacular.com/recipes/parsi-deviled-eggs-indian-inspired-deviled-eggs-have-cilantro-lime-juice-and-honey-in-them-to-make-them-delicious-600694\">Parsi Deviled Eggs – Indian inspired deviled eggs have cilantro, lime juice, and honey in them to make them delicious</a>, <a href=\"https://spoonacular.com/recipes/instant-pot-hard-boiled-eggs-and-easy-deviled-eggs-960857\">Instant Pot Hard Boiled Eggs (And Easy Deviled Eggs!)</a>, and <a href=\"https://spoonacular.com/recipes/green-eggs-and-ham-deviled-eggs-582178\">Green Eggs and Ham Deviled Eggs</a> are very similar to this recipe.",
            "title": "Blasian's Deviled Eggs",
            "vegan": false,
            "vegetarian": true,
            "lock": true,
            "fave": false
        }
    ] },
    viewed_recipes: [],
    shopping_list: []
    random_recipe: {}
    

}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOADING':
            return { ...state, searchTerms: action.payload, loading: true };
        case "SET RECIPES":
            return { ...state, recipes: action.payload }
        case "SET RECIPE ID":
            return { ...state, recipe_id: action.payload }
        case "SET USER RECIPE HISTORY":
            return { ...state, users_recipe_history: action.payload }
        case "SET MEAL PLAN RECIPES":
            return { ...state, meal_plan_recipes: action.payload }
        case "SET VIEWED RECIPES":
            return { ...state, viewed_recipes: action.payload }
        case "SET SHOPPING LIST":
            return { ...state, shopping_list: action.payload }
        case "SET RANDOM RECIPE":
            return { ...state, random_recipe: action.payload }
        default:
            return state;
    }
}

export default reducer;
