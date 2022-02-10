const switchBtn = document.querySelector(".color-switch")

if (localStorage.getItem("dark-mode")) {
  document.body.classList.add("dark-mode")
}

switchBtn && switchBtn.addEventListener("click", e => {
  document.body.classList.toggle("dark-mode")
  if (localStorage.getItem("dark-mode")) {
    localStorage.removeItem("dark-mode")
  } else {
    localStorage.setItem("dark-mode", "yes")
  }
})