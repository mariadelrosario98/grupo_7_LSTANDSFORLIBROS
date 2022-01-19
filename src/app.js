const express = require("express")
const app = express()
const path = require("path")

//* Definir el motor de templates y la carpeta views
app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))

//* Definir la carpeta pública
app.use(express.static(path.join(__dirname, "public")))

//* Configurar el entorno para que éste pueda recibir datos por POST
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

//* Configurar la librería requerida para usar los métodos PUT y DELETE
const methodOverride = require("method-override")
app.use(methodOverride("_method"))

//* Definiendo texto para identificar nuestro sitio web
const session = require("express-session")
app.use(session({
  secret: "Bienvenidos a nuestra librería de libritos :D",
  saveUninitialized: true,
  resave: false,
  //cookie: { secure: true }
}))

//* Incluir el middleware para lectura y escritura de galletitas
const cookieParser = require("cookie-parser")
app.use(cookieParser())

//* Uso de librería para encriptación
const bcrypt = require("bcryptjs")
let encryptedPassword = bcrypt.hashSync("123456", 10)
// console.log(encryptedPassword);
let check = bcrypt.compareSync("123456", encryptedPassword)
// console.log(check);

//* Uso de middleware para usar datos de login en todas las vistas
const { loginData } = require("./middlewares")
app.use((req, res, next) => {
  const { usersDB } = require("./data")

  if (req.cookies?.email)
    req.session.user = usersDB.find(element => element.email === req.cookies.email)

  res.locals.session = req.session || null
  next()
})

//* Requerir y definir las rutas
const { homeRoutes, productsRoutes, usersRoutes } = require("./routes")
app.use("/", homeRoutes)
app.use("/products", productsRoutes)
app.use("/users", usersRoutes)

//* Renderizar la vista correspondiente al error 404
app.use((req, res) => {
  res.status(404).render("not-found")
})


module.exports = app
