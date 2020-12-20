//add window.confirms to ask types of characters allowed for the password
  //lowercase, uppercase, numeric, and/or special characters
//add window.prompt to ask the desired password length
  //between 8 and 128 characters
//data is processed and generated either in an alert or ideally on the webpage






// function userInput() {
//   var howLong = window.prompt("How long would you like your password to be?") 
//   while (howLong < 8 || howLong > 128) {
//     howLong = window.prompt("This generator can make passwords between 8 and 128 characters long. How long would you like your password to be?");
//   }
  
//   var uppercaseConfirm = window.confirm("Can your password contain uppercase letters?");
//   var lowercaseConfirm = window.confirm("Can it contain lowercase letters?");
//   var numbersConfirm = window.confirm("How about numbers?");
//   var symbolsConfirm = window.confirm("And symbols?");
//   while (!(uppercaseConfirm || lowercaseConfirm || numbersConfirm || symbolsConfirm)) {
//     window.alert("You must select at least one character type!");
//   }
//   var userChoices = {
//     length: howLong, 
//     upper: uppercaseConfirm,
//     lower: lowercaseConfirm,
//     number: numbersConfirm,
//     symbol: symbolsConfirm
//   }
//   console.log(userChoices);
//   return userChoices;
// };


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

// var randomFunc = {
//   upper: getRandomUpper,
//   lower: getRandomLower,
//   number: getRandomNumber,
//   symbol: getRandomSymbol
// };

// function randomChar(arr) {
//   var randomIndex = Math.floor(Math.random() * arr.length);
//   var randomEl = arr[randomIndex];
//   return randomEl;
// }

function generatePassword() {
  // var uInput = userInput();
  var tempPassword = "";
  
  var allowed = {};
  if (uppercaseConfirm) {
    tempPassword += getRandomUpper(allowed.uppercaseConfirm);
  }
  if (lowercaseConfirm) {
    tempPassword += getRandomLower(allowed.lowercaseConfirm);
  }
  if (numbersConfirm) {
    tempPassword += getRandomNumber(allowed.numbersConfirm);
  }
  if (symbolsConfirm) {
    tempPassword += getRandomSymbol(allowed.symbolsConfirm);
  }
  
  for (var i = tempPassword.length; i < howLong; i++) {
    tempPassword += Math.random(allowed).value;
  }

  var newPassword = tempPassword;
  console.log(tempPassword);
  return newPassword;

};






function getRandomUpper() {
  var uppers = String.fromCharCode(Math.floor(Math.random() * 26) + 65);
	return uppers;
};

function getRandomLower() {
  var lowers = String.fromCharCode(Math.floor(Math.random() * 26) + 97);
	return lowers;
};

function getRandomNumber() {
  var numbers = String.fromCharCode(Math.floor(Math.random() * 10) + 48);
  return numbers;
};

function getRandomSymbol() {
  var symbols = String.fromCharCode(Math.floor(Math.random() * 15) + 33) || String.fromCharCode(Math.floor(Math.random() * 7) + 58);
	return symbols;
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
