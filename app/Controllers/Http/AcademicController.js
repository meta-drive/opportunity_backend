'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Academic = use('App/Models/Academic')

/**
 * Resourceful controller for interacting with academics
 */
class AcademicController {
  /**
   * Show a list of all academics.
   * GET academics
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ params, request, response, view }) {
    const academics = await Academic
      .query()
      .where('user_id', params.user_id)
      .fetch()

    return academics
  }

  /**
   * Create/save a new academic.
   * POST academics
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ auth, request, response }) {
    const data = request.only([
      'education_level',
      'institution',
      'course',
      'entry_date',
      'graduation_date'
    ])

    const user = await auth.getUser()
    const academic = await user
      .academics()
      .create(data)

    return academic
  }

  /**
   * Display a single academic.
   * GET academics/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const academic = await Academic.find(params.id)

    return academic
  }

  /**
   * Update academic details.
   * PUT or PATCH academics/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const academic = await Academic.find(params.id)
    const data = request.only([
      'education_level',
      'institution',
      'course',
      'entry_date',
      'graduation_date'
    ])

    academic.merge(data)

    await academic.save()

    return academic

  }

  /**
   * Delete a academic with id.
   * DELETE academics/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const academic = await Academic.findOrFail(params.id)

    await academic.delete()
  }
}

module.exports = AcademicController
