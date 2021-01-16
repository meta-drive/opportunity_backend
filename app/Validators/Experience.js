'use strict'

class Experience {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      occupation: 'required|max:80',
      activities: 'required|max:80',
      company_name: 'required|max:80',
      entry_date: 'required|date',
      final_date: 'date',
    }
  }
}

module.exports = Experience
