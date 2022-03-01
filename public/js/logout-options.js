const logoutForm = document.querySelector("form#logout-form")
const burgerMenuBtn = document.querySelector("#burger-menu")
const burgerMenuList = document.querySelector("ul.menu-list")

const logoutItemOnBurgerMenu = document.querySelector("li#logout-item")
const logoutIcon = document.querySelector(".logout-icon")
const logoutPopup = document.querySelector(".logout-screen")
const logoutPopupYes = document.querySelector(".logout-screen--yes")
const logoutPopupNo = document.querySelector(".logout-screen--no")


const toggleBurgerMenu = () => {
  if (!burgerMenuList.classList.contains("list-show")) {
    burgerMenuList.classList.add("list-show")
    burgerMenuList.classList.remove("list-hide")
  } else {
    burgerMenuList.classList.add("list-hide")
    burgerMenuList.classList.remove("list-show")
  }
}

burgerMenuBtn?.addEventListener("click", toggleBurgerMenu)

document.addEventListener("click", e => {
  if (!burgerMenuList.classList.contains("list-show")) return
  if (e.target.closest("#burger-menu")) return
  burgerMenuList.classList.add("list-hide")
  burgerMenuList.classList.remove("list-show")
})

const showPopup = () => {
  if (logoutPopup.classList.contains("logout-screen--shown")) return
  logoutPopup.classList.add("logout-screen--shown")
  logoutPopup.classList.remove("logout-screen--hidden")
}

const hidePopup = e => {
  if (!logoutPopup.classList.contains("logout-screen--shown")) return
  if (e.target.closest(".logout-screen--form") && !e.target.matches(".logout-screen--no")) return
  logoutPopup.classList.add("logout-screen--hidden")
  logoutPopup.classList.remove("logout-screen--shown")
}

logoutItemOnBurgerMenu?.addEventListener("click", () => {
  showPopup()
  toggleBurgerMenu()
})

logoutIcon?.addEventListener("click", showPopup)

logoutPopup?.addEventListener("click", hidePopup)

logoutPopupNo?.addEventListener("click", hidePopup)

logoutPopupYes?.addEventListener("click", () => logoutForm.submit())