//Strings for password.

var lowerC = "abcdefghijklmnopqrstuvwxyz"
var upperC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numbers = "1234567890"
var specials = "!#$%&'()*+,-./:;<=>/?@[]^_`{|}~"
var password = "";

alert("Click big red button to start generating password.");

//function to generate password starts
function generatePassword() {
//Defining new password as an empty array to push accepted strings.
var newPassword = []
//added an event listen to the button to trigger the prompts.
document.getElementById("generate").addEventListener("click", Length)

//Starting user prompts.
    //This variable will be stored as what the user inputs by using the parseInt function to interpret the number as an integer to be used in the halting condition in the upcoming for loop.

    var Length = parseInt(prompt("Between 8 and 128 characters, how long would you like your password to be?"));
//States that the user input for Length needs to be between the value of 8 and 128.

    if (Length < 8 || Length > 128){
        alert("You must choose a value between 8 and 128. Please refresh the page and start over.");
    }

    specialsQ = confirm("Would you like your password to include special characters?");
//If and only if the criteria is true (clicks ok), then it pulls said string (in this case special characters) and places everything within the string to the array "newPassword".

    if (specialsQ){
        (newPassword.push(specials));
    }

    lowerQ = confirm("Would you like your password to contain lowercase letters?");

    if (lowerQ){
        var lowerQ = lowerC.toLowerCase();
        (newPassword.push(lowerC));
    }

    upperQ = confirm("Would you like your password to contain uppercase letters?");

    if (upperQ){
        var upperQ = upperC.toUpperCase();
        (newPassword.push(upperC));
    }

    numbersQ = confirm("Would you like your password to contain numbers?");

    if (numbersQ){
        (newPassword.push(numbers));
    }

    

//If user declines all prompts than this alert pops up, and then runs through prompts again.

    if (!specialsQ && !numbersQ && !upperQ && !lowerQ){
        alert("You must choose at least 1 set of criteria to generate a password.")
        specialsQ = confirm("Would you like your password to include special characters?");
        if (specialsQ){
            (newPassword.push(specials));
        }
        numbersQ = confirm("Would you like your password to contain numbers?");
        if (numbersQ){
            (newPassword.push(numbers));
        }
        upperQ = confirm("Would you like your password to contain uppercase letters?");
         if (upperQ){
        var upperQ = upperC.toUpperCase();
        (newPassword.push(upperC));
    }

        lowerQ = confirm("Would you like your password to contain lowercase letters?");
        if (lowerQ){
            var lowerQ = lowerC.toLowerCase();
            (newPassword.push(lowerC));
        }

    }
  
//This changes the gathered newPassword array, and converts it to a string before running through the for loop.

var stringPassword = newPassword.join("");

//This is the for loop that randomizes the new string "stringPassword" and outputs "finalString". Joins randomized elements of finalString to password.

for (let i = 0; i < Length; i++) {
    var finalString = stringPassword.charAt(Math.floor(Math.random() * stringPassword.length));
    password = password.concat(finalString);
}
//this displays the text within the "password" box
document.getElementById("password").innerHTML = password;
}