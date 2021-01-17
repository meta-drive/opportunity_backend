'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

const Env = use('Env')

class Emblem extends Model {

  static get computed () {
    return ['url']
  }

  getUrl ({ id }) {
    return `${Env.get('APP_URL')}/emblem/${id}`
  }

  users () {
    return this.belongsToMany('App/Models/Users').pivotTable('user_emblems')
  }
}

module.exports = Emblem
