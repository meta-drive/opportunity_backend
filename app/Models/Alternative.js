'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Alternative extends Model {
  question () {
    return this.belongsTo('App/Models/Question')
  }

  answers () {
    return this.hasMany('App/Models/Answer')
  }
}

module.exports = Alternative
