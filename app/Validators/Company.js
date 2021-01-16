'use strict'

class Company {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      company_name: 'required|max:80',
      occupation_area: 'required|max:80',
    }
  }
}

module.exports = Company
