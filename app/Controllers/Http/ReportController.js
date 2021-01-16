'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Report = use('App/Models/Report')

/**
 * Resourceful controller for interacting with reports
 */
class ReportController {
  /**
   * Show a list of all reports.
   * GET reports
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ params, request, response, view }) {
    const reports = await Report
    .query()
    .where('user_id', params.users_id)
    .fetch()

    return reports
  }

  /**
   * Create/save a new report.
   * POST reports
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ auth, request, response }) {
    const data = request.only([
      'year',
    ])

    data.user_id = await auth.user.id
    const report = await Report.create(data)
    return report
  }

  /**
   * Display a single report.
   * GET reports/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const report = await Report.findOrFail(params.id)

    return report
  }

  /**
   * Update report details.
   * PUT or PATCH reports/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const report = await Report.findOrFail(params.id)

    const data = request.only([
      'year',
    ])

    report.merge(data)
    await report.save()
    return report
  }

  /**
   * Delete a report with id.
   * DELETE reports/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const report = await Report.findOrFail(params.id)

    await report.delete()
  }
}

module.exports = ReportController
