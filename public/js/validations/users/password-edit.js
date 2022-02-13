const form = document.querySelector(".form-register")

const oldPassword = form.old_password
const newPassword = form.new_password
const passwordConfirmInput = form.new_password_confirm

const validOldPassword = () => {
  let oldpassword = old_password.value
  if (!oldpassword) return "Por favor ingresa una contraseña"
  if (oldpassword.length < 8) return "Debe tener al menos 8 caracteres"
  return null
}

const validNewPassword = () => {
  let newpassword = new_password.value
  if (!newpassword) return "Por favor ingresa una contraseña"
  if (newpassword.length < 8) return "Debe tener al menos 8 caracteres"
  return null
}

const validConfirmPassword = () => {
  let newpassword = new_password.value
  let passwordconfirm = passwordConfirmInput.value
  if (new_password !== passwordConfirmInput) return "Contraseñas no coinciden"
  return null
}

const sendFeedback = (element, message) => {
  const feedbackEl = element.nextElementSibling
  if (feedbackEl.innerText === message) return
  feedbackEl.innerText = message
}

old_password.addEventListener("input", e => {
  sendFeedback(old_password, validOldPassword())
})

new_password.addEventListener("input", e => {
  sendFeedback(new_password, validNewPassword())
  sendFeedback(new_password_confirm, validConfirmPassword())
})

new_password_confirm.addEventListener("input", e => {
  sendFeedback(new_password, validNewPassword())
  sendFeedback(new_password_confirm, validConfirmPassword())
})

form.addEventListener("submit", e => {
  e.preventDefault()
  if (!validOldPassword() && !validNewPassword() && !validConfirmPassword())
    return form.submit()

  sendFeedback(oldpassword, validOldPassword())
  sendFeedback(new_password, validNewPassword())
  sendFeedback(passwordConfirmInput, validConfirmPassword())
})