'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ChallengeSchema extends Schema {
  up () {
    this.create('challenges', (table) => {
      table.increments()
      table.integer('company_id').unsigned().references('id').inTable('companies')
      table.integer('competence_id').unsigned().references('id').inTable('competences')
      table.string('title', 50).notNullable()
      table.text('description').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('challenges')
  }
}

module.exports = ChallengeSchema
