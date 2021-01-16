'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Grade = use('App/Models/Grade')

/**
 * Resourceful controller for interacting with grades
 */
class GradeController {
  /**
   * Show a list of all grades.
   * GET grades
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ params, request, response, view }) {
    const grades = await Grade
    .query()
    .where('subject_id', params.subjects_id)
    .fetch()

    return grades
  }

  /**
   * Create/save a new grade.
   * POST grades
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const data = request.only([
      'subject_id',
      'bimester'
    ])

    const grade = await Grade.create(data)
    return grade
  }

  /**
   * Display a single grade.
   * GET grades/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const grade = await Grade.findOrFail(params.id)

    return grade
  }

  /**
   * Update grade details.
   * PUT or PATCH grades/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const grade = await Grade.findOrFail(params.id)

    const data = request.only([
      'bimester',
    ])

    grade.merge(data)
    await grade.save()
    return grade
  }

  /**
   * Delete a grade with id.
   * DELETE grades/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const grade = await Grade.findOrFail(params.id)

    await grade.delete()
  }
}

module.exports = GradeController
