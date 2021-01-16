'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Subject extends Model {

  report () {
    return this.belongsTo('App/Models/Report')
  }

  grades () {
    return this.hasMany('App/Models/Grade')
  }
}

module.exports = Subject
