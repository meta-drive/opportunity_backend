'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Emblem = use('App/Models/Emblem')
const Helpers = use('Helpers')
const Drive = use('Drive')

/**
 * Resourceful controller for interacting with emblemas
 */
class EmblemController {

  /**
   * Show a list of all emblemas.
   * GET emblemas
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const emblems = await Emblem.all()

    return emblems
  }

  /**
   * Create/save a new emblema.
   * POST emblemas
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const data = request.only(
      ['title',
       'score',
      ])


    try {
      if (!request.file('file')) return

      const upload = request.file('file', {size: '2mb'})

      const fileName = `${Date.now()}.${upload.subtype}`

      await upload.move(Helpers.tmpPath('uploads'), {
        name: fileName
      })

      if (!upload.moved()) {
        throw upload.error()
      }

      data.image = fileName
      const emblem = await Emblem.create(data)

      return emblem
    } catch (err) {
      return response
        .status(err.status)
        .send({error: {message: 'Erro no upload de arquivo'}})
    }

    return user
  }

  /**
   * Display a single emblema.
   * GET emblemas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const emblem = await Emblem.find(params.id)

    return emblem
  }

  /**
   * Update emblema details.
   * PUT or PATCH emblemas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a emblema with id.
   * DELETE emblemas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }

  async showImage ({ params, response }) {
    const emblem = await Emblem.findOrFail(params.id)

    return response.download(Helpers.tmpPath(`uploads/${emblem.image}`))
  }
}

module.exports = EmblemController
