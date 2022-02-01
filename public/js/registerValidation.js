let firstNameInput = document.querySelector("#first_name");
let lastNameInput = document.querySelector("#last_name");
let emailInput = document.querySelector("#email");
let passwordInput = document.querySelector("#password");
let passwordConfirmInput = document.querySelector("#passwordConfirm");

// let data = {
//   firstName: firstName.value,
//   lastName: lastName.value,
//   email: email.value,
//   password: password.value,
//   passwordConfirm: passwordConfirm.value,  
// }

const validateName = name => {
  if (!name) return "Rellene este campo"
  if (name.length < 2) return "Debe tener al menos 2 caracteres"
  return ""
}

const validateEmail = email => {
  if (!email) return "Rellene este campo"
  if (!validator.isEmail(email)) return "Email invalido"
  return ""
}

const validatePassword = password => {
  if (!password) return "Rellene este campo"
  if (password.length < 8) return "Debe tener al menos 8 caracteres"
  return ""
}

const validate = (firstName, lastName, email, password, confirmPassword) => {

}


let data = {
  firstName: "Kevin",
  lastName: "simanca",
  email: "kevin@gmail.com",
  password: "1234",
  passwordConfirm: "123",  
}

let rules = {
  firstName: 'required|min:2|string', 
  lastName: 'required|min:2|string',
  email: 'required|email',
  password: 'required|size:8',
  passwordConfirm: 'same:password'
}

console.log(validator)
