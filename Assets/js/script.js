// Assignment Code - Do Not Change
const generateBtn = document.querySelector("#generate");

const lowerChars = [97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122];
const upperChars = [65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90];
const numChars = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57];
const specialChars = [32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 58, 59, 60, 61, 62, 63, 64, 91, 92, 93, 94, 95, 96, 123, 124, 125, 126];
// Init checkboxes
document.getElementById("Lowercase").checked = true;
document.getElementById("Uppercase").checked = true;
document.getElementById("Numbers").checked = true;
document.getElementById("Special").checked = true;

// Choose password length 8-128 characters
// Grab the slider value and insert into the input field
let slider = document.getElementById("chooseLength");
let output = document.getElementById("numLength");
output.value = slider.value;

// Set the input value to the slider value
slider.oninput = function () {

  output.value = this.value;

}

// Set the slider value to the input value
output.oninput = function () {

  slider.value = this.value;

}

// Include lowercase 
// Characters 97 - 122
const lowerInput = document.getElementById("Lowercase");


// Include uppercase
// Characters 65 - 90
const upperInput = document.getElementById("Uppercase");


// Include numeric
// Characters 48 - 57
const numInput = document.getElementById("Numbers");


// Include special characters
// Characters 32 - 47 and 58 - 64 and 91 - 96 and 123 - 126
const specialInput = document.getElementById("Special");


// Generate password with selected criteria
// Validate inputs - at least one character type must be selected

// Pseudo-random password generation
function generatePassword() {
  let pwLength = slider.value;
  let newChar = '';
  let possibleChars = [];
  let pwText = document.getElementById("password");
  possibleChars = [];
  newChar = '';
  console.log(pwText);
  if (lowerInput.checked) {
    possibleChars = possibleChars.concat(lowerChars)
  };
  console.log(possibleChars);
  if (upperInput.checked) {
    possibleChars = possibleChars.concat(upperChars)
  };
  console.log(possibleChars);
  if (numInput.checked) {
    possibleChars = possibleChars.concat(numChars)
  };
  console.log(possibleChars);
  if (specialInput.checked) {
    possibleChars = possibleChars.concat(specialChars)
  };
  console.log(possibleChars);
  for (let i = 0; i < pwLength; i++) {
    newChar = String.fromCharCode(Math.floor(Math.random() * (possibleChars.length - 1)));
    
    pwText.innerHTML += newChar;
    console.log(pwText);
  }
}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the page
// Write password to the #password input
function writePassword() {
  if (lowerInput.checked || upperInput.checked || numInput.checked || specialInput.checked) {
    generatePassword();
  } else
    alert("Please select an option.")
  return false;

}