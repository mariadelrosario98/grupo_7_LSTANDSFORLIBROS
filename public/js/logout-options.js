const logoutForm = document.querySelector("form#logout-form")
const burgerMenuBtn = document.querySelector("#burger-menu")
const logoutItemOnBurgerMenu = document.querySelector("li#logout-item")
const logoutIcon = document.querySelector(".logout-icon")
const logoutPopup = document.querySelector(".logout-screen")
const logoutPopupYes = document.querySelector(".logout-screen--yes")
const logoutPopupNo = document.querySelector(".logout-screen--no")

const showPopup = () => logoutPopup.classList.add("logout-screen--shown")

const toggleBurgerMenu = () => document.querySelector("ul.menu-list").classList.toggle("list-show")

burgerMenuBtn?.addEventListener("click", toggleBurgerMenu)

logoutItemOnBurgerMenu?.addEventListener("click", () => {
  showPopup()
  toggleBurgerMenu()
})

logoutIcon?.addEventListener("click", showPopup)

logoutPopupNo?.addEventListener("click", () => {
  logoutPopup.classList.remove("logout-screen--shown")
})

logoutPopupYes?.addEventListener("click", () => logoutForm.submit())