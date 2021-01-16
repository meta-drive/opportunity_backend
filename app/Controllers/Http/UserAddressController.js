'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const User = use('App/Models/User')
const UserAddress = use('App/Models/UserAddress')

/**
 * Resourceful controller for interacting with useraddresses
 */
class UserAddressController {

    /**
   * Show a list of all addresses.
   * GET addresses
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ params, request, response, view }) {
    const addresses = await UserAddress
      .query()
      .where('user_id', params.users_id)
      .fetch()

    return addresses
  }

  /**
   * Create/save a new useraddress.
   * POST useraddresses
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ auth, request, response }) {
    const user = await User.findOrFail(auth.user.id)
    await user.load('address')
    const currentAddress = await user.getRelated('address')

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

    const address = await user.address().create(data)

    return address
  }

  /**
   * Update useraddress details.
   * PUT or PATCH useraddresses/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ auth, params, request, response }) {
    const user = await User.findOrFail(auth.user.id)
    await user.load('address')
    const address = await user.getRelated('address')

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

    if ( params.users_id != auth.user.id ) {
      return response.status(401).send({error: 'Not authorized'})
    }

    address.merge(data)
    await address.save()

    return address
  }

    /**
   * Display a single address.
   * GET addresses/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const address = await UserAddress.findOrFail(params.id)

    return address
  }

  /**
   * Delete a useraddress with id.
   * DELETE useraddresses/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ auth, params, request, response }) {
    const address = await UserAddress
      .query()
      .where('id', params.id)
      .where('user_id', params.users_id)
      .first()

    if (address === null) {
      return response.status(404).send({error: 'Does not found'})
    }

    if ( params.users_id != auth.user.id ) {
      return response.status(401).send({error: 'Not authorized'})
    }

    await address.delete()
  }
}

module.exports = UserAddressController
