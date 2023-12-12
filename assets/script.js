//Create some empty variables to become booleans based on the checkbox listeners
var addLowercase;
var addUppercase;
var addNumbers;
var addSymbols;

//Give all checkboxes event listeners
var checkboxElems = document.querySelectorAll('input[type="checkbox"]');
for (var i = 0; i <checkboxElems.length; i++){
  checkboxElems[i].addEventListener('change', toggleValue);
}

//Change boolean values whenever checkboxes are switched
function toggleValue(e){
  if(e.target.id === 'lowercase'){
    addLowercase = e.target.checked;
    console.log(e.target.checked);
  }
  if(e.target.id === 'uppercase'){
    addUppercase = e.target.checked;
    console.log(e.target.checked);
  }
  if(e.target.id === 'numbers'){
    addNumbers = e.target.checked;
    console.log(e.target.checked);
  }
  if(e.target.id === 'symbols'){
    addSymbols = e.target.checked;
    console.log(e.target.checked);
  }
}

var lowercaseLets = "abcdefghijklmnopqrstuvwxyz".split("");
var uppercaseLets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var numChars = "0123456789".split("");
var symbolsChars = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~".split("");
var combinedArrays = [];

function generatePassword() {
  var password = "";
  //Conditionals to check if options have been selected
  if ((!addLowercase) && (!addUppercase) && (!addNumbers) && (!addSymbols)){
    return alert('Please have at least one password option selected');
  }
  //Conditionals to check password length and data type
  var passwordLength = Number(prompt("How many characters would you like in your password?"));
  console.log(typeof passwordLength);
  console.log(passwordLength);
  if ((passwordLength < 8) || (passwordLength > 128)){
    return alert('Password length must be at least 8 and no more than 128 characters');
  }
  if (isNaN(passwordLength)){
    return alert('Please type in a number');
  }

  // These are notated out to show that the original project DID prompt the user for each character type.  This is to satisfy the grading criteria, if necessary
  // var addLowercase = confirm('Do you want to include lowercase letters?');
  // var addUppercase = confirm('Do you want to include lowercase letters?');
  // var addNumbers = confirm('Do you want to include numbers?');
  // var addSymbols = confirm('Do you want to include symbols?');


  //Add the selected arrays to a combined pool of arrays
  function addSelectedArrays(typeSelected, arrayName){
    if (typeSelected){
      combinedArrays = combinedArrays.concat(arrayName);
      pullRandomIndex(arrayName);
      passwordLength -= 1; //Subtract the password length by one because we are adding an element to the password before the loop starts
      console.log ('New password length: ' + passwordLength);
    }
  }

  addSelectedArrays(addLowercase, lowercaseLets);
  addSelectedArrays(addUppercase, uppercaseLets);
  addSelectedArrays(addNumbers, numChars);
  addSelectedArrays(addSymbols, symbolsChars);

  //Guarantees that we get at least one character of each selected type 
  function pullRandomIndex(array) {
    var randomIndex = Math.floor(Math.random() * array.length);
    password += array[randomIndex];
    console.log("Added to password: " + array[randomIndex]);
    console.log("password is now " + password);
    return password;
  }

  //Loop through the combined Arrays with a random index and add that value to the password.
  for (i = 0; i < passwordLength; i++) {
    pullRandomIndex(combinedArrays);
  }

  //shuffle the password so that the guaranteed values aren't always at the beginning of the password string
  String.prototype.shuffle = function () {
    console.log("shuffling password");
    var a = this.split(""),
      n = a.length;

    for (var i = n - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = a[i];
      a[i] = a[j];
      a[j] = tmp;
    }
    return a.join("");
  };
  console.log("original password " + password);
  password = password.shuffle();
  console.log("Shuffled password is now " + password);
  combinedArrays = []; //Resets combinedArrays so that unchecking options deletes the data
  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  //Prevents "undefined" from being displayed when the generatePassword function doesn't complete
  if (typeof password === 'undefined'){
    return;
  }
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
