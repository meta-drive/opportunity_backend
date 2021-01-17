'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

/** @type {import('@adonisjs/framework/src/Hash')} */
const Hash = use('Hash')

const Env = use('Env')

class User extends Model {

  static get hidden () {
    return ['password'];
  }

  static boot () {
    super.boot()

    /**
     * A hook to hash the user password before saving
     * it to the database.
     */
    this.addHook('beforeSave', async (userInstance) => {
      if (userInstance.dirty.password) {
        userInstance.password = await Hash.make(userInstance.password)
      }
    })
  }

  static get computed () {
    return [
      'url',
      'is_profile_completed',
      'is_general_challenges_completed',
      'is_specific_challenges_completed',
      'is_interest_filled'
    ]
  }

  getUrl ({ id }) {
    return `${Env.get('APP_URL')}/photo/${id}`
  }

  getIsProfileCompleted ({ id }) {
    return true
  }

  getIsGeneralChallengesCompleted ({ id }) {
    return true
  }

  getIsSpecificChallengesCompleted ({ id }) {
    return false
  }

  getIsInterestFilled ({ id }) {
    return true
  }


  /**
   * A relationship on tokens is required for auth to
   * work. Since features like `refreshTokens` or
   * `rememberToken` will be saved inside the
   * tokens table.
   *
   * @method tokens
   *
   * @return {Object}
   */
  tokens () {
    return this.hasMany('App/Models/Token')
  }

  academics () {
    return this.hasMany('App/Models/Academic')
  }

  experiences () {
    return this.hasMany('App/Models/Experience')
  }

  languages () {
    return this.hasMany('App/Models/Language')
  }

  interests () {
    return this.hasMany('App/Models/Interest')
  }

  employees () {
    return this.hasMany('App/Models/Employee')
  }

  reports () {
    return this.hasMany('App/Models/Report')
  }

  user_evaluations () {
    return this.hasMany('App/Models/UserEvaluation')
  }

  company_evaluations () {
    return this.hasMany('App/Models/CompanyEvaluation', 'reviewer_user_id', 'id')
  }

  emblems () {
    return this.belongsToMany('App/Models/Emblem').pivotTable('user_emblems')
  }

  address () {
    return this.hasOne('App/Models/UserAddress')
  }

  challengesAccepted () {
    return this.hasMany('App/Models/ChallengeAccepted')
  }

}

module.exports = User
