'use strict'

class Challenge {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      competence_id: 'required|integer',
      title: 'required|max:50',
      description: 'required'
    }
  }
}

module.exports = Challenge
