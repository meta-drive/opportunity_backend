'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.create('users', (table) => {
      table.increments()
      table.string('username', 80).notNullable().unique()
      table.string('email', 254).notNullable().unique()
      table.string('password', 60).notNullable()
      table.date('birth_date').notNullable()
      table.string('description', 200).notNullable()
      table.string('phone', 15).notNullable()
      table.enu('genre', ['M','F']).notNullable()
      table.string('photo', 255)
      table.enu('marital_status', ['Solteiro','Casado','Divorciado','Viúvo','Separado'])
      table.string('goals', 300)
      table.text('professional_resume')
      table.string('facebook', 150)
      table.string('linkedin', 150)
      table.string('instagram', 150)
      table.timestamps()
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UserSchema
