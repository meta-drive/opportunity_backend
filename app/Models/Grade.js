'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Grade extends Model {

  subject () {
    return this.belongsTo('App/Models/Subject')
  }
}

module.exports = Grade
