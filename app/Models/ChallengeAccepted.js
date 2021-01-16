'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class ChallengeAccepted extends Model {

  challenge () {
    return this.belongsTo('App/Models/Challenge')
  }

  user () {
    return this.belongsTo('App/Models/User')
  }

  user () {
    return this.hasMany('App/Models/Answers')
  }
}

module.exports = ChallengeAccepted
