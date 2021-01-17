'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Challenge extends Model {

  company () {
    return this.belongsTo('App/Models/Company')
  }

  questions () {
    return this.hasMany('App/Models/Question')
  }

  challengesAccepted () {
    return this.hasMany('App/Models/ChallengeAccepted')
  }
}

module.exports = Challenge
