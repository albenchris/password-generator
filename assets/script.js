//add window.confirms to ask types of characters allowed for the password
  //lowercase, uppercase, numeric, and/or special characters
//add window.prompt to ask the desired password length
  //between 8 and 128 characters
//data is processed and generated either in an alert or ideally on the webpage






function userInput() {
  var howLong = window.prompt("How long would you like your password to be?") 
  while (howLong < 8 || howLong > 128) {
    howLong = window.prompt("This generator can make passwords between 8 and 128 characters long. How long would you like your password to be?");
  }
  
  var uppercaseConfirm = window.confirm("Can your password contain uppercase letters?");
  var lowercaseConfirm = window.confirm("Can it contain lowercase letters?");
  var numbersConfirm = window.confirm("How about numbers?");
  var symbolsConfirm = window.confirm("And symbols?");
  console.log(uppercaseConfirm, lowercaseConfirm, numbersConfirm, symbolsConfirm)
  while (!(uppercaseConfirm || lowercaseConfirm || numbersConfirm || symbolsConfirm)) {
    window.alert("You must select at least one character type!");
  }
  var userChoices = {
    length: howLong, 
    upper: uppercaseConfirm,
    lower: lowercaseConfirm,
    number: numbersConfirm,
    symbol: symbolsConfirm
  }
  console.log(userChoices);
  return userChoices;
};



function generatePassword() {
  var uInput = userInput();
  var tempPassword = [];
  if (uInput.upper) {
    getRandomUpper();
  }
  if (uInput.lower) {
    getRandomLower();
  }
  if (uInput.number) {
    getRandomNumber();
  }
  if (uInput.symbol) {
    getRandomSymbol();
  }
  var newPassword = [uInput.upper, uInput.lower, uInput.number, uInput.symbol];
  console.log(newPassword);
  return newPassword;

};






function getRandomUpper() {
  var uppers = String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  console.log(uppers);
	return uppers;
};

function getRandomLower() {
  var lowers = String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  console.log(lowers);
	return lowers;
};

function getRandomNumber() {
  var numbers = String.fromCharCode(Math.floor(Math.random() * 10) + 48);
  console.log(numbers);
  return numbers;
};

function getRandomSymbol() {
  const symbols = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
  var randomSymbols = [Math.floor(Math.random() * symbols.length)];
  console.log(randomSymbols);
	return randomSymbols;
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
