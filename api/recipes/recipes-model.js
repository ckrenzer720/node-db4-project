function getRecipeById(recipe_id) {
  return Promise.resolve(
    `we found the recipe you were looking for with the id ${recipe_id}`
  );
}

module.exports = {
  getRecipeById,
};
