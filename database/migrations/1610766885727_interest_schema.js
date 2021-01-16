'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class InterestSchema extends Schema {
  up () {
    this.create('interests', (table) => {
      table.increments()
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.string('occupation', 80).notNullable()
      table.integer('min_salary')
      table.integer('max_salary')
      table.timestamps()
    })
  }

  down () {
    this.drop('interests')
  }
}

module.exports = InterestSchema
