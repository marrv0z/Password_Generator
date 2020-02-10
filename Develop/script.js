// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  passwordText.value = password;

  // Log the number of characters to the console to make sure it is the number of characters the user asked for
  console.log("length: " + password.length);

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Function to ask questions to the user in order to determine the password
function generatePassword(){

  //The while loop makes sure the user chooses a length inside of the range (8:128)
  let h = 0;
  while(h < 8 || h > 128){
    h = prompt("How long would you like your password to be? (8-128 characters)");
  }
  let howLong = h;
  
  //this variable will hold the string of the password
  var passwordWill ="";

  //this variable will defined how many of each type of character there will be
  var lengthEach = 0;

  //checking what type of characters the user wants and log the answer into the console
  var lowerCheck = window.confirm("Do you want lowercase letters?");
  console.log("lower case: " + lowerCheck);
  var upperCheck = window.confirm("Do you want uppercase letters?");
  console.log("upper case: " + upperCheck);
  var specCharCheck = window.confirm("Do you want special characters?");
  console.log("special characters: " + specCharCheck);
  var numberCheck = window.confirm("Do you want numbers?");
  console.log("numbers: " + numberCheck);

  //each if statement has a different outcome, I'm sorry it is so long
  if (lowerCheck === false && upperCheck === true && specCharCheck === true && numberCheck === true) {
    lengthEach = howLong/3;
    lengthEach = Math.floor(lengthEach);

    // the for loop adds characters to the string until it reaches the length all of them are supposed to have
    for (var i=0; i< lengthEach; i++){
      passwordWill = passwordWill + upperLetter[abcGen()] + specChar[numCharGen()] + number[numCharGen()];
    }

    // if the user aks for 10 characters, there can only be 3 of each character, making the password length shorter than 10, and
    // the while loops keeps on adding characters till it completes the 10
    while (passwordWill.length < howLong){
      passwordWill = passwordWill + specChar[numCharGen()];
    }
  }

  else if (lowerCheck === false && upperCheck === false && specCharCheck === true && numberCheck === true) {
    lengthEach = howLong/2;
    lengthEach = Math.floor(lengthEach);
    for (var i=0; i< lengthEach; i++){
      passwordWill = passwordWill + specChar[numCharGen()] + number[numCharGen()];
    }
    while (passwordWill.length < howLong){
      passwordWill = passwordWill + specChar[numCharGen()];
    }
  }

  else if (lowerCheck === false && upperCheck === false && specCharCheck === false && numberCheck === true) {
    lengthEach = howLong;
    lengthEach = Math.floor(lengthEach);
    for (var i=0; i< lengthEach; i++){
      passwordWill = passwordWill + number[numCharGen()];
    }
    while (passwordWill.length < howLong){
      passwordWill = passwordWill + number[numCharGen()];
    }
  }

  else if (lowerCheck === false && upperCheck === true && specCharCheck === false && numberCheck === true) {
    lengthEach = howLong/2;
    lengthEach = Math.floor(lengthEach);
    for (var i=0; i< lengthEach; i++){
      passwordWill = passwordWill + upperLetter[abcGen()] + number[numCharGen()];
    }
    while (passwordWill.length < howLong){
      passwordWill = passwordWill + number[numCharGen()];
    }
  }

  else if (lowerCheck === false && upperCheck === true && specCharCheck === true && numberCheck === false) {
    lengthEach = howLong/2;
    lengthEach = Math.floor(lengthEach);
    for (var i=0; i< lengthEach; i++){
      passwordWill = passwordWill + upperLetter[abcGen()] + specChar[numCharGen()];
    }
    while (passwordWill.length < howLong){
      passwordWill = passwordWill + specChar[numCharGen()];
    }
  }

  else if (lowerCheck === false && upperCheck === true && specCharCheck === false && numberCheck === false) {
    lengthEach = howLong;
    lengthEach = Math.floor(lengthEach);
    for (var i=0; i< lengthEach; i++){
      passwordWill = passwordWill + upperLetter[abcGen()];
    }
    while (passwordWill.length < howLong){
      passwordWill = passwordWill + upperLetter[abcGen()];
    }
  }

  else if (lowerCheck === false && upperCheck === false && specCharCheck === true && numberCheck === false) {
    lengthEach = howLong;
    lengthEach = Math.floor(lengthEach);
    for (var i=0; i< lengthEach; i++){
      passwordWill = passwordWill + specChar[numCharGen()];
    }
    while (passwordWill.length < howLong){
      passwordWill = passwordWill + specChar[numCharGen()];
    }
  }

  else if (lowerCheck === true && upperCheck === false && specCharCheck === false && numberCheck === true) {
    lengthEach = howLong/2;
    lengthEach = Math.floor(lengthEach);
    for (var i=0; i< lengthEach; i++){
      passwordWill = passwordWill + lowerLetter[abcGen()] + number[numCharGen()];
    }
    while (passwordWill.length < howLong){
      passwordWill = passwordWill + lowerLetter[abcGen()];
    }
  }

  else if (lowerCheck === true && upperCheck === false && specCharCheck === false && numberCheck === false) {
    lengthEach = howLong;
    lengthEach = Math.floor(lengthEach);
    for (var i=0; i< lengthEach; i++){
      passwordWill = passwordWill + lowerLetter[abcGen()];
    }
    while (passwordWill.length < howLong){
      passwordWill = passwordWill + lowerLetter[abcGen()];
    }
  }

  else if (lowerCheck === true && upperCheck === true && specCharCheck === true && numberCheck === false) {
    lengthEach = howLong/3;
    lengthEach = Math.floor(lengthEach);
    for (var i=0; i< lengthEach; i++){
      passwordWill = passwordWill + lowerLetter[abcGen()] + upperLetter[abcGen()] + specChar[numCharGen()];
    }
    while (passwordWill.length < howLong){
      passwordWill = passwordWill + upperLetter[abcGen()];
    }
  }

  else if (lowerCheck === true && upperCheck === true && specCharCheck === true && numberCheck === true) {
    lengthEach = howLong/4;
    lengthEach = Math.floor(lengthEach);
    for (var i=0; i< lengthEach; i++){
      passwordWill = passwordWill + lowerLetter[abcGen()] + upperLetter[abcGen()] + specChar[numCharGen()] + number[numCharGen()];
    }
    while (passwordWill.length < howLong){
      passwordWill = passwordWill + specChar[numCharGen()];
    }
  }
  
  else if (lowerCheck === true && upperCheck === false && specCharCheck === true && numberCheck === true) {
    lengthEach = howLong/3;
    lengthEach = Math.floor(lengthEach);
    for (var i=0; i< lengthEach; i++){
      passwordWill = passwordWill + lowerLetter[abcGen()] + specChar[numCharGen()] + number[numCharGen()];
    }
    while (passwordWill.length !== howLong){
      passwordWill = passwordWill + lowerLetter[abcGen()];
    }

    
  } 

  else if (lowerCheck === true && upperCheck === false && specCharCheck === true && numberCheck === false) {
    lengthEach = howLong/3;
    lengthEach = Math.floor(lengthEach);
    for (var i=0; i< lengthEach; i++){
      passwordWill = passwordWill + lowerLetter[abcGen()] + specChar[numCharGen()];
    }
    while (passwordWill.length !== howLong){
      passwordWill = passwordWill + lowerLetter[abcGen()];
    }
  }
  // in case they choose all false, the password generator will not work, and the user will have to click the button again
  else{
    alert("Sorry, your choices do not qualify to generate a password, please try again.");
  }

  return passwordWill;
}

var lowerLetter = "abcdefghijklmnopqrstuvwxyz".split("");
var upperLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var number = "0123456789".split("");
var specChar = "*/-+#$@!%~".split("");

// function that generates a random number, wich will become the index of the abc strings, and therefore
// get a random letter
function abcGen(){
  let max = 25;
  let min = 0;
  var abc = (Math.random()*((max - min)+1)+min);
  abc = Math.floor(abc);
  return abc;
}

// function that generates a random number, wich will become the index of the number and character strings,
// and therefore get a random number or character
function numCharGen(){
  let max = 9;
  let min = 0;
  var numChar = (Math.random()*((max - min)+1)+min);
  numChar = Math.floor(numChar);
  return numChar;
}