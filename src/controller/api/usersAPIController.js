const fs = require('fs')
const path = require('path')
const bcrypt = require('bcryptjs')
const { usersModel } = require("../../model")

const controller = {
  async exists(req, res) {
    let email = req.body.email
    let user = await usersModel.getUserBy({email})
    res.json(!!user)
  }
}


module.exports = controller