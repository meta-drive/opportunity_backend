'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

Route.post('users', 'UserController.store').validator('User/Store')
Route.post('session', 'SessionController.store')

Route.group(() => {
  Route.get('users', 'UserController.index')
  Route.get('users/:id', 'UserController.show')
  Route.put('users/:id', 'UserController.update').validator('User/Update')

  Route.post('photo', 'PhotoUserController.store')
  Route.get('photo/:user_id', 'PhotoUserController.show')

  Route.resource('users.academics','AcademicController')
  .apiOnly()
  .validator(new Map([[['users.academics.store','users.academics.update'],['Academic']]]))

  Route.resource('companies','CompanyController')
  .apiOnly()
  .validator(new Map([[['companies.store','companies.update'],['Company']]]))

  Route.resource('companies.branches','BranchController')
  .apiOnly()
  .validator(new Map([[['companies.branches.store','companies.branches.update'],['Branch']]]))

}).middleware(['auth'])
