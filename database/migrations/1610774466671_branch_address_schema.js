'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BranchAddressSchema extends Schema {
  up () {
    this.create('branch_addresses', (table) => {
      table.increments()
      table.integer('branch_id').unsigned().references('id').inTable('branches')
      table.string('cep', 8).notNullable()
      table.string('description', 150).notNullable()
      table.string('number', 8)
      table.string('complement', 50)
      table.string('city', 50).notNullable()
      table.string('neighborhood', 50).notNullable()
      table.string('uf', 2).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('branch_addresses')
  }
}

module.exports = BranchAddressSchema
