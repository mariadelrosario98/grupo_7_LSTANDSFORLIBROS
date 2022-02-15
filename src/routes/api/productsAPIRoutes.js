const express = require("express")
const router = express.Router()
const { productsAPIController } = require("../../controller/api")
const { multerUpload, redirects, errors, validation } = require("../../middlewares")




module.exports = router