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
Route.get('photo/:user_id', 'PhotoUserController.show')
Route.get('emblem/:id', 'EmblemController.showImage')

Route.group(() => {
  Route.get('users', 'UserController.index')
  Route.get('users/:id', 'UserController.show')
  Route.put('users/:id', 'UserController.update').validator('User/Update')

  Route.post('photo', 'PhotoUserController.store')

  Route.resource('users.academics','AcademicController')
  .apiOnly()
  .validator(new Map([[['users.academics.store','users.academics.update'],['Academic']]]))

  Route.resource('emblems','EmblemController')
  .apiOnly()
  .validator(new Map([[['emblems.store','emblems.update'],['Emblem']]]))

  Route.resource('companies','CompanyController')
  .apiOnly()
  .validator(new Map([[['companies.store','companies.update'],['Company']]]))

  Route.resource('companies.branches','BranchController')
  .apiOnly()
  .validator(new Map([[['companies.branches.store','companies.branches.update'],['Branch']]]))

  Route.resource('users.experiences', 'ExperienceController')
  .apiOnly()
  .validator(new Map([[['users.experiences.store','users.experiences.update'],['Experience']]]))

  Route.resource('companies.employees', 'EmployeeController')
  .apiOnly()
  .validator(new Map([[['companies.employees.store','companies.employees.update'],['Employee']]]))

  Route.resource('users.interests', 'InterestController')
  .apiOnly()
  .validator(new Map([[['users.interests.store','users.interests.update'],['Interest']]]))


  Route.resource('users.languages', 'LanguageController')
  .apiOnly()
  .validator(new Map([[['users.languages.store','users.languages.update'],['Language']]]))

  Route.resource('users.reports', 'ReportController')
  .apiOnly()
  .validator(new Map([[['users.reports.store','users.reports.update'],['Report']]]))

  Route.resource('users.addresses', 'UserAddressController')
  .apiOnly()
  .validator(new Map([[['users.addresses.store','users.addresses.update'],['Address']]]))

  Route.resource('branches.addresses', 'BranchAddressController')
  .apiOnly()
  .validator(new Map([[['branches.addresses.store','branches.addresses.update'],['Address']]]))

  // Route.resource('users.reports', 'ReportController')
  // .apiOnly()
  // .validator(new Map([[['users.reports.store','users.reports.update'],['Report']]]))

  Route.resource('reports.subjects', 'SubjectController')
  .apiOnly()
  .validator(new Map([[['reports.subjects.store','reports.subjects.update'],['Subject']]]))

  Route.resource('subjects.grades', 'GradeController')
  .apiOnly()
  .validator(new Map([[['subjects.grades.store','subjects.grades.update'],['Grade']]]))

  Route.resource('competences', 'CompetenceController')
  .apiOnly()
  .validator(new  Map([[['competences.store','competences.update'],['Competence']]]))

  Route.resource('companies.challenges', 'CompanyChallengeController')
  .apiOnly()
  .validator(new  Map([[['companies.challenges.store','companies.challenges.update'],['Challenge']]]))

  Route.resource('challenges.questions', 'QuestionController')
  .apiOnly()
  .validator(new  Map([[['challenges.questions.store','challenges.questions.update'],['Question']]]))

}).middleware(['auth'])


Route.get('challenges', 'ChallengeController.index');
Route.get('challenges/:id', 'ChallengeController.show');

Route.group(() => {
  Route.post('occupations', 'OccupationController.store')
  Route.put('occupations/:id', 'OccupationController.update')
  Route.get('occupations', 'OccupationController.index')
  Route.get('occupations/:id', 'OccupationController.show')
  Route.delete('occupations/:id', 'OccupationController.destroy')
}).middleware(['auth'])

Route.get('vacancies', 'VacancyController.index')
Route.get('vacancies/:id', 'VacancyController.show')

Route.group(() => {
  Route.post('vacancies', 'VacancyController.store')
  Route.put('vacancies/:id', 'VacancyController.update')
  Route.delete('vacancies/:id', 'VacancyController.destroy')
}).middleware(['auth'])
