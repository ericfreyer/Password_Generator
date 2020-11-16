// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
document.getElementById("#generate").onclick=generatePassword;

//List of variable
var password = generatePassword();
var passwordLength;
var passwordNumbers;
var passwordSpecial;
var passwordUpper;
var passwordLower;
var lettersUpper;
var criteria;
var outcome;

//Lowercase
letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//Uppercase
lettersUpper = letters.map(toUpper);
var toUpper = function (x) {
  return x.toUpperCase();
}

//Special Characters
specials = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

//Numbers
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];


// Start of password function
function generatePassword() {

  var passwordText = document.querySelector("#password");


  passwordLength = prompt("Between 8 and 128 characters, how long would you like your password to be?");
  
  if (passwordLength < 8 || passwordLength > 128){
    (alert("You must add a value between 8 and 128! Please start over."));
  }

  else {
    passwordNumbers = confirm("Do you want numbers in your password?");
    passwordSpecial = confirm("Will your password contain special characters?");
    passwordUpper = confirm("Will your password contain uppercase letters?");
    passwordLower = confirm("Will your password contain lowercase letters?");
  };
    //Reject all criteria
  if (!passwordNumbers && !passwordSpecial && !passwordUpper && !passwordLower){
    (alert("You need to choose at least 1 option to generate a password! Please start over."));
  }

  else if (passwordNumbers && passwordSpecial && passwordUpper && passwordLower){
        //Generate password with all criteria
        criteria = letters.concat(specials, numbers, lettersUpper)
  }
    //1 rejection
  else if (!passwordNumbers && passwordSpecial && passwordLower && passwordUpper){
          criteria = letters.concat(specials, lettersUpper)
  }

  else if (passwordNumbers && !passwordSpecial && passwordLower && passwordUpper){
          criteria = letters.concat(numbers, lettersUpper)
  }

  else if (passwordNumbers && passwordSpecial && !passwordLower && passwordUpper){
          criteria = numbers.concat(specials, lettersUpper)
  }

  else if (passwordNumbers && passwordSpecial && passwordLower && !passwordUpper){
          criteria = letters.concat(numbers, specials)
  }
    //2 rejections
  else if (!passwordNumbers && !passwordSpecial && passwordLower && passwordUpper){
          criteria = letters.concat(lettersUpper)
  }

  else if (passwordNumbers && !passwordSpecial && !passwordLower && passwordUpper){
         criteria = numbers.concat(lettersUpper)
  }

  else if (passwordNumbers && passwordSpecial && !passwordLower && !passwordUpper){
         criteria = numbers.concat(specials)
  }

  else if (!passwordNumbers && passwordSpecial && !passwordLower && passwordUpper){
         criteria = specials.concat(lettersUpper)
  }

  else if (passwordNumbers && !passwordSpecial && passwordLower && !passwordUpper){
         criteria = numbers.concat(letters)
  }

    //3 rejections
  else if (passwordNumbers && !passwordSpecial && !passwordLower && !passwordUpper){
         criteria = numbers
  }

  else if (!passwordNumbers && passwordSpecial && !passwordLower && !passwordUpper){
         criteria = specials
  }

  else if (!passwordNumbers && !passwordSpecial && passwordLower && !passwordUpper){
          criteria = letters
  }

  else if (!passwordNumbers && !passwordSpecial && !passwordLower && passwordUpper){
          criteria = lettersUpper
  }

//For loop to randomize parameters
    for (var i = 0; i < criteria.length; i++) {
      var outcome = criteria[Math.floor(Math.random() * criteria.length)];
      password.push(outcome);
    }

    var password = [];

    var ps = password.join("");
    writePassword(ps);
    return ps;

}

function writePassword(ps) {
  document.getElementById("password").textContent = ps;

}















 




