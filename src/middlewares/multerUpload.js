const multer = require("multer")

module.exports = (imagefolder, prefix) => {
  let storage = multer.diskStorage({
    destination: (req, file, cb) => {
      let folder = `public/img/${imagefolder}`
      cb(null, folder)
    },
  
    filename: (req, file, cb) => {
      let imageName = prefix + "_" + Date.now() + path.extname(file.originalname) 
      cb(null, imageName)
    }
  })
  
  return multer({storage})
}