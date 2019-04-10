$(document).ready();


/* 
1. Need to create a countdown timer
    1.2 need to put in the html and end the game if time runs out and calcuate the score from the questions the user was able to complete. 
*/

//  set counter amount.
var counter = 25 
// set the intervla to once a second:
var intervalId;

function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
    }
      
//  The decrement function.
function decrement() {
//  Decrease number by one.
counter--;
//  Show the number counting down on the html page. 
$("#time-remaining").html("<h2>" + counter + " Seconds! </h2>");
//  Once number hits zero...
if (counter === 0) {
    //  ...run the stop function.
    stop();
    //  Alert the user that time is up.
    $("#time-remaining").html("<h2>Time's Up!</h2>");
    // need to insert the function to compile the score of the answered questions when time runs out. this is the same function if they hit done. 
}
}

  //  The stop function
  function stop() {

    //  Clears our intervalId
    //  We just pass the name of the interval
    //  to the clearInterval function.
    clearInterval(intervalId);
  }

  //  Execute the run function.
  run();    
      

// 1. place the array of quesitons and answer choices on the text using the id found in the in html.

// create variables
    // an array for questions and answers
    questions = [
        {
        promt:" ",
        answer:""
        }, 
        {
        promt:" ",
        answer:""
        }
    ]
    // variable to hold the score of correct answers:
    score = 0
    // variable to hold the user answer choices: 
    userChoices = []



// loop to go through the questions array:
for (var i=0; i< questions.length; i++){

}
/*
2. capture and store the user answer from the button answer clicks on the html page. 
    2.1 confirm if the user answer is correct and update the score. 
3. when the user clicks the "done" button on the bottom of the page, the total score is updated and shown on a results page. 

*/