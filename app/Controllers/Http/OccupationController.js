'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Occupation = use('App/Models/Occupation')

/**
 * Resourceful controller for interacting with occupations
 */
class OccupationController {
  /**
   * Show a list of all occupations.
   * GET occupations
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ params, request, response, view }) {
    const occupations = await Occupation.all()

    return occupations
  }

  /**
   * Create/save a new occupation.
   * POST occupations
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const data = request.only([
      'name',
      'occupation_area'
    ])

    const occupation = await Occupation.create(data)
    return occupation
  }

  /**
   * Display a single occupation.
   * GET occupations/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const occupation = await Occupation.findOrFail(params.id)

    return occupation
  }

  /**
   * Update occupation details.
   * PUT or PATCH occupations/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const occupation = await Occupation.findOrFail(params.id)

    const data = request.only([
      'name',
      'occupation_area'
    ])

    occupation.merge(data)
    await occupation.save()
    return occupation
  }

  /**
   * Delete a occupation with id.
   * DELETE occupations/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const occupation = await Occupation.findOrFail(params.id)

    await occupation.delete()
  }
}

module.exports = OccupationController
