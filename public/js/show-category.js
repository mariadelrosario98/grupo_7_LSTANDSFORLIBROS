const keyword = "vendor".split("")
let counter = 0

document.addEventListener("keydown", e => {
  e.key.toLowerCase() === keyword[counter] ? counter++ : counter = 0
  if (counter === keyword.length) {
    document.querySelector(".category-box").style.display = "block"
    counter = 0
  }
})