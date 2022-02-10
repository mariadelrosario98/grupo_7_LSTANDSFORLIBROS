const firstNameInput = document.querySelector("#first_name")
const lastNameInput = document.querySelector("#last_name")
const emailInput = document.querySelector("#email")
const passwordInput = document.querySelector("#password")
const passwordConfirmInput = document.querySelector("#passwordConfirm")

const form = document.querySelector(".form-register")
const submitBtn = document.querySelector(`.form-register input[type="submit"]`)

const validFirstName = () => {
  let firstName = firstNameInput.value
  if (!firstName) return "Por favor ingresa tu nombre"
  if (firstName.length < 2) return "Debe tener al menos 2 caracteres"
  return null
}

const validLastName = () => {
  let lastName = lastNameInput.value
  if (!lastName) return "Por favor ingresa tu apellido"
  if (lastName.length < 2) return "Debe tener al menos 2 caracteres"
  return null
}

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

const validConfirmPassword = () => {
  let password = passwordInput.value
  let confirm = passwordConfirmInput.value
  if (password !== confirm) return "Contraseñas no coinciden"
  return null
}

const sendFeedback = (element, message) => {
  const feedbackEl = element.nextElementSibling
  if (feedbackEl.innerText === message) return
  feedbackEl.innerText = message
}


firstNameInput.addEventListener("input", e => {
  sendFeedback(firstNameInput, validFirstName())
})

lastNameInput.addEventListener("input", e => {
  sendFeedback(lastNameInput, validLastName())
})

emailInput.addEventListener("input", e => {
  sendFeedback(emailInput, validEmail())
})

passwordInput.addEventListener("input", e => {
  sendFeedback(passwordInput, validPassword())
  sendFeedback(passwordConfirmInput, validConfirmPassword())
})

passwordConfirmInput.addEventListener("input", e => {
  sendFeedback(passwordInput, validPassword())
  sendFeedback(passwordConfirmInput, validConfirmPassword())
})

submitBtn.addEventListener("click", e => {
  e.preventDefault()
  if (!validFirstName() && !validLastName() && !validEmail() && !validPassword() && !validConfirmPassword())
    return form.submit()

  sendFeedback(firstNameInput, validFirstName())
  sendFeedback(lastNameInput, validLastName())
  sendFeedback(emailInput, validEmail())
  sendFeedback(passwordInput, validPassword())
  sendFeedback(passwordConfirmInput, validConfirmPassword())
})