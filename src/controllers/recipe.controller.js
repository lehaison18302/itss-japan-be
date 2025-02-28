const recipeService = require("./../services/recipe.service");

const getAllRecipes = async (req, res) => {
  return res.status(200).json({
    success: true,
    recipes: await recipeService.getAllRecipes(req.query),
  });
};

const createRecipe = async (req, res) => {
  console.log(req.body);
  return res.status(200).json({
    success: true,
    recipe: await recipeService.createRecipe(req.body),
  });
};

module.exports = {
  getAllRecipes,
  createRecipe,
};
