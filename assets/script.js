var howLong = window.prompt("How long would you like your password to be?") 
while (howLong < 8 || howLong > 128) {
  howLong = window.prompt("This generator can make passwords between 8 and 128 characters long. How long would you like your password to be?");
};

var uppercaseConfirm = window.confirm("Can your password contain uppercase letters?");
var lowercaseConfirm = window.confirm("Can it contain lowercase letters?");
var numbersConfirm = window.confirm("How about numbers?");
var symbolsConfirm = window.confirm("And symbols?");

while (!(uppercaseConfirm || lowercaseConfirm || numbersConfirm || symbolsConfirm)) {
  window.alert("You must select at least one character type!");
  uppercaseConfirm = window.confirm("Can your password contain uppercase letters?");
  lowercaseConfirm = window.confirm("Can it contain lowercase letters?");
  numbersConfirm = window.confirm("How about numbers?");
  symbolsConfirm = window.confirm("And symbols?");
};

function generatePassword() {
  var newPassword = "";
  var allowed = [];
  
  while (newPassword.length < howLong) {
    if (uppercaseConfirm) {
      newPassword += getRandomUpper(allowed.uppercaseConfirm);
    }
    if (lowercaseConfirm) {
      newPassword += getRandomLower(allowed.lowercaseConfirm);
    }
    if (numbersConfirm) {
      newPassword += getRandomNumber(allowed.numbersConfirm);
    }
    if (symbolsConfirm) {
      newPassword += getRandomSymbol(allowed.symbolsConfirm);
    }
  }

  return newPassword;
};

// Generator Functions
function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
};

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
};

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
};

function getRandomSymbol() {
  return String.fromCharCode(Math.floor(Math.random() * 15) + 33) || String.fromCharCode(Math.floor(Math.random() * 7) + 58);
};

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
