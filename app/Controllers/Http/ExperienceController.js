'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Experience = use('App/Models/Experience')

/**
 * Resourceful controller for interacting with experiences
 */
class ExperienceController {
  /**
   * Show a list of all experiences.
   * GET experiences
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ params, auth, request, response, view }) {
    const experiences = await Experience
      .query()
      .where('user_id', params.users_id)
      .fetch()

    return experiences
  }


  /**
   * Create/save a new experience.
   * POST experiences
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ auth, params, request, response }) {
    const data = request.only([
      'modality',
      'occupation',
      'activities',
      'company_name',
      'entry_date',
      'final_date',
    ])

    data.user_id = auth.user.id
    const experience = await Experience.create(data)
    return experience
  }

  /**
   * Display a single experience.
   * GET experiences/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const experience = await Experience.findOrFail(params.id)
    await experience.load('user')
    return experience
  }

  /**
   * Update experience details.
   * PUT or PATCH experiences/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const experience = await Experience.findOrFail(params.id)

    const data = request.only([
      'modality',
      'occupation',
      'activities',
      'company_name',
      'entry_date',
      'final_date',
    ])

    experience.merge(data)
    await experience.save()
    return experience
  }

  /**
   * Delete a experience with id.
   * DELETE experiences/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const experience = await Experience.findOrFail(params.id)

    await experience.delete()
  }
}

module.exports = ExperienceController
