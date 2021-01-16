'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Subject = use('App/Models/Subject')

/**
 * Resourceful controller for interacting with subjects
 */
class SubjectController {
 /**
   * Show a list of all subjects.
   * GET subjects
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ params, request, response, view }) {
    const subjects = await Subject
    .query()
    .where('report_id', params.reports_id)
    .fetch()

    return subjects
  }

  /**
   * Create/save a new subject.
   * POST subjects
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const data = request.only([
      'report_id',
      'name'
    ])

    const subject = await Subject.create(data)
    return subject
  }

  /**
   * Display a single subject.
   * GET subjects/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const subject = await Subject.findOrFail(params.id)

    return subject
  }

  /**
   * Update subject details.
   * PUT or PATCH subjects/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const subject = await Subject.findOrFail(params.id)

    const data = request.only([
      'name',
    ])

    subject.merge(data)
    await subject.save()
    return subject
  }

  /**
   * Delete a subject with id.
   * DELETE subjects/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const subject = await Subject.findOrFail(params.id)

    await subject.delete()
  }
}

module.exports = SubjectController
