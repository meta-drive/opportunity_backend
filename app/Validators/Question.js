'use strict'

class Question {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      description: 'required',
    }
  }
}

module.exports = Question
