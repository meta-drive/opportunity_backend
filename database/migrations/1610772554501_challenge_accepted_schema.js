'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ChallengeAcceptedSchema extends Schema {
  up () {
    this.create('challenge_accepteds', (table) => {
      table.increments()
      table.integer('challenge_id').unsigned().references('id').inTable('challenges')
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.enu('status', ['em andamento','terminado', 'cancelado'])
      table.date('final_date')
      table.timestamps()
    })
  }

  down () {
    this.drop('challenge_accepteds')
  }
}

module.exports = ChallengeAcceptedSchema
