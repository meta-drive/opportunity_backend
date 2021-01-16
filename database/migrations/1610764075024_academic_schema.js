'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AcademicSchema extends Schema {
  up () {
    this.create('academics', (table) => {
      table.increments()
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.enu('education_level', ['Fundamental','Médio','EJA','Superior','Técnico'])
      table.string('institution', 100).notNullable()
      table.string('course', 50).notNullable()
      table.date('entry_date').notNullable()
      table.date('graduation_date')
      // table.string('performance')
      table.timestamps()
    })
  }

  down () {
    this.drop('academics')
  }
}

module.exports = AcademicSchema
