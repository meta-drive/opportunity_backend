'use strict'

class Grade {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      bimester: 'required|integer',
    }
  }
}

module.exports = Grade
