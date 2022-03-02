const express = require("express")
const app = express()
const path = require("path")

// Definir el motor de templates y la carpeta views
app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))

// Definir la carpeta pública
app.use(express.static(path.join(__dirname, "../public")))

// Configurar el entorno para que éste pueda recibir datos por POST
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// Configurar la librería requerida para usar los métodos PUT y DELETE
const methodOverride = require("method-override")
app.use(methodOverride("_method"))

// Definiendo texto para identificar nuestro sitio web
const session = require("express-session")
app.use(session({
  secret: "Bienvenidos a nuestra librería de libritos :D",
  saveUninitialized: true,
  resave: false,
  // cookie: { secure: true }
}))

// Incluir el middleware para lectura y escritura de galletitas
const cookieParser = require("cookie-parser")
app.use(cookieParser())

// Uso de middleware para usar datos de login en todas las vistas
app.use(async (req, res, next) => {
  const { usersModel } = require("./model")

  if (!req.session.user && req.cookies?.email) {
    let email = req.cookies.email
    req.session.user = await usersModel.getUserBy({email})
    req.session.user.password = null
  }

  res.locals.session = req.session || null
  next()
})

// Requerir y definir las rutas
const { homeRoutes, productsRoutes, usersRoutes } = require("./routes")
const { usersAPIRoutes, productsAPIRoutes } =require("./api/routes")
app.use("/", homeRoutes)
app.use("/products", productsRoutes)
app.use("/users", usersRoutes)
app.use("/api/users/", usersAPIRoutes)
app.use("/api/products/", productsAPIRoutes)


// Renderizar la vista correspondiente al error 404
app.use((req, res) => {
  res.status(404).render("not-found")
})


module.exports = app
