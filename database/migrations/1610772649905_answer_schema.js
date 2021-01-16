'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AnswerSchema extends Schema {
  up () {
    this.create('answers', (table) => {
      table.increments()
      table.integer('question_id').unsigned().references('id').inTable('questions')
      table.integer('alternative_id').unsigned().references('id').inTable('alternatives')
      table.integer('challenge_accepted_id').unsigned().references('id').inTable('challenge_accepteds')
      table.timestamps()
    })
  }

  down () {
    this.drop('answers')
  }
}

module.exports = AnswerSchema
