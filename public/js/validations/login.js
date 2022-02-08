const emailInput = document.querySelector("#email")
const passwordInput = document.querySelector("#password")

const form = document.querySelector(".form-login")
const submitBtn = document.querySelector(`.form-login input[type="submit"]`)

const validEmail = () => {
  let email = emailInput.value
  if (!email) return "Por favor ingresa tu dirección de correo electrónico"
  if (!validator.isEmail(email)) return "Email inválido"
  return null
}

const validPassword = () => {
  let password = passwordInput.value
  if (!password) return "Por favor ingresa una contraseña"
  if (password.length < 8) return "Debe tener al menos 8 caracteres"
  return null
}

const sendFeedback = (element, message) => {
  const feedbackEl = element.nextElementSibling
  if (feedbackEl.innerText === message) return
  feedbackEl.innerText = message
}

emailInput.addEventListener("input", e => {
  sendFeedback(emailInput, validEmail())
})

passwordInput.addEventListener("input", e => {
  sendFeedback(passwordInput, validPassword())
})

submitBtn.addEventListener("click", e => {
  e.preventDefault()
  if (!validFirstName() && !validLastName() && !validEmail() && !validPassword() && !validConfirmPassword())
    return form.submit()

  sendFeedback(emailInput, validEmail())
  sendFeedback(passwordInput, validPassword())
})