'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Question extends Model {

  challenge () {
    return this.belongsTo('App/Models/Challenge')
  }

  alternatives () {
    return this.hasMany('App/Models/Alternative')
  }

  answers () {
    return this.hasMany('App/Models/Answer')
  }
}

module.exports = Question
