'use strict'

class Employee {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      occupation: 'required|max:80',
    }
  }
}

module.exports = Employee
