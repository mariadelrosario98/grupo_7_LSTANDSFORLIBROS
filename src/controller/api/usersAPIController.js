const fs = require('fs')
const path = require('path')
const bcrypt = require('bcryptjs')
const { usersModel } = require("../../model")

const controller = {
  async findUserByEmail(email) {
    let user = await usersModel.getUserBy({email})
  }
}


module.exports = controller