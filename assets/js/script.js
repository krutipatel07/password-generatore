// Assignment code here

function criteria(){
  var upperCase = confirm('Do you want to add UPPER CASE characters?');
  var lowerCase = confirm('Do you want to add LOWER CASE characters?');
  var special = confirm('Do you want to add SPECIAL characters?');
  var numeric = confirm('Do you want to add NUMERIC characters?');
}

function generatePassword(){
  var letterLenghth = window.prompt('How many characters would you like your password to contain?');
  console.log(letterLenghth);
  var upperCase = confirm('Do you want to add UPPER CASE characters?');
  var lowerCase = confirm('Do you want to add LOWER CASE characters?');
  var special = confirm('Do you want to add SPECIAL characters?');
  var numeric = confirm('Do you want to add NUMERIC characters?');

  if (letterLenghth > 256) {  
    alert("Password must be less than 258 characters.")
  }
  else if(letterLenghth < 8){
    alert("PAssword must be atleast 8 characters.")
  }
  else if(upperCase == false && lowerCase == false && special == false && numeric == false){
    alert("You must have to select atleast one type.");
  }
  else{
    return 0;
  }

  //   if (upperCase == true && lowerCase == true && special == true && numeric == true){
  //     console.log(upperCase, lowerCase, special,numeric);
  //   }else{
  //     alert("You must have to select atleast one type.");
  //     generatePassword();
  //   }
  // }


  // if (upperCase == false && lowerCase == false && special == false && numeric == false){
  //   alert("You must have to select atleast one type.");
  //   generatePassword();
  // }



//   if (letterLenghth === true){
//     generatePassword();
//   }
//   else{
//     alert("Password must be 8 characters.")
//   }
  
//   var char = '';
//   for (i = 0; i < 8; i++){
//     char = Math.floor(Math.random() * letterLenghth.length);
//     console.log(char);
//   }
//   return char;

}
generatePassword();
// criteria();

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
