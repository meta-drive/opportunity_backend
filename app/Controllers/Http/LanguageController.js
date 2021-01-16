'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with languages
 */
class LanguageController {
  /**
   * Show a list of all languages.
   * GET languages
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ params, request, response, view }) {
    const languages = await Language
    .query()
    .where('user_id', params.users_id)
    .fetch()

    return languages
  }

  /**
   * Create/save a new language.
   * POST languages
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ auth, request, response }) {
    const data = request.only([
      'language',
      'level',
    ])

    data.user_id = auth.user.id
    const language = await Language.create(data)
    return language
  }

  /**
   * Display a single language.
   * GET languages/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const language = await Language.findOrFail(params.id)

    return language
  }

  /**
   * Update language details.
   * PUT or PATCH languages/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ auth, params, request, response }) {
    const language = await Language.findOrFail(params.id)

    const data = request.only([
      'language',
      'level',
    ])

    language.merge(data)
    await language.save()
    return language
  }

  /**
   * Delete a language with id.
   * DELETE languages/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const language = await Language.findOrFail(params.id)

    await language.delete()
  }
}

module.exports = LanguageController
