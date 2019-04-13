$(document).ready();

// Variables: 

var questionsList = [
    {
    question: "What is the capital of Ghana ?",
    choices: ["Takoradi", "Accra", "Tamale", "Kumasi"],
    correctAnswer: 1
    },
    
    {
    question: "What is the capital of United States ?",
    choices: ["Washington", "New York", "Arlington", "Philadelphia"],
    correctAnswer: 0
    },


    {
    question: "Where is Goblin Valley ?",
    choices: ["Mojave Desert", "Baja California Desert", "San Rafael Desert", "Sonoran Desert"],
    correctAnswer: 2
    },

    {
    question: "Which city is known as the Venice of the North ?",
    choices: ["Oslo", "Stockholm", "Helsinki", "Copenhagen"],
    correctAnswer: 1
    },

    {
    question: "What is the capital of Germany ?",
    choices: ["Bonn", "Munich", "Frankfurt", "Berlin"],
    correctAnswer: 3
    },

    {
    question: "Where is Stonehenge located ?",
    choices: ["Wales", "Scotland", "Ireland", "England"],
    correctAnswer: 3
    },

    {
    question: "What is the Capital of Australia ?",
    choices: ["Sydney", "Melbourne", "Canberra", "Perth"],
    correctAnswer: 2
    },

    {
    question: "What is the capital of Germany? ",
    choices: ["Bonn", "Munich", "Frankfurt", "Berlin"],
    correctAnswer: 3
    },

    {
    question: "What city is known as the Crescent City ?",
    choices: ["Istanbul", "New Orleans", "Baghdad", "Berlin"],
    correctAnswer: 1
    },

    {
    question: "Which city is known for Curry Wurst ?",
    choices: ["New York", "London", "Mumbai", "Berlin"],
    correctAnswer: 3
    },
   
  ];

// timer counter:
var counter = 5
// Set score to zero:
var score = 0;
var incorrect = 0;
// Set question count to zero to track what question user is on:
var questionCount= 0;
// create variable id for the counter interval:
var intervalId;

// Time Counter functions: 

    // set the interval to once a second:
function runTimer() {
    $("#time-remaining").text(counter);
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
    displayTrivia();
}

    //  The decrement function.
function decrement() {
    //  Decrease number by one.
    counter--;
    //  Show the number counting down on the html page. 
    $("#time-remaining").text(counter);
    //  Once number hits zero...
    if (counter === 0) {
        //  ...run the stop function.
        stopTimer();
        //  Alert the user that time is up.
        $("#time-remaining").text("Time's Up!");
        incorrect++;
        questionCount++;
        $(".answers").addClass("hide");
        $(".questions").addClass("hide");
        console.log(score);
        $("#next").attr("disabled", false);

        $("#next").click(function(){
            $("#next").attr("disabled", true);
            $(".answer").attr("disabled", false);
            //console.log("click");
            //console.log(questionCount);
            //console.log(questionsList.length);
            if (questionCount <= questionsList.length-1){
                //console.log("test");
                counter= 5;
               runTimer();
               $(".answers").removeClass("hide");
               $(".questions").removeClass("hide");
            }
        })
        

        // need to insert the function to compile the score of the answered questions when time runs out. this is the same function if they hit done. 
    }
}
    //  The stop function
function stopTimer() {
    //  Clears our intervalId, We just pass the name of the interval to the clearInterval function.
    clearInterval(intervalId);
    }
    //  Execute the run function.
runTimer();    


function displayTrivia(){
    $("#questions").each(function(index){
        var questionText = questionsList[questionCount].question;
        $(this).text(questionText);
    })
    $(".answer").each(function(index){
        var answerText = questionsList[questionCount].choices[index];
        $(this).text(answerText);
    })
}

$(".answer").click(function(){
    var userAnswer = $(this).text();
    $(".answer").attr("disabled", true);
    if (userAnswer === questionsList[questionCount].choices[questionsList[questionCount].correctAnswer]){
        console.log("you got it right");
        score++;
        console.log(score);
    } else {
        console.log("wrong!");
        incorrect++;
    }
    stopTimer();
    

// let user know if they got it right or wrong. 

    if (questionCount === questionsList.length-1){
        console.log("end of game");
        // show scores
        $(".answers").addClass("hide");
        $("#next").addClass("hide");
        $(".questions").addClass("hide");
        var showScore = $("<h2>").text("so, you got " + score + " total questions correct!");
        $("#content").append(showScore);

    } else {
        questionCount++;
    }
    

    $("#next").attr("disabled", false);

})

// next button function: 

$("#next").click(function(){
    $("#next").attr("disabled", true);
    $(".answer").attr("disabled", false);
    //console.log("click");
    //console.log(questionCount);
    //console.log(questionsList.length);
    if (questionCount <= questionsList.length-1){
        //console.log("test");
        counter= 5;
       runTimer();
    }
})


/*
Original pseudocode:

for ( var i = 0; i < questionsList.length; i++ ) {
        var question = questionsList[i].question;
        //var quest1 = questions[0].question;
        //var quest2 = questions[1].question;
        //var quest3 = questions[2].question;
        //var quest4 = questions[3].question;
        ///console.log(quest3)
        $("#questions").html(question);
        //document.write ( question );
        var ans1 = questionsList[i].choices[0];
        var ans2 = questionsList[i].choices[1];
        var ans3 = questionsList[i].choices[2];
        var ans4 = questionsList[i].choices[3];
        //console.log(ans1)
        $("#choice0").html(ans1);
        $("#choice1").html(ans2);
        $("#choice2").html(ans3);
        $("#choice3").html(ans4);

}


2. capture and store the user answer from the button answer clicks on the html page. 

$(".button").click(

    // variable to hold the user answer choices: 
    userChoices = [];

    //
)

    //2.1 Allow only one button to be chosen, and need confirm if the user answer is correct and update the score. 

    // tie the questions[i].answer to the button id number, 
        //if the button clicked by the user is correct then up the score 1++, and move to next question.


        //2.2 upon a click of next, move to the next question in the array.


//})

    //3. When all when the user clicks the "done" button on the bottom of the page, the total score is updated and shown on a results page. 

$("#allDone").click( 
    
    function showResults(){
        $("#final-score").html()
        

//function showResults ()
//the the quesitons and display the total score.
    }
    )

//  create a reset button? to reset the page. 


// question randomizer i am not going to use at this time?: 
//var randomQuestion = questionList[Math.floor(Math.random()*questionList.length)];
//console.log(randomQuestion)
//$("#questions").text(randomQuestion)

*/