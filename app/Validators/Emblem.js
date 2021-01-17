'use strict'

class Emblem {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      title: 'required|max:40',
      score: 'integer'
    }
  }
}

module.exports = Emblem
