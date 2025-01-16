const recipes = [
  { recipe_name: "Pasta e Oligio" },
  { recipe_name: "Broccoli Pesto Pasta" },
  { recipe_name: "Lemon Chicken" },
];

const ingredients = [
  { ingredient_name: "olive oil", ingredient_unit: "tbsp" },
  { ingredient_name: "Pasta", ingredient_unit: "lbs" },
  { ingredient_name: "Pesto", ingredient_unit: "lbs" },
  { ingredient_name: "Broccoli", ingredient_unit: "lbs" },
  { ingredient_name: "Lemon", ingredient_unit: "slices" },
  { ingredient_name: "Chicken", ingredient_unit: "grams" },
];

const step_ingredients = [
  // Spaghetti Bolognese
  { step_id: 1, ingredient_id: 1, quantity: 1 },
  { step_id: 2, ingredient_id: 2, quantity: 1 },
  //   Broccoli Pesto Pasta
  { step_id: 3, ingredient_id: 3, quantity: 0.25 },
  { step_id: 4, ingredient_id: 4, quantity: 1 },
  // Lemon Chicken
  { step_id: 5, ingredient_id: 5, quantity: 4 },
  { step_id: 6, ingredient_id: 6, quantity: 26 },
];

const steps = [
  // Pasta e Oligio
  {
    step_instructions: "Add 1 tbsp olive oil",
    step_number: 1,
    recipe_id: 1,
  },
  {
    step_instructions: "Toss oil and pasta together",
    step_number: 2,
    recipe_id: 1,
  },
  // Broccoli Pesto Pasta
  { step_instructions: "cook broccoli", step_number: 1, recipe_id: 2 },
  {
    step_instructions: "Make broccoli pesto pasta",
    step_number: 2,
    recipe_id: 2,
  },
  // Lemon Chicken
  {
    step_instructions: "slice lemons",
    step_number: 1,
    recipe_id: 3,
  },
  {
    step_instructions: "Cook chicken with lemons",
    step_number: 2,
    recipe_id: 3,
  },
];

exports.seed = async function (knex) {
  await knex("recipes").insert(recipes);
  await knex("ingredients").insert(ingredients);
  await knex("step_ingredients").insert(step_ingredients);
  await knex("steps").insert(steps);
};
