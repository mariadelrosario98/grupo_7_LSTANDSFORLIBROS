const form = document.querySelector(".form-register")

const firstNameInput = form.first_name
const lastNameInput = form.last_name
const emailInput = form.email


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

//todo: No puede repetirse con los e-mails ya registrados
const validEmail = () => {
  let email = emailInput.value
  if (!email) return "Por favor ingresa tu dirección de correo electrónico"
  if (!validator.isEmail(email)) return "Email inválido"
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


form.addEventListener("submit", e => {
  e.preventDefault()
  if (!validFirstName() && !validLastName() && !validEmail())
    return form.submit()

  sendFeedback(firstNameInput, validFirstName())
  sendFeedback(lastNameInput, validLastName())
  sendFeedback(emailInput, validEmail())
})