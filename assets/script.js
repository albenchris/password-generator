//add window.confirms to ask types of characters allowed for the password
  //lowercase, uppercase, numeric, and/or special characters
//add window.prompt to ask the desired password length
  //between 8 and 128 characters
//data is processed and generated either in an alert or ideally on the webpage

var howLong = window.prompt("How long would you like your password to be?") 
while (howLong < 8 || howLong > 128) {
  howLong = window.prompt("This generator can make passwords between 8 and 128 characters long. How long would you like your password to be?");
}
howLong = parseInt(howLong);


var uppercaseConfirm = window.confirm("Can your password contain uppercase letters?");
var lowercaseConfirm = window.confirm("Can it contain lowercase letters?");
var numbersConfirm = window.confirm("How about numbers?");
var symbolsConfirm = window.confirm("And symbols?");


function getRandomUpper() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
};

function getRandomLower() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
};

function getRandomNumber() {
	return +String.fromCharCode(Math.floor(Math.random() * 10) + 48);
};

function getRandomSymbol() {
	const symbols = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~"
	return symbols[Math.floor(Math.random() * symbols.length)];
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
