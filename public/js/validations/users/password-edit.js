const form = document.querySelector(".form-register")

const oldPasswordInput = form.old_password
const newPasswordInput = form.new_password
const passwordConfirmInput = form.new_password_confirm

const validOldPassword = () => {
  let oldpassword = oldPasswordInput.value
  if (!oldpassword) return "Por favor ingresa una contraseña"
  if (oldpassword.length < 8) return "Debe tener al menos 8 caracteres"
  return null
}

const validNewPassword = () => {
  let newpassword = newPasswordInput.value
  if (!newpassword) return "Por favor ingresa una contraseña"
  if (newpassword.length < 8) return "Debe tener al menos 8 caracteres"

  const missingCharTypes = []
  const upperCase = /[A-Z]/
  const lowerCase = /[a-z]/
  const numChar = /[0-9]/
  const specialChar = /\W|_/

  if (!upperCase.test(newpassword)) missingCharTypes.push("una mayúscula")
  if (!lowerCase.test(newpassword)) missingCharTypes.push("una minúscula")
  if (!numChar.test(newpassword)) missingCharTypes.push("un número")
  if (!specialChar.test(newpassword)) missingCharTypes.push("un caracter especial")

  if (missingCharTypes.length) return `Debe tener al menos una mayuscula, una minúscula, un número y un caracter especial.\n\nFaltan:\n- ${missingCharTypes.join("\n- ")}`

  return null
}

const validConfirmPassword = () => {
  let newpassword = newPasswordInput.value
  let passwordconfirm = passwordConfirmInput.value
  if (newpassword !== passwordconfirm) return "Contraseñas no coinciden"
  return null
}

const sendFeedback = (element, message) => {
  const feedbackEl = element.nextElementSibling
  if (feedbackEl.innerText === message) return
  feedbackEl.innerText = message
}

oldPasswordInput.addEventListener("input", e => {
  sendFeedback(oldPasswordInput, validOldPassword())
})

newPasswordInput.addEventListener("input", e => {
  sendFeedback(newPasswordInput, validNewPassword())
  sendFeedback(passwordConfirmInput, validConfirmPassword())
})

passwordConfirmInput.addEventListener("input", e => {
  sendFeedback(newPasswordInput, validNewPassword())
  sendFeedback(passwordConfirmInput, validConfirmPassword())
})

form.addEventListener("submit", e => {
  e.preventDefault()
  if (!validOldPassword() && !validNewPassword() && !validConfirmPassword())
    return form.submit()

  sendFeedback(oldPasswordInput, validOldPassword())
  sendFeedback(newPasswordInput, validNewPassword())
  sendFeedback(passwordConfirmInput, validConfirmPassword())
})