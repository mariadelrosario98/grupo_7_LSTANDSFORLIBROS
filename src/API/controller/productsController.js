const { countProducts, getProductById, getAllProducts } = require("../model/productsModel")

module.exports = {
  async getProducts (req, res){
    try{
      let products = await getAllProducts()
      let count = await countProducts()
      res.json({count, products})
    }
    catch (error){
      console.error(error)
      res.status(500).send(error)
    }
  },
  async getProduct(req, res){
    let id = req.params.id
    try{
      let product = await getProductById(id)
      let genres = await getProductGenresById(id)
      let imagePath = "https://lstandsforlibros.herokuapp.com/img/products/" + product.img_path
      res.json({...product, genres, imagePath})
    }
    catch (error){
      console.error(error)
      res.status(500).send(error)
    }
  }
 }