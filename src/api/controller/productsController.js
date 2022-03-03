const { countProducts, getProductById, getAllProducts, getGenresData, getProductGenresById } = require("../model/productsModel")

module.exports = {
  async getProducts (req, res){
    const page = parseInt(req.query.page) || 1

    try{
      const count = await countProducts()
      const countByGenre = {}
      const products = await getAllProducts(page)

      const genresData = await getGenresData()
      genresData.forEach(item => {
        const genreName = item.dataValues.genre.name
        if (!countByGenre[genreName]) countByGenre[genreName] = 0
        countByGenre[genreName]++
      })

      const pageLinks = {}
      const totalPagesAmount = Math.ceil(count / 10)
      if (page < totalPagesAmount) pageLinks.next = `${req.protocol}://${req.hostname}/api/products?page=${page + 1}`
      if (page > 1) pageLinks.previous = `${req.protocol}://${req.hostname}/api/products?page=${page - 1}`

      res.json({
        count,
        countByGenre,
        products: products.map(product => {
          product.dataValues.genres = genresData
            .filter(item => item.dataValues.product_id === product.dataValues.id)
            .map(item => item.dataValues.genre.name)

          product.dataValues.detail = "https://lstandsforlibros.herokuapp.com/products/" + product.id
          
          return product.dataValues
        }),
        ...pageLinks
      })
    } catch (error){
      console.error(error)
      res.status(500).send(error)
    }
  },

  async getProduct(req, res){
    const id = req.params.id
    try{
      const product = await getProductById(id)
      const genreValues = await getProductGenresById(product.id)
      const genres = genreValues.map(item => item.dataValues.genre.name)
      const img_path = "https://lstandsforlibros.herokuapp.com/img/products/" + product.img_path
      res.json({...product.dataValues, genres, img_path})
    } catch (error){
      console.error(error)
      res.status(500).send(error)
    }
  }
}
