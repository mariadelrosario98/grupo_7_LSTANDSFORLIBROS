const {getAllUsers,getUserById, countUsers} = require("../model/usersModel")

module.exports= {
  async getUsers (req, res){
    const page = parseInt(req.query.page) || 1

    try{
      const count = await countUsers()
      const users = await getAllUsers(page)

      const pageLinks = {}
      const totalPagesAmount = Math.ceil(count / 10)
      if (page < totalPagesAmount) pageLinks.next = `${req.protocol}://${req.hostname}/api/users?page=${page + 1}`
      if (page > 1) pageLinks.previous = `${req.protocol}://${req.hostname}/api/users?page=${page - 1}`

      res.json({
        count, 
        users: users.map(user => {
          user.dataValues.detail = "https://lstandsforlibros.herokuapp.com/users/" + user.id
          return user.dataValues
        }),
        ...pageLinks
      })
    }
    catch (error){
      console.error(error)
      res.status(500).send(error)
    }
  },

  async getUser(req, res){
    const id = req.params.id
    try{
      const user = await getUserById(id)
      user.img_path = "https://lstandsforlibros.herokuapp.com/img/users/" + user.img_path
      res.json(user)
    }
    catch (error){
      console.error(error)
      res.status(500).send(error)
    }
  }
}