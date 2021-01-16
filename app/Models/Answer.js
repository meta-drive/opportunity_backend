'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Answer extends Model {

  question () {
    return this.belongsTo('App/Models/Question')
  }

  alternative () {
    return this.belongsTo('App/Models/Alternative')
  }

  challengeAccepted () {
    return this.belongsTo('App/Models/ChallengeAccepted')
  }
}

module.exports = Answer
