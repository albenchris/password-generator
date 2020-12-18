//add window.confirms to ask types of characters allowed for the password
  //lowercase, uppercase, numeric, and/or special characters
//add window.prompt to ask the desired password length
  //between 8 and 128 characters
//data is processed and generated either in an alert or ideally on the webpage


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
