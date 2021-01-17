'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Challenge = use('App/Models/Challenge')

/**
 * Resourceful controller for interacting with challenges
 */
class CompanyChallengeController {
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
      .where('company_id', params.companies_id)
      .fetch()

    return challenges
  }

  /**
   * Create/save a new challenge.
   * POST challenges
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ params, request, response }) {
    const data = request.only([
      'competence_id',
      'title',
      'description'
    ])

    data.company_id = params.companies_id
    const challenge = await Challenge.create(data)

    return challenge
  }

  /**
   * Display a single challenge.
   * GET challenges/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const challenge = await Challenge.findOrFail(params.id)

    return challenge
  }

  /**
   * Update challenge details.
   * PUT or PATCH challenges/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const challenge = await Challenge.findOrFail(params.id)

    const data = request.only([
      'competence_id',
      'title',
      'description'
    ])

    challenge.merge(data)
    await challenge.save()

    return challenge
  }

  /**
   * Delete a challenge with id.
   * DELETE challenges/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = CompanyChallengeController
