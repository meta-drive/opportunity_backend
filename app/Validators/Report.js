'use strict'

class Report {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      // validation rules
      year: 'required|integer',
    }
  }
}

module.exports = Report
