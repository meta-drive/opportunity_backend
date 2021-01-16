'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Interest = use('App/Models/Interest')

/**
 * Resourceful controller for interacting with interests
 */
class InterestController {
 /**
   * Show a list of all interests.
   * GET interests
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ params, request, response, view }) {
    const interests = await Interest
    .query()
    .where('user_id', params.users_id)
    .fetch()

    return interests
  }

  /**
   * Create/save a new interest.
   * POST interests
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ auth, request, response }) {
    const data = request.only([
      'occupation',
      'min_salary',
      'max_salary',
    ])

    data.user_id = auth.user.id
    const interest = await Interest.create(data)
    return interest
  }

  /**
   * Display a single interest.
   * GET interests/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const interest = await Interest.findOrFail(params.id)

    return interest
  }

  /**
   * Update interest details.
   * PUT or PATCH interests/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const interest = await Interest.findOrFail(params.id)

    const data = request.only([
      'occupation',
      'min_salary',
      'max_salary',
    ])

    interest.merge(data)
    await interest.save()
    return interest
  }

  /**
   * Delete a interest with id.
   * DELETE interests/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const interest = await Interest.findOrFail(params.id)

    await interest.delete()
  }
}

module.exports = InterestController
