



var lowerC = "abcdefghijklmnopqrstuvwxyz"
var upperC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numbers = "1234567890"
var specials = "!#$%&'()*+,-./:;<=>/?@[]^_`{|}~"

//Defining new password here as an empty array
var newPassword = []





// Write password to the #password input


    var Length = parseInt(prompt("Between 8 and 128 characters, how long would you like your password to be?"));

    if (Length < 8 || Length > 128){
        alert("You must choose a value between 8 and 128");
        prompt("Between 8 and 128 characters, how long would you like your password to be?")
    }
    specialsQ = confirm("Would you like your password to include special characters?")
    numbersQ = confirm("Would you like your password to contain numbers?")
    upperQ = confirm("Would you like your password to contain uppercase letters?")
    lowerQ = confirm("Would you like your password to contain lowercase letters?")

    if (specialsQ === true){
        (newPassword.push(specials));
    }
    if (numbersQ === true){
        (newPassword.push(numbers));
    }
    if (upperQ === true){
        (newPassword.push(upperC));
    }
    if (lowerQ === true){
        (newPassword.push(specials));
    }
//Variable to change password to a string
var stringPassword = newPassword.join("");

var password = "";

for (let i = 0; i < Length; i++) {
    var finalString = stringPassword.charAt(Math.floor(Math.random() * stringPassword.length));
    password = password.concat(finalString);
    
}

alert("Please click the button to generate your password.");


function generatePassword() {
    document.getElementById("password").textContent = password;
}