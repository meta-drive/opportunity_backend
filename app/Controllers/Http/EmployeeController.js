'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Employee = use('App/Models/Employee')

/**
 * Resourceful controller for interacting with employees
 */
class EmployeeController {
  /**
   * Show a list of all employees.
   * GET employees
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ params, request, response, view }) {
    const employees = await Employee
    .query()
    .where('company_id', params.companies_id)
    .fetch()

    return employees
  }

  /**
   * Create/save a new employee.
   * POST employees
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ params, request, response }) {
    const data = request.only([
      'user_id',
      'occupation',
    ])

    data.company_id = params.companies_id

    const employee = await Employee.create(data)
    return employee
  }

  /**
   * Display a single employee.
   * GET employees/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const employee = await Employee.findOrFail(params.id)

    return employee
  }

  /**
   * Update employee details.
   * PUT or PATCH employees/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const employee = await Employee.findOrFail(params.id)

    const data = request.only([
      'occupation',
    ])

    employee.merge(data)
    await employee.save()
    return employee
  }

  /**
   * Delete a employee with id.
   * DELETE employees/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const employee = await Employee.findOrFail(params.id)

    await employee.delete()
  }
}

module.exports = EmployeeController
