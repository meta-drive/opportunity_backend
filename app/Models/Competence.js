'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Competence extends Model {

  challenges () {
    return this.hasMany('App/Models/Challenge')
  }
}

module.exports = Competence
