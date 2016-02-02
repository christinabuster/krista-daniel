//Magic 8 Ball Challenge//

//Create a variable that holds an array with all the possible responses the 8 ball could give to your questions
var answers = ["Yup!", "Fuhgeddaboudit", "Maybe", "What would your mother do?", "What would an Australian do? Do the opposite.", "Abso-freakin'-lutely"];

//Create a function that initiates the 8 ball game
function magic8 ()
{
  //Create a variable that is assigned whatever question the user asks
  var userInput = document.getElementById("userQuestion").value;

  //Assign to randomAnswer a randomly accessed element within array 'answers'
  var randomAnswer = answers[Math.floor(Math.random()*answers.length)];

  
  document.getElementById("result").innerHTML = userInput + "? " + randomAnswer;
};
