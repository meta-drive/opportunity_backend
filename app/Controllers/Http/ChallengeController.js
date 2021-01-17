'use strict'

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
      .fetch()

    return challenges
  }
}

module.exports = ChallengeController
