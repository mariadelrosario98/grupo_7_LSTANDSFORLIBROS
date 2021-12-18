const multer = require("multer")

const multerUpload = (imageFolder, prefix) => {
  let storage = multer.diskStorage({
    destination: (req, file, cb) => {
      let folder = "public/img/" + imageFolder
      cb(null, folder)
    },
  
    filename: (req, file, cb) => {
      let imageName = prefix + "_" + Date.now() + path.extname(file.originalname) 
      cb(null, imageName)
    }
  })
  
  return multer({storage})
}

module.exports = multerUpload