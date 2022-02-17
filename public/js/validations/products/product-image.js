const form = document.querySelector("form.articulo--top--img-edit")
const imageInput = document.getElementById('img-edit');
const feedbackEl = document.querySelector(".feedback")

const allowedExtensions = ['jpeg', 'jpg', 'png', 'gif'];

const validImage = () => {
  let extension = imageInput.value.split('.').pop().toLowerCase()
  return allowedExtensions.includes(extension);
}

imageInput.addEventListener("input", e => {
  if(!validImage()){
    feedbackEl.innerText="Tu imagen debe ser de las siguientes extensiones: jpeg, jpg, png o gif" 
  }
  else{
    form.submit()
  }
})