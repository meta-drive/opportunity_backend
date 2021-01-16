'use strict'

class Language {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      language: 'required|max:40',
      // level: 'required|max:80',
    }
  }
}

module.exports = Language
