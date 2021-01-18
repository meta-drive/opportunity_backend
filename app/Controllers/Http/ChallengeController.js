'use strict'

const { query } = require('../../Models/User')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Challenge = use('App/Models/Challenge')
class ChallengeController {
    /**
   * Show a list of all challenges.
   * GET challenges
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ params, request, response, view }) {
    const challenges = Challenge
      .query()
      .with('questions')
      .with('company')
      .fetch()

    return challenges
  }

  async show ({ params, request, response, view }) {
    const challenge = await Challenge
    .query()
    .with('questions')
    .with('company')
    .where('id', params.id)
    .first(params.id)

    return challenge
  }
}

module.exports = ChallengeController
