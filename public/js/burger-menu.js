const burgerBtn = document.querySelector("#burger-menu")
const logoutItem = document.querySelector("li#logout-item")
const logoutForm = document.querySelector("form#logout-form")

burgerBtn.addEventListener("click", () => {
  document.querySelector("ul.menu-list").classList.toggle("list-show")
})

logoutItem.addEventListener("click", () => {
  logoutForm.submit()
})

