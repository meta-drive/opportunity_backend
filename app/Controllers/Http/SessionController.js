'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const User = use('App/Models/User')

class SessionController {

    /**
   * Create/save a new session.
   * POST sessions
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ auth, request, response }) {
    const { email, password } = request.all()

    try {
      const token = await auth.attempt(email, password)
      const user = await User.findBy('email', email)

      return response.status(200).json({
        message: 'O login foi efetuado com sucesso!',
        token,
        user
      })
    } catch (err) {
      return response.status(401).json({
        message: 'Não foi possível efetuar login, verifique se as credenciais estão corretas.'
      })
    }
  }
}

module.exports = SessionController
