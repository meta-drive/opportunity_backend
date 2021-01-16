'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Branch extends Model {

  company () {
    return this.belongsTo('App/Models/Company')
  }

  address () {
    return this.hasOne('App/Models/BranchAddress')
  }

  vacancies () {
    return this.hasMany('App/Models/Vacancy')
  }
}

module.exports = Branch
