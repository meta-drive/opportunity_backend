'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Competence = use('App/Models/Competence')

/**
 * Resourceful controller for interacting with competences
 */
class CompetenceController {
  /**
   * Show a list of all competences.
   * GET competences
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const competences = Competence.all()

    return competences
  }

  /**
   * Create/save a new competence.
   * POST competences
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const data = request.only([
      'title',
    ])

    const competence = Competence.create(data)

    return competence
  }

  /**
   * Display a single competence.
   * GET competences/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const competence = await Competence.findOrFail(params.id)

    return competence
  }

  /**
   * Update competence details.
   * PUT or PATCH competences/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const competence = await Competence.findOrFail(params.id)

    const data = request.only([
      'title',
    ])

    competence.merge(data)
    await competence.save()

    return competence
  }

  /**
   * Delete a competence with id.
   * DELETE competences/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = CompetenceController
