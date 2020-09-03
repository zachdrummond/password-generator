// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbersArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharactersArray = [" ", "!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  //All your code goes here.

  // WHEN prompted for the length of the password THEN I choose a length of at least 8 characters and no more than 128 characters
  var passwordLength = parseFloat(prompt("Enter a password length between 8 and 128 characters"));
  console.log(passwordLength);

  //If the user presses cancel or a letter or a word - Password length must be a number.
  if (
    isNaN(passwordLength) ||
    passwordLength < 8 ||
    passwordLength > 128
  ) {
    alert("You must enter a password length between 8 and 128 characters.");
  } else {
    //WHEN prompted for character types to include in the password THEN I choose lowercase, uppercase, numeric, and/or special characters
    var lowercaseBoolean = confirm("Would you like to include lowercase letters in your password?");
    console.log(lowercaseBoolean);

    var uppercaseBoolean = confirm("Would you like to include uppercase letters in your password?");
    console.log(uppercaseBoolean);

    var numbersBoolean = confirm("Would you like to include numbers in your password?");
    console.log(numbersBoolean);
    
    var specialCharactersBoolean = confirm("Would you like to include special characters in your password?");
    console.log(specialCharactersBoolean);

    if(lowercaseBoolean === false && uppercaseBoolean === false && numbersBoolean === false && specialCharactersBoolean === false){
      alert("Cannot generate a password with no letters, numbers, or special characters.");
    }

  }

  return "THIS IS NOT MY FINAL PASSWORD!"; //TODO: Generate a real password and replace the return string with a real password string.
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
