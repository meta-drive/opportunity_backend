'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Vacancy = use('App/Models/Vacancy')

/**
 * Resourceful controller for interacting with vacancies
 */
class VacancyController {
   /**
   * Show a list of all vacancies.
   * GET vacancies
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ params, request, response, view }) {
    const vacancies = await Vacancy.all()

    return vacancies
  }

  /**
   * Create/save a new vacancy.
   * POST vacancies
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const data = request.only([
      'occupation_id',
      'branch_id',
      'description',
      'salary',
      'is_for_pcd',
    ])

    const vacancy = await Vacancy.create(data)
    return vacancy
  }

  /**
   * Display a single vacancy.
   * GET vacancies/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const vacancy = await Vacancy.findOrFail(params.id)

    return vacancy
  }

  /**
   * Update vacancy details.
   * PUT or PATCH vacancies/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const vacancy = await Vacancy.findOrFail(params.id)

    const data = request.only([
      'occupation_id',
      'branch_id',
      'description',
      'salary',
      'is_for_pcd',
    ])

    vacancy.merge(data)
    await vacancy.save()
    return vacancy
  }

  /**
   * Delete a vacancy with id.
   * DELETE vacancies/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const vacancy = await Vacancy.findOrFail(params.id)

    await vacancy.delete()
  }
}

module.exports = VacancyController
