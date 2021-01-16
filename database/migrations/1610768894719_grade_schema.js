'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class GradeSchema extends Schema {
  up () {
    this.create('grades', (table) => {
      table.increments()
      table.integer('subject_id').unsigned().references('id').inTable('subjects')
      table.enu('bimester', [1, 2, 3, 4])
      table.timestamps()
    })
  }

  down () {
    this.drop('grades')
  }
}

module.exports = GradeSchema
