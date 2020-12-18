//add window.confirms to ask types of characters allowed for the password
  //lowercase, uppercase, numeric, and/or special characters (  !"#$%&'()*+,-./  :;<=>?@  [\]^_`  {|}~  )
//add window.prompt to ask the desired password length
  //between 8 and 128 characters
//data is processed and generated either in an alert or ideally on the webpage

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
};
console.log(getRandomLower());

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
};
console.log(getRandomUpper());

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
};
console.log(getRandomNumber());

function getRandomSymbol() {
  var symbols = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  return symbols[Math.floor(Math.random() * symbols.length)];
};
console.log(getRandomSymbol());


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
