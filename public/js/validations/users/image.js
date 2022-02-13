const form = document.querySelector(".image-container auto-submit")
const imageInput = document.getElementById('profile_pic').value.split('.').pop().toLowerCase();


const validImage = () => {
  let allowedExtension = ['jpeg', 'jpg', 'png', 'gif'];
  let isValidFile = false;
  for(i in allowedExtension) {
    if(fileExtension === allowedExtension[i]) {
        isValidFile = true; 
        break;
    }
  }
  if(!isValidFile) {
    alert('Debes subir un archivo en los siguientes formatos: *.' + allowedExtension.join(', *.'));
  }
  return isValidFile;
}
