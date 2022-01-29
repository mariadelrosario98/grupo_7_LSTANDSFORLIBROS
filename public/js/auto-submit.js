const form = document.querySelector(`form.auto-submit`)
const input = document.querySelector(`input[type = "file"]`)

input && input.addEventListener("input", e => {
  form.submit()
})