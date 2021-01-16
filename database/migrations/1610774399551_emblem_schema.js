'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EmblemSchema extends Schema {
  up () {
    this.create('emblems', (table) => {
      table.increments()
      table.string('title', 40).notNullable()
      table.string('image', 250).notNullable()
      table.integer('score').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('emblems')
  }
}

module.exports = EmblemSchema
