'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class VacancySchema extends Schema {
  up () {
    this.create('vacancies', (table) => {
      table.increments()
      table.integer('occupation_id').unsigned().references('id').inTable('occupations')
      table.integer('branch_id').unsigned().references('id').inTable('branches')
      table.text('description').notNullable()
      table.decimal('salary', 9, 2)
      table.boolean('is_for_pcd').notNullable().default(false)
      table.timestamps()
    })
  }

  down () {
    this.drop('vacancies')
  }
}

module.exports = VacancySchema
