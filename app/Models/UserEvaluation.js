'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class UserEvaluation extends Model {

  user () {
    return this.belongsTo('App/Models/User')
  }

  company () {
    return this.belongsTo('App/Models/Company', 'id', 'reviewer_company_id')
  }
}

module.exports = UserEvaluation
