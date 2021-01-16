'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SubjectSchema extends Schema {
  up () {
    this.create('subjects', (table) => {
      table.increments()
      table.integer('report_id').unsigned().references('id').inTable('reports')
      table.string('name', 50).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('subjects')
  }
}

module.exports = SubjectSchema
