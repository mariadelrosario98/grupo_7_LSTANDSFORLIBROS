const {getAllUsers,getUserById, countUsers} = require("../model/usersModel")

module.exports= {
  async getUsers (req, res){
    try{
      let users = await getAllUsers()
      let count = await countUsers()
      res.json({count, users})
    }
    catch (error){
      console.error(error)
      res.status(500).send(error)
    }
  },
  async getUser(req, res){
    let id = req.params.id
    try{
      let user = await getUserById(id)
      let imagePath = "https://lstandsforlibros.herokuapp.com/img/users/" + user.img_path
      res.json({...user, imagePath})
    }
    catch (error){
      console.error(error)
      res.status(500).send(error)
    }
  }
}