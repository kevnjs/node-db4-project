const recipes = [
    {recipe_name: "Fried Rice"},
    {recipe_name: "Bologna Sandwich"}
]

const ingredients = [
    {ingredient_name: 'Rice'},
    {ingredient_name: 'Bread'},
    {ingredient_name: 'Bologna'},
    {ingredient_name: 'Eggs'},
    {ingredient_name: 'Chinese Sausages'},
    {ingredient_name: 'Love'}
]

const steps = [
    // Fried Rice
    {step_instructions: 'Cook the rice', step_number: 1, recipe_id: 1},
    {step_instructions: 'Mix the rice with eggs', step_number: 2, recipe_id: 1},
    {step_instructions: 'Add the sausages', step_number: 3, recipe_id: 1},
    {step_instructions: 'Fry the rice', step_number: 4, recipe_id: 1},
    // Bologna Sandwich
    {step_instructions: 'Get the bread', step_number: 1, recipe_id: 2},
    {step_instructions: 'Get the bologna', step_number: 2, recipe_id: 2},
    {step_instructions: 'Get your girl to make the sandwich', step_number: 3, recipe_id:2}
]

const step_ingredients = [
    {step_id: 1, ingredient_id: 1, quantity: 1},
    {step_id: 2, ingredient_id: 4, quantity: 2},
    {step_id: 3, ingredient_id: 5, quantity: 2},
    {step_id: 4, ingredient_id: 1, quantity: 1},
    
    {step_id: 5, ingredient_id: 2, quantity: 2},
    {step_id: 6, ingredient_id: 3, quantity: 1},
    {step_id: 7, ingredient_id: 6, quantity: 1}

]

exports.seed = async knex => {
    await knex('recipes').insert(recipes)
    await knex('ingredients').insert(ingredients)
    await knex('steps').insert(steps)
    await knex('step_ingredients').insert(step_ingredients)
}