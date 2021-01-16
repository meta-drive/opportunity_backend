'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class CompanyEvaluation extends Model {

  user () {
    return this.belongsTo('App/Models/User', 'id', 'reviewer_user_id')
  }

  company () {
    return this.belongsTo('App/Models/Company')
  }
}

module.exports = CompanyEvaluation
