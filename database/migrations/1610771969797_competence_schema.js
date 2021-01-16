'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CompetenceSchema extends Schema {
  up () {
    this.create('competences', (table) => {
      table.increments()
      table.string('title', 50).notNullable()
      table.string('image', 255)
      table.timestamps()
    })
  }

  down () {
    this.drop('competences')
  }
}

module.exports = CompetenceSchema
