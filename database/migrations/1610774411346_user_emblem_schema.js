'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserEmblemSchema extends Schema {
  up () {
    this.create('user_emblems', (table) => {
      table.increments()
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.integer('emblem_id').unsigned().references('id').inTable('emblems')
      table.timestamps()
    })
  }

  down () {
    this.drop('user_emblems')
  }
}

module.exports = UserEmblemSchema
