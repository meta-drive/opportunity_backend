'use strict'

class Academic {

  get validateAll () {
    return true
  }

  get rules () {
    return {
      // education_level
      institution: 'required|max:100',
      course: 'required|max:50',
      entry_date: 'date',
      graduation_date: 'date'
    }
  }
}

module.exports = Academic
