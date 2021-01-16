'use strict'

class Subject {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      name: 'required|max:50',
    }
  }
}

module.exports = Subject
