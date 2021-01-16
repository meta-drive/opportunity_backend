'use strict'

class Interest {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      occupation: 'required|max:80',
      min_salary: 'number',
      max_salary: 'number',
    }
  }
}

module.exports = Interest
