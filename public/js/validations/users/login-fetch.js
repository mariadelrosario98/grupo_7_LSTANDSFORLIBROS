const form = document.querySelector(".form-login")

const emailInput = form.email
const passwordInput = form.password

let isValid = false

//todo: Deberá existir en la base de datos
const validEmail = async () => {
  isValid = false

  let email = emailInput.value
  if (!email) return "Por favor ingresa tu dirección de correo electrónico"
  if (!validator.isEmail(email)) return "Email inválido"

  let res = await fetch("../api/users/exists", {
    method: "POST",
    body: JSON.stringify({ email }),
    headers:{ 'Content-Type': 'application/json' }
  })
  let exists = await res.json()

  if (!exists) return "Email no se encuentra registrado"
  isValid = true
  return null
}

const validPassword = () => {
  isValid = false
  
  let password = passwordInput.value
  if (!password) return "Por favor ingresa una contraseña"
  if (password.length < 8) return "Debe tener al menos 8 caracteres"
  isValid = true
  return null
}

const sendFeedback = (element, message) => {
  const feedbackEl = element.nextElementSibling
  if (feedbackEl.innerText === message) return
  feedbackEl.innerText = message
}

emailInput.addEventListener("input", async e => {
  sendFeedback(emailInput, await validEmail())
})

passwordInput.addEventListener("input", e => {
  sendFeedback(passwordInput, validPassword())
})

form.addEventListener("submit", async e => {
  e.preventDefault()
  let isEmailValid = await validEmail()

  if (!isEmailValid && !validPassword())
    return form.submit()

  sendFeedback(emailInput, isEmailValid)
  sendFeedback(passwordInput, validPassword())
})