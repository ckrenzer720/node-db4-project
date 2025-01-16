const recipes = [
  { recipe_name: "Broccoli Pesto Pasta" },
  { recipe_name: "Lemon Chicken" },
  { recipe_name: "Salmon" },
];

const ingredients = [
  { ingredient_name: "Broccoli", ingredient_unit: "grams" },
  { ingredient_name: "Pesto", ingredient_unit: "lbs" },
  { ingredient_name: "Pasta", ingredient_unit: "lbs" },
  { ingredient_name: "Lemon", ingredient_unit: "slices" },
  { ingredient_name: "Chicken", ingredient_unit: "grams" },
  { ingredient_name: "Salmon", ingredient_unit: "kilos" },
];

const step_ingredients = [
  // Broccoli Pesto Pasta
  { step_id: 2, ingredient_id: 1, quantity: 1 },
  { step_id: 3, ingredient_id: 2, quantity: 0.75 },
  { step_id: 3, ingredient_id: 3, quantity: 2 },
  // Lemon Chicken
  { step_id: 5, ingredient_id: 4, quantity: 2 },
  { step_id: 5, ingredient_id: 5, quantity: 2.5 },
  // Salmon
  { step_id: 8, ingredient_id: 6, quantity: 4 },
];

const steps = [
  // Broccoli Pesto Pasta
  {
    step_instructions: "heat pan",
    step_number: 1,
    recipe_id: 1,
  },
  {
    step_instructions: "add broccoli",
    step_number: 2,
    recipe_id: 1,
  },
  {
    step_instructions: "add pesto mixed with pasta",
    step_number: 3,
    recipe_id: 1,
  },
  // Lemon Chicken
  { step_instructions: "find chicken on farm", step_number: 1, recipe_id: 2 },
  {
    step_instructions: "slice lemons and put on chicken, then put in the oven",
    step_number: 2,
    recipe_id: 2,
  },
  {
    step_instructions: "cook until interanl temperature reaches 500 degrees",
    step_number: 3,
    recipe_id: 2,
  },
  // Salmon
  {
    step_instructions: "season salmon with preferred spices",
    step_number: 1,
    recipe_id: 3,
  },
  {
    step_instructions: "Cook salmon and enjoy with your cat",
    step_number: 2,
    recipe_id: 3,
  },
];

exports.seed = async function (knex) {
  await knex("recipes").insert(recipes);
  await knex("ingredients").insert(ingredients);
  await knex("steps").insert(steps);
  await knex("step_ingredients").insert(step_ingredients);
};
