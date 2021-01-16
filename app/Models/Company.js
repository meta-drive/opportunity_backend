'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Company extends Model {

  branches () {
    return this.hasMany('App/Models/Branch')
  }
}

module.exports = Company
