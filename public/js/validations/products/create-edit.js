const bookInput = document.querySelector("#name")
const authorInput = document.querySelector("#author")
const isbnInput = document.querySelector("#isbn")
const houseInput = document.querySelector("#house")
const priceInput = document.querySelector("#price")
const descriptionInput = document.querySelector("#description")

const form = document.querySelector(".form-register")
const submitBtn = document.querySelector(`.form-register input[type="submit"]`)

const validBookName = () => {
  let bookname = bookInput.value
  if (!bookname) return "Por favor ingresa el nombre del libro"
  if (bookname.length < 5) return "Debe tener al menos 5 caracteres"
  return null
}

const validAuthor = () => {
  let author = authorInput.value
  if (!author) return "Por favor ingresa el autor del libro"
  if (author.length < 2) return "Debe tener al menos 2 caracteres"
  return null
}

const validIsbn = () => {
  let isbn = isbnInput.value
  if (!isbn) return "Por favor ingresa el código del libro"
  if (!validator.isISBN(isbn)) return "Por favor ingresa un código válido"
  return null
}

const validHouse = () => {
  let house = houseInput.value
  if (!house) return "Por favor ingresa la editorial del texto"
  if (house.length < 2) return "Debe tener al menos 2 caracteres"
  return null
}

const validPrice = () => {
  let price = priceInput.value
  if (!price) return "Por favor ingresa un precio"
  return null
}

const validDescription = () => {
  let description = descriptionInput.value
  if (!description) return "Por favor ingresa una descripción"
  if (description.length < 20) return "Debe tener al menos 20 caracteres"
  return null
}

const sendFeedback = (element, message) => {
  const feedbackEl = element.nextElementSibling
  if (feedbackEl.innerText === message) return
  feedbackEl.innerText = message
}


bookInput.addEventListener("input", e => {
  sendFeedback(bookInput, validBookName())
})

authorInput.addEventListener("input", e => {
  sendFeedback(authorInput, validAuthor())
})

isbnInput.addEventListener("input", e => {
  sendFeedback(isbnInput, validIsbn())
})

houseInput.addEventListener("input", e => {
  sendFeedback(houseInput, validHouse())
})

priceInput.addEventListener("input", e => {
  sendFeedback(priceInput, validPrice())
})

descriptionInput.addEventListener("input", e => {
  sendFeedback(descriptionInput, validDescription())
})

submitBtn.addEventListener("click", e => {
  e.preventDefault()
  if (!validBookName() && !validAuthor() && !validIsbn()  && !validHouse() && !validPrice() && !validDescription())
    return form.submit()

  sendFeedback(bookInput, validBookName())
  sendFeedback(authorInput, validAuthor())
  sendFeedback(isbnInput, validIsbn())
  sendFeedback(houseInput, validHouse())
  sendFeedback(priceInput, validPrice())
  sendFeedback(descriptionInput, validDescription())

})