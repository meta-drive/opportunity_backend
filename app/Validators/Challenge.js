'use strict'

class Challenge {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      title: 'required|max:50',
      description: 'required'
    }
  }
}

module.exports = Challenge
