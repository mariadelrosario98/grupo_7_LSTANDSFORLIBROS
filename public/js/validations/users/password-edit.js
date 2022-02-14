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