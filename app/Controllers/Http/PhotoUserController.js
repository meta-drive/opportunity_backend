'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const User = use('App/Models/User')
const Helpers = use('Helpers')
const Drive = use('Drive')

/**
 * Resourceful controller for interacting with photos
 */
class PhotoUserController {

  async show ({ params, response }) {
    const user = await User.findOrFail(params.user_id)

    return response.download(Helpers.tmpPath(`uploads/${user.photo}`))
  }

  /**
   * Create/save a new photouser.
   * POST photousers
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ auth, request, response }) {
    try {
      const user = await auth.getUser()
      if (!request.file('file')) return

      const currentPhoto = user.photo

      const upload = request.file('file', {size: '2mb'})

      const fileName = `${Date.now()}.${upload.subtype}`

      await upload.move(Helpers.tmpPath('uploads'), {
        name: fileName
      })

      if (!upload.moved()) {
        throw upload.error()
      }

      user.merge({photo: fileName})
      await user.save()

      if (currentPhoto != null) {
        await Drive.delete(`uploads/${currentPhoto}`)
      }

      return user
    } catch (err) {
      return response
        .status(err.status)
        .send({error: {message: 'Erro no upload de arquivo'}})
    }
  }

}

module.exports = PhotoUserController
