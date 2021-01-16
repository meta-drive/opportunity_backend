'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class BranchAddress extends Model {

  branch () {
    return this.belongsTo('App/Models/Branch')
  }
}

module.exports = BranchAddress
