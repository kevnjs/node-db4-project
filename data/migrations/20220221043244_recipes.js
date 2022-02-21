/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex) {
    return knex.schema
      .createTable('recipes', tbl => {
          tbl.increments('recipe_id')
          tbl.string('recipe_name').unique().notNullable()
      })
      .createTable('steps', tbl => {
          tbl.increments('step_id')
          tbl.string('step_instructions', 256).notNullable()
          tbl.integer('step_number').notNullable()
          tbl.integer('recipe_id').unsigned().notNullable()
              .references('recipe_id').inTable('recipes')
              .onDelete('RESTRICT')
              .onUpdate('RESTRICT')
          })
      .createTable('ingredients', tbl => {
          tbl.increments('ingredient_id')
          tbl.string('ingredient_name', 128).notNullable().unique()
      })
      .createTable('step_ingredients', tbl => {
          tbl.increments('step_ingredient_id')
          tbl.integer('step_id').unsigned().notNullable()
              .references('step_id').inTable('step_ingredients')
              .onDelete('RESTRICT')
              .onUpdate('RESTRICT')
          tbl.integer('ingredient_id').unsigned().notNullable()
              .references('ingredient_id').inTable('ingredients')
              .onDelete('RESTRICT')
              .onUpdate('RESTRICT')
          tbl.integer('quantity').notNullable()    
      })
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function(knex) {
      return knex.schema
          .dropTableIfExists('step_ingredients')
          .dropTableIfExists('ingredients')
          .dropTableIfExists('steps')
          .dropTableIfExists('recipes')
  };
  