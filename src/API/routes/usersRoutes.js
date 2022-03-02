const express = require("express")
const router = express.Router()
const { getUsers, getUser } = require("../controller/usersController")

router.get("/", getUsers)
router.get("/:id",getUser)

module.exports = router