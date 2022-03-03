const express = require("express")
const router = express.Router()
const cors = require("cors")
const { getUsers, getUser } = require("../controller/usersController")

router.use(cors())

router.get("/", getUsers)
router.get("/:id",getUser)

module.exports = router
