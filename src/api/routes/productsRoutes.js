const express = require("express")
const router = express.Router()
const cors = require("cors")
const { getProducts, getProduct } = require("../controller/productsController")

router.use(cors())

router.get("/", getProducts)
router.get("/:id", getProduct)

module.exports = router
