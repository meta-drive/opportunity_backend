'use strict'

class UserStore {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      username: 'required|max:80',
      email: 'required|email|unique:users|max:254',
      password: 'required|max:60',
      birth_date: 'required|date',
      description: 'required|max:500',
      phone: 'required|max:15',
      // genre
      photo: 'max:255',
      // marital_status,
      goals: 'max:300',
      facebook: 'max:150',
      instagram: 'max:150',
      is_pcd: 'boolean'
    }
  }
}

module.exports = UserStore
