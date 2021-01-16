'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Occupation extends Model {

  vacancies () {
    return this.hasMany('App/Models/Vacancy')
  }
}

module.exports = Occupation
