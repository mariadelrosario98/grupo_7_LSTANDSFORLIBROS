const form = document.querySelector("form.image-container")
const imageInput = document.getElementById('profile_pic');
let allowedExtensions = ['jpeg', 'jpg', 'png', 'gif'];

const validImage = () => {
  let extension = imageInput.value.split('.').pop().toLowerCase()
  return allowedExtensions.includes(extension);
}

form.addEventListener("submit", e => {
  e.preventDefault();
  if(!validImage){
    document.querySelector(".feedback").innerText="Tu imagen debe ser de las siguientes extensiones: jpeg, jpg, png o gif" 
  }
  else{
    form.submit()
  }
})