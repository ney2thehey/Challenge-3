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

function generatePassword(){
    // must return a string value that is the password.
    // Prompt user to choose num btwn 8 and 128

    var choices =["8", "9", "0"];

    var index = Math.floor(Math.random() * choices.length); // this will be a formula function to pick between those set of numbers 

var userChoice = prompt("Choose a number between 8 and 128");

if (!userChoice){
    return;}
      //  var to save length
      //  validate user num 

      var userChoice = choices[index];
    // confirm user upper, lower, num, special characters ( 4 confirm prompts)
    
      // 4 vars to save T/F to included characters
      // Validate that atleast one cat was chosen
    // Vars that include all user options of each category. Array of string for each cat.
    // var upper = [" A", "B"]
    // If user says yes to include that cat choose random(Math.random) elements from the array
      // How to decide how many elements to choose from each array
    //
    // Join chosen elements into a string
    return passwordString; 
  
  
  };



