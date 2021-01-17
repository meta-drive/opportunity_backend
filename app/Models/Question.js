'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Question extends Model {

  static get hidden () {
    return ['right_answer'];
  }

  challenge () {
    return this.belongsTo('App/Models/Challenge')
  }

  answers () {
    return this.hasMany('App/Models/Answer')
  }
}

module.exports = Question
