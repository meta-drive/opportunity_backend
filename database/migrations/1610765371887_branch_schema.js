'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BranchSchema extends Schema {
  up () {
    this.create('branches', (table) => {
      table.increments()
      table.integer('company_id').unsigned().references('id').inTable('companies')
      table.string('cnpj', 14).notNullable().unique()
      table.string('phone', 15).notNullable()
      table.string('email', 100).notNullable()
      table.boolean('is_matrix').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('branches')
  }
}

module.exports = BranchSchema
