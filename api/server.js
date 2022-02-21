const express = require('express')
const server = express()
const recipes = require('./recipes-model')


server.use(express.json())
server.get('/api/recipes/:recipe_id', (req, res) => {
   recipes.getRecipeById(req.params.recipe_id).then(recipe => res.json(recipe))
})
module.exports = server;
