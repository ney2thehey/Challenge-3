// Assignment Code
// var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
// var Uppercase = [
//   'A',
//   'B',
//   'C',
//   'D',
//   'E',
//   'F',
//   'G',
//   'H',
//   'I',
//   'J',
//   'K',
//   'L',
//   'M',
//   'N',
//   'O',
//   'P',
//   'Q',
//   'R',
//   'S',
//   'T',
//   'U',
//   'V',
//   'W',
//   'X',
//   'Y',
//   'Z',
// ];


// // Array of lowercase characters to be included in password
// var lowercase= [
//   'a',
//   'b',
//   'c',
//   'd',
//   'e',
//   'f',
//   'g',
//   'h',
//   'i',
//   'j',
//   'k',
//   'l',
//   'm',
//   'n',
//   'o',
//   'p',
//   'q',
//   'r',
//   's',
//   't',
//   'u',
//   'v',
//   'w',
//   'x',
//   'y',
//   'z',
// ];

// var specialCharacters = [
//   '@',
//   '%',
//   '+',
//   '\\',
//   '/',
//   "'",
//   '!',
//   '#',
//   '$',
//   '^',
//   '?',
//   ':',
//   ',',
//   ')',
//   '(',
//   '}',
//   '{',
//   ']',
//   '[',
//   '~',
//   '-',
//   '_',
//   '.',
// ];


var lowercase = "abcdefghijklmnopqrstuvwxyz";
      var Uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      var numbers= "0123456789";
      var specialCharacters = "!@#$%^&*()_+~`|}{[]:;?><,./-=";


var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function Random (option){
  var randomindex = Math.floor(Math.random()*option.length);
var Finalrandom = option[randomindex];
return Finalrandom;
}


function generatePassword(){
    // must return a string value that is the password.
    // Prompt user to choose num btwn 8 and 128
    var ConcatPassword = [];
    var NewPassword = "";
    var FinalPassword = "";
    var userChoice = parseInt(prompt("Choose a number between 8 and 128"));


if (userChoice < 8) {
  alert("Enter a higher number");
  return (null);
}
if (userChoice > 128) {
  alert("Enter number less than 128");
  return null;
}




      //  var to save length
      //  validate user num 

    // confirm user upper, lower, num, special characters ( 4 confirm prompts)
    
    var confirmUppercase = confirm("Would you want to have an Upper case letter?");
  
    if (confirmUppercase){
      // ConcatPassword= ConcatPassword.concat(Uppercase)
        NewPassword += Uppercase;
    }
    var confirmLowercase = confirm("Would you want to have an Lower case letter?");
    if (confirmLowercase){
      // ConcatPassword= ConcatPassword.concat(lowercase)
        NewPassword += lowercase;
    }
    var confirmspecialCharacters = confirm("Would you want to have Special Characters?");
    if (confirmspecialCharacters ){
      // ConcatPassword= ConcatPassword.concat(specialCharacters)
        NewPassword += specialCharacters;
    }
    var confirmnumbers = confirm("Would you want to have a number?");
    if (confirmnumbers){
      // ConcatPassword= ConcatPassword.concat(numbers)
        NewPassword += numbers;
    }
    console.log(NewPassword);

    for (var i = 0; i<userChoice; i++ ) {
      var Resolved = NewPassword.charAt(Math.floor(Math.random()*NewPassword.length));
      FinalPassword += Resolved;
    
    }
   
console.log("This is " + FinalPassword);

      // 4 vars to save T/F to included characters

      // Validate that atleast one cat was chosen
    // Vars that include all user options of each category. Array of string for each cat.
    // var upper = [" A", "B"]
    // If user says yes to include that cat choose random(Math.random) elements from the array
      // How to decide how many elements to choose from each array
    //
    // Join chosen elements into a string
    
return FinalPassword;
     
  
  
  };


