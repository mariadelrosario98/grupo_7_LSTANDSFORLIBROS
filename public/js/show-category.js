const categoryBox = document.querySelector(".category-box")
const keyword = "vendor".split("")
let counter = 0

document.addEventListener("keydown", e => {
  if (!categoryBox) return

  e.key.toLowerCase() === keyword[counter] ? counter++ : counter = 0
  if (counter === keyword.length) {
    showCategories()
    counter = 0
  }
})

const vendorField = `
  <div class="category">
    <input type="radio" name="category" id="vendor" value="vendor">
    <label for="vendor">Vendedor</label>
  </div>
`

function showCategories() {
  alert("Permiso concedido ;)")
  categoryBox.style.display = "block"
  categoryBox.innerHTML += vendorField
}