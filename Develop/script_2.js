//Strings for password.
var lowerC = "abcdefghijklmnopqrstuvwxyz"
var upperC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numbers = "1234567890"
var specials = "!#$%&'()*+,-./:;<=>/?@[]^_`{|}~"

//Defining new password here as an empty array to push "newPassword" criteria to.
var newPassword = []


//Starting user prompts.

    var Length = parseInt(prompt("Between 8 and 128 characters, how long would you like your password to be?"));

    if (Length < 8 || Length > 128){
        alert("You must choose a value between 8 and 128. Please refresh the page and start over.");
    }

    
    specialsQ = confirm("Would you like your password to include special characters?");
//If and only if the criteria is true (clicks ok), then it pulls from said string (in this case special characters) to the array "newPassword".
    if (specialsQ === true){
        (newPassword.push(specials));
    }

    numbersQ = confirm("Would you like your password to contain numbers?");

    if (numbersQ === true){
        (newPassword.push(numbers));
    }

    upperQ = confirm("Would you like your password to contain uppercase letters?");

    if (upperQ === true){
        (newPassword.push(upperC));
    }

    lowerQ = confirm("Would you like your password to contain lowercase letters?");

    if (lowerQ === true){
        (newPassword.push(specials));
    }

//If user declines all prompts than this pops up.
    if ((specialsQ && numbersQ && upperQ && lowerQ) === false){
        alert("You must choose at least 1 set of criteria to generate a password. Please refresh the page, and try again!")
    }
  
//This changes the gathered newPassword array, and converts it to a string before running through the for loop.
var stringPassword = newPassword.join("");

//Defining final outcome after for loop variable as a string
var password = "";

//This is the for loop that randomizes the new string "stringPassword" and outputs "finalString".
for (let i = 0; i < Length; i++) {
    var finalString = stringPassword.charAt(Math.floor(Math.random() * stringPassword.length));


//Joins randomized elements of finalString
password = password.concat(finalString);
    
}


alert("Please click the big red button to generate your password.");

//Generates password utilizing getElementById
function generatePassword() {
    document.getElementById("password").textContent = password;
}