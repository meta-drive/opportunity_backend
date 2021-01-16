'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Company extends Model {

  employees () {
    return this.hasMany('App/Models/Employee')
  }

  branches () {
    return this.hasMany('App/Models/Branch')
  }

  user_evaluations () {
    return this.hasMany('App/Models/UserEvaluation', 'id', 'reviewer_company_id')
  }

  company_evaluations () {
    return this.hasMany('App/Models/CompanyEvaluation')
  }

  challenges () {
    return this.hasMany('App/Models/Challenge')
  }
}

module.exports = Company
