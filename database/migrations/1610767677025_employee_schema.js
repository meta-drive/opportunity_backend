'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EmployeeSchema extends Schema {
  up () {
    this.create('employees', (table) => {
      table.increments()
      table.integer('company_id').unsigned().references('id').inTable('companies')
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.string('occupation', 80).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('employees')
  }
}

module.exports = EmployeeSchema
