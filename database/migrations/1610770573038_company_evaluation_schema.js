'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CompanyEvaluationSchema extends Schema {
  up () {
    this.create('company_evaluations', (table) => {
      table.increments()
      table.integer('company_id').unsigned().references('id').inTable('companies')
      table.integer('reviewer_user_id').unsigned().references('id').inTable('users')
      table.integer('score')
      table.text('description')
      table.timestamps()
    })
  }

  down () {
    this.drop('company_evaluations')
  }
}

module.exports = CompanyEvaluationSchema
