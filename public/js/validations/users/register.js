const form = document.querySelector(".form-register")

const firstNameInput = form.first_name
const lastNameInput = form.last_name
const emailInput = form.email
const passwordInput = form.password
const passwordConfirmInput = form.passwordConfirm

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

const validPassword = () => {
  let password = passwordInput.value
  if (!password) return "Por favor ingresa una contraseña"
  if (password.length < 8) return "Debe tener al menos 8 caracteres"

  const missingCharTypes = []
  const upperCase = /[A-Z]/
  const lowerCase = /[a-z]/
  const numChar = /[0-9]/
  const specialChar = /\W|_/

  if (!upperCase.test(password)) missingCharTypes.push("una mayúscula")
  if (!lowerCase.test(password)) missingCharTypes.push("una minúscula")
  if (!numChar.test(password)) missingCharTypes.push("un número")
  if (!specialChar.test(password)) missingCharTypes.push("un caracter especial")

  if (missingCharTypes.length) {
    let output = "Debe tener al menos una mayuscula, una minúscula, un número y un caracter especial.\n\n"
    output += `Faltan:\n- ${missingCharTypes.join("\n- ")}`
    return output
  }

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

form.addEventListener("submit", e => {
  e.preventDefault()
  if (!validFirstName() && !validLastName() && !validEmail() && !validPassword() && !validConfirmPassword())
    return form.submit()

  sendFeedback(firstNameInput, validFirstName())
  sendFeedback(lastNameInput, validLastName())
  sendFeedback(emailInput, validEmail())
  sendFeedback(passwordInput, validPassword())
  sendFeedback(passwordConfirmInput, validConfirmPassword())
})