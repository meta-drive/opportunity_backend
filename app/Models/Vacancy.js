'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Vacancy extends Model {

  occupation () {
    return this.belongsTo('App/Models/Occupation')
  }

  branch () {
    return this.belongsTo('App/Models/Branch')
  }
}

module.exports = Vacancy
