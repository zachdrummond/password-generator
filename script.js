// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbersArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharactersArray = [" ", "!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];
var realPassword = "";

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

  function faster(boolean, array){
    var fasterPassword = "";
    if(boolean){
      for(var i=0; i<passwordLength; i++){
        fasterPassword += array[Math.floor(Math.random() * array.length)];
      }
    }
    return fasterPassword;
  }

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
    realPassword+=faster(lowercaseBoolean, lowercaseArray);

    var uppercaseBoolean = confirm("Would you like to include uppercase letters in your password?");
    realPassword+=faster(uppercaseBoolean, uppercaseArray);

    var numbersBoolean = confirm("Would you like to include numbers in your password?");
    realPassword+=faster(numbersBoolean, numbersArray);
    
    var specialCharactersBoolean = confirm("Would you like to include special characters in your password?");
    realPassword+=faster(specialCharactersBoolean, specialCharactersArray);

    if(lowercaseBoolean === false && uppercaseBoolean === false && numbersBoolean === false && specialCharactersBoolean === false){
      alert("Cannot generate a password with no letters, numbers, or special characters.");
    }
  }

  return realPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
