//Strings for password.

var lowerC = "abcdefghijklmnopqrstuvwxyz"
var upperC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numbers = "1234567890"
var specials = "!#$%&'()*+,-./:;<=>/?@[]^_`{|}~"

//Defining new password here as an empty array to push accepted strings.

var newPassword = []


//Starting user prompts.
    //This variable will be stored as what the user inputs by using the parseInt function to interpret the number as an integer to be used in the halting condition in the upcoming for loop.

    var Length = parseInt(prompt("Between 8 and 128 characters, how long would you like your password to be?"));
//States that the user input for Length needs to be between the value of 8 and 128.

    if (Length < 8 || Length > 128){
        alert("You must choose a value between 8 and 128. Please refresh the page and start over.");
    }

    specialsQ = confirm("Would you like your password to include special characters?");
//If and only if the criteria is true (clicks ok), then it pulls said string (in this case special characters) and places everything within the string to the array "newPassword".

    if (specialsQ === true){
        (newPassword.push(specials));
    }

    numbersQ = confirm("Would you like your password to contain numbers?");

    if (numbersQ === true){
        (newPassword.push(numbers));
    }

    upperQ = confirm("Would you like your password to contain uppercase letters?");

    if (upperQ === true){
        var upperQ = upperC.toUpperCase();
        (newPassword.push(upperC));
    }

    lowerQ = confirm("Would you like your password to contain lowercase letters?");

    if (lowerQ === true){
        var lowerQ = lowerC.toLowerCase();
        (newPassword.push(lowerC));
    }

//If user declines all prompts than this alert pops up.

    if ((specialsQ && numbersQ && upperQ && lowerQ) === false){
        alert("You must choose at least 1 set of criteria to generate a password. Please refresh the page, and start again!")
    }
  
//This changes the gathered newPassword array, and converts it to a string before running through the for loop.

var stringPassword = newPassword.join("");

//Defining final outcome after for loop variable as a string.

var password = "";

//This is the for loop that randomizes the new string "stringPassword" and outputs "finalString". Joins randomized elements of finalString and stores the outcome until button to generate is pushed.

for (let i = 0; i < Length; i++) {
    var finalString = stringPassword.charAt(Math.floor(Math.random() * stringPassword.length));
    password = password.concat(finalString);  
}

alert("Please click the big red button to generate your password.");

//Generates password utilizing getElementById to put password text into the "textarea."

function generatePassword() {
    document.getElementById("password").textContent = password;
}