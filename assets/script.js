// Assignment code here
function generatePassword(){
  var lowerCaseLet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  var numbers = '0123456789'.split('');
  var symbols = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~'.split('');
  //Create Array for lowercase letters
  //Create Array for uppercase letters
  //Create Array for numbers
  //Create array for symbols

  var password = '';
  //Create a password variable that is an empty string

  var passwordLength = Number(prompt('How many characters would you like in your password?'));
  if (typeof(passwordLength != 'number')){
    alert('You must type a number');
    //Maybe a better way to repeat?
    passwordLength = Number(prompt('How many characters would you like in your password?'));
  }
  if((passwordLength < 8) && (passwordLength > 128)){
    alert('Your password must be at least 8 and no more than 128 characters');
    passwordLength = Number(prompt('How many characters would you like in your password?'));
  };
  //Prompt user for password length and store in a variable

  var addLowercase = confirm('Do you want to include lowercase letters?');
  var addUppercase = confirm('Do you want to include lowercase letters?');
  var addNumbers = confirm('Do you want to include numbers?');
  var symbols = confirm('Do you want to include symbols?');
  //Prompt user for if they want lowercase and store in a boolean
  //Prompt user for if they want uppercase and store in a boolean
  //Prompt user for if they want numbers and store in a boolean
  //Prompt user for if they want symbols and store in a boolean

  //Add together any arrays that they wanted to include based on the true/false values of the booleans into it's own array
    //If lowercase is true then add lowercase array to combined array
    //If uppercase is true true then add lowercase array to combined array
    //if numbers is true then add lowercase array to combined array
    //if symbols is true then add lowercase array to combined array

  //Randomize Array and pull the password length amount of elements out of it and put it into the password variable.
  

}



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

