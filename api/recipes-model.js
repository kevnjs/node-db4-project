const db = require('../db-config')

async function getRecipeById(recipe_id) {
    const recipe = await db('recipes')
    .select('recipes.*', 'steps.*', 'st.*', 'in.*')
    .leftJoin('steps', 'recipes.recipe_id', 'steps.recipe_id')
    .leftJoin('step_ingredients as st', 'st.step_id', 'steps.step_id')
    .leftJoin('ingredients as in', 'in.ingredient_id', 'st.ingredient_id')
    .where('recipes.recipe_id', recipe_id)
    .orderBy('steps.step_number')

    const recipeResponse = {
        recipe_id: recipe_id,
        recipe_name: recipe[0].recipe_name,
        created_at: Date.now().toString(),
        steps: []
    }

    if(recipe.length < 1) return null
    if(recipe[0].steps === null) return recipeResponse;

    recipe.forEach(rec => {
        recipeResponse.steps.push({
            step_id: rec.step_id,
            step_number: rec.step_number,
            step_instructions: rec.step_instructions,
            ingredients:[{
                ingredient_id: rec.ingredient_id,
                ingredient_name: rec.ingredient_name,
                quantity: rec.quantity
            }]
        })
        // console.log(rec)
    })

    return recipeResponse;
}

module.exports = {
    getRecipeById
};