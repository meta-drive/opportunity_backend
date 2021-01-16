'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ExperienceSchema extends Schema {
  up () {
    this.create('experiences', (table) => {
      table.increments()
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.enu('modality', [
        'Freelancer',
        'Estágio',
        'Trainee',
        'Jovem Aprendiz',
        'Pessoa Jurídica',
        'CLT',
      ]).notNullable()
      table.string('occupation', 80).notNullable()
      table.string('activities', 500).notNullable()
      table.string('company_name', 80).notNullable()
      table.date('entry_date').notNullable()
      table.date('final_date')
      table.timestamps()
    })
  }

  down () {
    this.drop('experiences')
  }
}

module.exports = ExperienceSchema
