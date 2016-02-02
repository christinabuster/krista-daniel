//Create a global variable called random to hold the random number chosen by the computer
// var random;
//Create a global variable called numTries as a counter for the number of guesses available to the user.  Give it an initial value of 1.
var numTries = 1;

//Create a function to run when the user pushes the "Start Game" button
function initializeGame () {
  //Prompts player to enter their name and assigns it to playerName global variable
  playerName = prompt("Enter your name, please:");
  //create an array that holds all the motivational quotes and uses the player's name with some of the strings
  motivations = ["Keep trying " + playerName,
    "You're doing great " + playerName + ", but try again.",
    "Keep on truckin' kid!",
    "If at first you don't succeed, try, try again.",
    "You are my hero, you just can't guess it right!"
  ];
  //Assign a random number to the variable
  random = Math.floor((Math.random() * 100) + 1);
  //Change the headline "hint" to prompt the user to enter their first guess
  document.getElementById("hint").innerHTML = "Please guess a number between 1 and 100";
};


//Create a function to run when the user pushes the "Guess" button
function processGuess() {
  //Assign the integer value of the user's input to a local variable
  var guess = parseInt(document.getElementById("userGuess").value);
  //Clear the value inside the userGuess input
  document.getElementById("userGuess").value = "";
  //Clear the value inside the motivation paragraph
  document.getElementById("motivation").innerHTML = "";

  //If user input is not a number or is greater than 100 or less than 0...
  if (isNaN(guess) || guess > 100 || guess < 1) {
    //...notify them to enter a valid number
    document.getElementById("hint").innerHTML = "Please enter a valid number.";
  }
  //Otherwise, if they guess correctly...
  else if (random === guess ) {
    //...notify them that they've won.
    document.getElementById("hint").innerHTML = "You win " + playerName + "!";
  }
  //Otherwise, if they've reached 7 tries...
  else if (numTries === 7) {
    //...notify them that the game is over.
    document.getElementById("hint").innerHTML = "GAME OVER " + playerName.toUpperCase() + "! Too many tries! <br> Press 'Start Game' to play again!";
  }
  //Otherwise, if their guess is less than the random number...
  else if (random > guess ) {
    //...notify them that their guess is too low...
    document.getElementById("hint").innerHTML = "Too low!";
    //...and give them a little motivation.
    document.getElementById("motivation").innerHTML = motivations[Math.floor(Math.random()*motivations.length)];
    //Increase the numTries counter by one
    numTries++;
  }
  //Otherwise, their guess is more than the random number.
  else {
    //Notify them that their guess is too high...
    document.getElementById("hint").innerHTML = "Too high!";
    //...and give them a little motivation.
    document.getElementById("motivation").innerHTML = motivations[Math.floor(Math.random()*motivations.length)];
    //Increase the numTries counter by one
    numTries++;
  }
};
