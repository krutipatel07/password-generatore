// Assignment code here

//function of password generator
function generatePassword() {

  var letterLength = window.prompt(
    'How many characters would you like your password to contain?'
  ); 

  // condition of user input 
  if (letterLength > 256 || letterLength < 8) {
    alert('Password must be between 8 to 256 characters.');
    return generatePassword();
  }
  
  // series of prompts, taking confirmation from user
  var upperCase = confirm('Do you want to add UPPER CASE characters?');
  state.upperCase = upperCase;
  console.log(state); 

  if(state.upperCase){
    passCharSet.push(...upperCharSet);
  }

  var lowerCase = confirm('Do you want to add LOWER CASE characters?');
  state.lowerCase = lowerCase;
  console.log(state); 

  if(state.lowerCase){
    passCharSet.push(...lowerCharSet);
  }

  var special = confirm('Do you want to add SPECIAL characters?');
  state.special = special;
  console.log(state); 

  if(state.special){
    passCharSet.push(...specialCharSet);
  }

  var numeric = confirm('Do you want to add NUMERIC characters?');
  state.numeric = numeric;
  console.log(state); 

  if(state.numeric){
    passCharSet.push(...numberCharSet);
  }

  if (
    upperCase == false &&
    lowerCase == false &&
    special == false &&
    numeric == false
  ) {
    alert('You must have to select atleast one type.');
    return generatePassword();
  }

  // store all values in one variable
  var userCriteria = {
    pwLength: parseInt(letterLength),
    upperCase: upperCase,
    lowerCase: lowerCase,
    special: special,
    numeric: numeric,
  };

  // debug the code in devtool
  console.log('This is the password length: ', userCriteria.pwLength);
  console.log('User wants upper case char? ', userCriteria.upperCase);
  console.log('User wants lower case char? ', userCriteria.lowerCase);
  console.log('User wants special char? ', userCriteria.special);
  console.log('User wants numeric char? ', userCriteria.numeric);

}

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