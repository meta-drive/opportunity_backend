'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Company = use('App/Models/Company')

/**
 * Resourceful controller for interacting with companies
 */
class CompanyController {
  /**
   * Show a list of all companies.
   * GET companies
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const companies = Company.query().with('branches').fetch()

    return companies
  }

  /**
   * Create/save a new company.
   * POST companies
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const data = request.only([
      'company_name',
      'occupation_area'
    ])

    const company = Company.create(data)

    return company
  }

  /**
   * Display a single company.
   * GET companies/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const company = await Company.findOrFail(params.id)

    await company.load('branches')

    return company
  }

  /**
   * Update company details.
   * PUT or PATCH companies/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const company = await Company.findOrFail(params.id)

    const data = request.only([
      'company_name',
      'occupation_area'
    ])

    company.merge(data)
    await company.save()

    return company
  }

  /**
   * Delete a company with id.
   * DELETE companies/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {

  }
}

module.exports = CompanyController
