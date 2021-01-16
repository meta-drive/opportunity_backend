'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Employee extends Model {

  user () {
    return this.belongsTo('App/Models/User')
  }

  companies () {
    return this.belongsTo('App/Models/Company')
  }
}

module.exports = Employee
