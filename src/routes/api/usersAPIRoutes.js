const express = require("express")
const router = express.Router()
const { usersAPIController } = require("../../controller/api")
const { multerUpload, redirects, errors, validation } = require("../../middlewares")

router.post("/exists", usersAPIController.exists)

module.exports = router