'use strict'

class Branch {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      cnpj: 'required|max:14|unique:branches',
      phone: 'required|max:15',
      email: 'required|max:100|email',
      is_matrix: 'required|boolean',
    }
  }
}

module.exports = Branch
