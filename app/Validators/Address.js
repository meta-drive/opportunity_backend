'use strict'

class UserAddress {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      // education_level
      cep: 'required|max:8',
      description: 'required|max:150',
      number: 'max:8',
      complement: 'max:50',
      city: 'required|max:50',
      neighborhood: 'required|max:50',
      uf: 'required|max:2'
    }
  }
}

module.exports = UserAddress
