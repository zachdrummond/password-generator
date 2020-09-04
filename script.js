// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function chooseRandomArray (object) {
  var passwordObjectKeysArray = Object.keys(object); //Creates an array of strings of the object's keys.
  return object[passwordObjectKeysArray[Math.floor(Math.random() * passwordObjectKeysArray.length)]]; //Returns an array of random properties.
};

function generatePassword() {
  //All your code goes here.

  // WHEN prompted for the length of the password THEN I choose a length of at least 8 characters and no more than 128 characters
  var passwordLength = parseFloat(prompt("Enter a password length between 8 and 128 characters"));

  //If the user presses cancel or a letter or a word - Password length must be a number.
  if (
    isNaN(passwordLength) ||
    passwordLength < 8 ||
    passwordLength > 128
  ) {
    alert("You must enter a password length between 8 and 128 characters.");
  } else {
    
    var realPassword = "";
    var passwordObject = {
      lowercaseArray : ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
      uppercaseArray : ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
      numbersArray : ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
      specialCharactersArray : [" ", "!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"]
    }

    var lowercaseBoolean = confirm("Would you like to include lowercase letters in your password?");
    if(!lowercaseBoolean){
      delete passwordObject.lowercaseArray;
    }

    var uppercaseBoolean = confirm("Would you like to include uppercase letters in your password?");
    if(!uppercaseBoolean){
      delete passwordObject.uppercaseArray;
    }

    var numbersBoolean = confirm("Would you like to include numbers in your password?");
    if(!numbersBoolean){
      delete passwordObject.numbersArray;
    }

    var specialCharactersBoolean = confirm("Would you like to include special characters in your password?");
    if(!specialCharactersBoolean){
      delete passwordObject.specialCharactersArray;
    }

    if(Object.keys(passwordObject).length === 0){
      alert("Cannot generate a password with no letters, numbers, or special characters.");
    }
    else{
      
      for(var i = 0; i < passwordLength; i++){
        var randomArray = chooseRandomArray(passwordObject);
        realPassword+=randomArray[Math.floor(Math.random() * randomArray.length)]
      } 
    }
  }

  return realPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
