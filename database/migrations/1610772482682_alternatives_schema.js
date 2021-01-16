'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AlternativesSchema extends Schema {
  up () {
    this.create('alternatives', (table) => {
      table.increments()
      table.integer('question_id').unsigned().references('id').inTable('questions')
      table.text('description').notNullable()
      table.boolean('is_correct').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('alternatives')
  }
}

module.exports = AlternativesSchema
