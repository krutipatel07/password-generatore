// Assignment code here

function criteria() {
  var upperCase = confirm('Do you want to add UPPER CASE characters?');
  var lowerCase = confirm('Do you want to add LOWER CASE characters?');
  var special = confirm('Do you want to add SPECIAL characters?');
  var numeric = confirm('Do you want to add NUMERIC characters?');
}

function generatePassword() {
  var letterLenghth = window.prompt(
    'How many characters would you like your password to contain?'
  );
  console.log(typeof letterLenghth);
  if (letterLenghth > 256 || letterLenghth < 8) {
    alert('Password must be less than 258 characters.');
    return generatePassword();
  }
  var upperCase = confirm('Do you want to add UPPER CASE characters?');
  var lowerCase = confirm('Do you want to add LOWER CASE characters?');
  var special = confirm('Do you want to add SPECIAL characters?');
  var numeric = confirm('Do you want to add NUMERIC characters?');

  if (
    upperCase == false &&
    lowerCase == false &&
    special == false &&
    numeric == false
  ) {
    alert('You must have to select atleast one type.');
    return generatePassword();
  }

  var userCriteria = {
    pwLength: parseInt(letterLenghth),
    upperCase: upperCase,
    lowerCase: lowerCase,
    special: special,
    numeric: numeric,
  };

  console.log('This is the password length: ', userCriteria.pwLength);
  console.log('User wants upper case char? ', userCriteria.upperCase);
  console.log('User wants lower case char? ', userCriteria.lowerCase);
  console.log('User wants special char? ', userCriteria.special);
  console.log('User wants numeric char? ', userCriteria.numeric);

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
// criteria();

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);