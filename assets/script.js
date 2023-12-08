// Assignment code here
function generatePassword(){
  var lowercaseLets = 'abcdefghijklmnopqrstuvwxyz'.split('');
  var uppercaseLets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  var numChars = '0123456789'.split('');
  var symbolsChars = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~'.split('');

  var password = '';
  var combinedArrays =[];

  var passwordLength = Number(prompt('How many characters would you like in your password?'));
  console.log(typeof passwordLength);
  if (typeof passwordLength !== 'number'){
    alert('You must type a number');
    //Maybe a better way to repeat?
    passwordLength = Number(prompt('How many characters would you like in your password?'));
  }
  if((passwordLength < 8) && (passwordLength > 128)){
    alert('Your password must be at least 8 and no more than 128 characters');
    passwordLength = Number(prompt('How many characters would you like in your password?'));
  };

  var addLowercase = confirm('Do you want to include lowercase letters?');
  console.log(addLowercase);
  var addUppercase = confirm('Do you want to include uppercase letters?');
  console.log(addUppercase);
  var addNumbers = confirm('Do you want to include numbers?');
  console.log(addNumbers);
  var addSymbols = confirm('Do you want to include symbols?');
  console.log(addSymbols);

//Add the selected arrays to a combined pool of arrays
if (addLowercase){
  combinedArrays = combinedArrays.concat(lowercaseLets);
  passwordLength -= 1; //Subtract password length by 1 because we're adding an element to the password variable before the loop starts
  console.log('New password length: ' + passwordLength);
  pullRandomIndex(lowercaseLets); //Pull one index element out to guarantee that this array gets used in the password
}
if (addUppercase){
  combinedArrays =  combinedArrays.concat(uppercaseLets);
  passwordLength -= 1; 
  console.log('New password length: ' + passwordLength);
  pullRandomIndex(uppercaseLets); 
}
if (addNumbers){
  combinedArrays =  combinedArrays.concat(numChars);
  passwordLength -= 1; 
  console.log('New password length: ' + passwordLength);
  pullRandomIndex(numChars); 
}
if (addSymbols){
  combinedArrays = combinedArrays.concat(symbolsChars);
  passwordLength -= 1; 
  console.log('New password length: ' + passwordLength);
  pullRandomIndex(symbolsChars); 
}

function pullRandomIndex(array){
  var randomIndex = Math.floor(Math.random() * array.length);
  password += array[randomIndex];
  console.log('Added to password: ' + array[randomIndex]);
  console.log('password is now ' + password);
  return password;
}

//Loop through the combined Arrays with a random index and add that value to the password.
for (i=0; i < passwordLength ; i++){
  pullRandomIndex(combinedArrays);
  // console.log(passwordLength)
  // var randomIndex = Math.floor(Math.random() * combinedArrays.length);
  // console.log('randomIndex is ' + randomIndex);
  // console.log('That value is ' + combinedArrays[randomIndex]);
  // password += combinedArrays[randomIndex];
  // console.log('Added to password.  Password is now: ' + password);
}

//shuffle the password so that the guaranteed values aren't always at the beginning of the password string
String.prototype.shuffle = function () {
  console.log('shuffling password');
  var a = this.split(""),
      n = a.length;

  for(var i = n - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = a[i];
      a[i] = a[j];
      a[j] = tmp;
  }
  return a.join("");
}
console.log('original password ' + password);
password = password.shuffle();
console.log('Shuffled password is now ' + password);
return password;
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

