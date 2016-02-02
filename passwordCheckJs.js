//HELPER FUNCTIONS-----------------------

//Function to check validity of an id passed in as a parameter.
function isUserIdValid(userId) {
  //If the ID is valid...
  if (!(userId.includes("$") || userId.includes("#") || userId.includes("!")) && userId.length > 5) {
    //...return an Object indicating that it is true
    return {valid: true}
  }
  //Otherwise, if the ID includes $...
  else if (userId.includes("$")){
    //...return an object indicating it's invalid, and giving the reason
    return {valid: false, reason: "Cannot include $ in your User ID."};
  }
  //Otherwise, if the ID includes #...
  else if (userId.includes("#")){
    //...return an object indicating it's invalid, and giving the reason
    return {valid: false, reason: "Cannot include # in your User ID."};
  }
  //Otherwise, if the ID includes !...
  else if (userId.includes("!")){
    //...return an object indicating it's invalid, and giving the reason
    return {valid: false, reason: "Cannot include ! in your User ID."};
  }
  //Otherwise, if the ID is less than 6 characters
  else if (userId.length <6){
    //...return an object indicating it's invalid, and giving the reason
    return {valid: false, reason: "Your User ID needs to be at least 6 characters."};
  }
};

//Function to check validity of a password passed in as a parameter.
function isPasswordValid(password) {
  //If the password is valid...
  if((password.includes("$") || password.includes("#") || password.includes("!")) && password.length > 5 && checkCase(password) && test(password)) {
    //...return an Object indicating that it is true
    return {valid: true};
  }
  //Otherwise, if the password doesn't include $, #, or !...
  else if (!(password.includes("$") || password.includes("#") || password.includes("!"))){
    //...return an object indicating it's invalid, and giving the reason
    return {valid: false, reason: "You must include at least one $, #, or ! in your Password."};
  }
  //Otherwise, if the password doesn't have both an upper and lowercase letter...
  else if (!checkCase(password)){
    //...return an object indicating it's invalid, and giving the reason
    return {valid: false, reason: "You must have at least one uppercase and one lowercase letter in your password."};
  }
  //Otherwise, if the password doesn't contain a digit...
  else if (!test(password)){
    //...return an object indicating it's invalid, and giving the reason
    return {valid: false, reason: "Your password must include at least one digit/number."};
  }
  //Otherwise the password is too short, so...
  else {
    //...return an object indicating it's invalid, and giving the reason
    return {valid: false, reason: "Your password needs to be at least 6 characters."};
  }
};

//Function checking if the password has both an upper and lowercase letter
function checkCase(password) {
  return password.toUpperCase() != password && password.toLowerCase() != password
};

//Function checking if the password has at least one digit
function test(str) {
  return /\d/.test(str);
};

//END HELPER FUNCTIONS---------------------

//Main function to run when user clicks the Login button; function uses the helper functions above
function login() {
  // Check user input for ID with isUserIdValid function, which returns a boolean.  Assign that to variable userValid.
  var userValid = isUserIdValid(document.getElementById("userIdValue").value);
  // Check user input for password with isPasswordValid function, which returns a boolean.  Assign that to variable passValid.
  var passValid = isPasswordValid(document.getElementById("passwordValue").value);

  //If both ID and Password are valid, let the user know they have been accepted
  if(userValid.valid && passValid.valid) {
    document.getElementById("reason").innerHTML = "User ID and Password accepted";
  }
  //Otherwise, if the ID is invalid, tell the user why
  else if(userValid.valid != true) {
    document.getElementById("reason").innerHTML = "Your User ID is not valid. " + userValid.reason;
  }
  //Otherwise, the password is invalid.  Tell the user why.
  else {
    document.getElementById("reason").innerHTML = "Your password is not valid. " + passValid.reason;
  }
};
