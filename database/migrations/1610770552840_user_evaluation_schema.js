'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserEvaluationSchema extends Schema {
  up () {
    this.create('user_evaluations', (table) => {
      table.increments()
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.integer('reviewer_company_id').unsigned().references('id').inTable('companies')
      table.integer('score')
      table.text('description')
      table.timestamps()
    })
  }

  down () {
    this.drop('user_evaluations')
  }
}

module.exports = UserEvaluationSchema
