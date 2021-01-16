'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Branch = use('App/Models/Branch')
const Company = use('App/Models/Company')

/**
 * Resourceful controller for interacting with branches
 */
class BranchController {
   /**
   * Show a list of all branches.
   * GET branches
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ params, request, response, view }) {
    const branches = await Branch
      .query()
      .with('company')
      .where('company_id', params.companies_id)
      .fetch()

    return branches
  }

  /**
   * Create/save a new branch.
   * POST branches
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ params, request, response }) {
    const data = request.only([
      // 'address_id',
      'cnpj',
      'phone',
      'email',
      'is_matrix',
    ])

    data.company_id = params.companies_id

    const  branch = await Branch.create(data)

    return branch
  }

  /**
   * Display a single branch.
   * GET branches/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const branch = await Branch.findOrFail(params.id)
    await branch.load('company')

    return branch
  }

  /**
   * Update branch details.
   * PUT or PATCH branches/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const branch = await Branch.findOrFail(params.id)

    const data = request.only([
      'cnpj',
      'phone',
      'email',
      'is_matrix',
    ])

    branch.merge(data)
    await branch.save()

    return branch
  }

  /**
   * Delete a branch with id.
   * DELETE branches/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const branch = await Branch.findOrFail(params.id)

    await branch.delete()
  }
}

module.exports = BranchController
