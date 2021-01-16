'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const BranchAddress = use('App/Models/BranchAddress')
const Branch = use('App/Models/Branch')

/**
 * Resourceful controller for interacting with branchaddresses
 */
class BranchAddressController {
  /**
   * Show a list of all branchaddresses.
   * GET branchaddresses
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ params, request, response, view }) {
    const addresses = await BranchAddress
      .query()
      .where('branch_id', params.branches_id)
      .fetch()

    return addresses
  }

  /**
   * Create/save a new branchaddress.
   * POST branchaddresses
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ params, request, response }) {
    const branch = await Branch.findOrFail(params.branches_id)
    await branch.load('address')
    const currentAddress = await branch.getRelated('address')

    if (currentAddress != null) {
      return response.status(400).send({error: 'Already exists'})
    }

    const data = await request.only([
      'cep',
      'description',
      'number',
      'complement',
      'city',
      'neighborhood',
      'uf',
    ])

    const address = await branch.address().create(data)

    return address
  }

  /**
   * Display a single branchaddress.
   * GET branchaddresses/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const address = await BranchAddress.findOrFail(params.id)

    return address
  }

  /**
   * Update branchaddress details.
   * PUT or PATCH branchaddresses/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const branch = await Branch.findOrFail(params.branches_id)
    await branch.load('address')
    const address = await branch.getRelated('address')

    if (address === null) {
      return response.status(404).send({error: 'Not found'})
    }

    const data = await request.only([
      'cep',
      'description',
      'number',
      'complement',
      'city',
      'neighborhood',
      'uf',
    ])

    address.merge(data)
    await address.save()

    return address
  }

  /**
   * Delete a branchaddress with id.
   * DELETE branchaddresses/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const address = await BranchAddress
      .query()
      .where('id', params.id)
      .where('branch_id', params.branches_id)
      .first()

    if (address === null) {
      return response.status(404).send({error: 'Does not found'})
    }

    await address.delete()
  }
}

module.exports = BranchAddressController
