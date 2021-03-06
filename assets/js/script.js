// Assignment code here

//function of password generator
function generatePassword() {

  // set of array for character type 
  let upperCharSet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", 
                      "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  let lowerCharSet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", 
                      "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  let specialCharSet = ["+", "-", "&&", "||", "!", "(", ")", "{", "}", "[", "]", "^", "~", "*", "?", ":"];
  let numberCharSet = [1,2,3,4,5,6,7,8,9,10];

  //global state
  let state = {};

  //empty array
  var passCharSet = [];

  var letterLength = window.prompt(
    'How many characters would you like your password to contain?'
  ); 

  // check if its number or not
  letterLength = parseInt(letterLength);
  if (Number.isNaN(letterLength)){
    alert("Please write a number");
    return generatePassword();
  }
  // console.log(typeof letterLength);

  // condition of user input 
  if (letterLength > 128 || letterLength < 8) {
    alert('Password must be between 8 to 128 characters.');
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

  //atleast one character type should be selected
  if (
    upperCase == false &&
    lowerCase == false &&
    special == false &&
    numeric == false
  ) {
    alert('You must have to select atleast one type.');
    return generatePassword();
  }

  //generate random password as per selected criteria
  let password = '';
  for(var i = 0; i < letterLength; i++){
    var random = Math.floor(Math.random() * passCharSet.length);
    password = password + passCharSet[random];
    console.log(password);
  }
 
  return password;

  // var userCriteria = {
  //   pwLength: parseInt(letterLength),
  //   upperCase: upperCase,
  //   lowerCase: lowerCase,
  //   special: special,
  //   numeric: numeric,
  // };

  // console.log('This is the password length: ', userCriteria.pwLength);
  // console.log('User wants upper case char? ', userCriteria.upperCase);
  // console.log('User wants lower case char? ', userCriteria.lowerCase);
  // console.log('User wants special char? ', userCriteria.special);
  // console.log('User wants numeric char? ', userCriteria.numeric);

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