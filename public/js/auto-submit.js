const form = document.querySelector(`form.change-pic`)
const input = document.querySelector(`input[type = "file"]`)

input.addEventListener("input", e => {
  form.submit()
})