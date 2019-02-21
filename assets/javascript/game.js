var gameArray = [
  {
    Q:
      "The spice trade is believed to have been first established in India as early as:",
    a: "a.  3000 BC",
    b: "b.	1150 BC",
    c: "c.	700 AD",
    d: "d.	1200 AD",
    answer:"a",
    info: "3000 BC - Trade was focused in the southwest coastal port of Muziris.",
  },
  {
    Q: "In which country are the greatest number of ancient pyramids?",
    a: "a.  Peru",
    b: "b.	Mexico",
    c: "c.	Egypt",
    d: "d.	Sudan",
    answer:"d",
    info: "Sudan - About 220 pyramids have been discovered in Sudan's Nile valley.  Egypt has about 120."
  },
  {
    Q: "In which country/region was the first compass invented?",
    a: "a.  Italy",
    b: "b.	Middle East",
    c: "c.	China",
    d: "d.	France",
    answer: "c",
    info: "blah blah blah",
  },
  {
    Q:
      "Ships from which civilization were the first to circumnavigate the African continent?",
    a: "a.  Portuguese",
    b: "b.	Phoenician",
    c: "c.	Egyptian",
    d: "d.	Greek",
    answer: "c",
    info: "mee mee mee",
  },
  {
    Q:
      "At the same time that Rome was flourishing, what people were making extended ocean voyages in the Pacific?",
    a: "a.  Huns",
    b: "b.	Polynesians",
    c: "c.	Inca",
    d: "d.	Chinese",
    answer: "b",
    info: "foo foo foo",
  }
];

// Global variables:
var intervalId;
var counter = 0;
var clockRunning = false;
var time = 20; //change when game is complete

var answer;
var isAnswerChosen = false;
var isAnswerCorrect;

var correct = 0;
var missed = 0;
var finalScore;

var quoteKiller = {
    a: "'a'",
    b: "'b'",
    c: "'c'",
    d: "'d'"
}

//Function that displays the current question:

//function that processes submitted answer
var Submit = function(x){
    console.log(x)
        clearInterval(intervalId);
        clockRunning = false;
    isAnswerChosen = true;
    if (x === gameArray[counter].answer){
        isAnswerCorrect = true;
        console.log("is Answer correct? " + isAnswerCorrect);
        answer()
    }
    else {
        isAnswerCorrect = false;
        console.log("is Answer correct? " + isAnswerCorrect);
        answer()
    }
}

var askQ = function() {
  if (counter < gameArray.length) {
    console.log(gameArray.length);
    $("#gameSpace").append("<br><p>" + gameArray[counter].Q + "</p>");
    $("#gameSpace").append(
      '<button type="button" class="btn btn-secondary btn-lg" onclick="Submit('+quoteKiller.a+')">' + gameArray[counter].a + '</button>'
    );
    $("#gameSpace").append(
      '<button type="button" class="btn btn-secondary btn-lg" onclick="Submit('+quoteKiller.b+')">' + gameArray[counter].b + '</button>'
    );
    $("#gameSpace").append(
      '<button type="button" class="btn btn-secondary btn-lg" onclick="Submit('+quoteKiller.c+')">' + gameArray[counter].c + '</button>'
    );
    $("#gameSpace").append(
      '<button type="button" class="btn btn-secondary btn-lg" onclick="Submit('+quoteKiller.d+')">' + gameArray[counter].d + '</button>'
    );
  } else {
    clearInterval(intervalId);
    clockRunning = false;
    $("#gameSpace").html("<h3> Correct answers: " + correct + "</h3>");
    $("#gameSpace").append("<br><h3> Incorrect answers: " + missed + "</h3>");
    finalScore = Math.floor((correct / (correct + missed))*100)+"%";
    $("#gameSpace").append("<br><h3> Final Score: " + finalScore + "</h3>");
  }
};

// function that decrements time and calls functions when time runs out
var countDown = function() {
  time--;
  $("#timerSpace").text("Time Remaining: " + time);
  if (time < 1) {
    answer();
    setTimeout(game, 7000); //change when game complete
  }
};

//function that sets the interval for decrementing time
var timer = function() {
  if (!clockRunning) {
    intervalId = setInterval(countDown, 1000);
    clockRunning = true;
  }
};

//function that displays the answer
var answer = function() {
    if (counter < gameArray.length) {
        if (isAnswerChosen === false){
            $("#gameSpace").append("<h3> Out of time! The answer is: " + gameArray[counter].answer + "</h3>");
            $("#gameSpace").append("<h4>" + gameArray[counter].info + "</h4>");
            counter++;
            console.log("counter" +counter);
            missed++;
            console.log("missed" +missed);
            clearInterval(intervalId);
            clockRunning = false;
            setTimeout(game, 20000); //change when game complete
        }
        else if (isAnswerCorrect){
            correct++;
            console.log("correct" + correct);
            $("#gameSpace").append("<h3> Correct! The answer is: " + gameArray[counter].answer + "</h3>");
            $("#gameSpace").append("<h4>" + gameArray[counter].info + "</h4>");
            counter++;
            setTimeout(game, 20000); //change when game complete
        }   
        else {
            missed++;
            console.log("incorrect" + missed);
            $("#gameSpace").append("<h3> Nope. The answer is: " + gameArray[counter].answer + "</h3>");
            $("#gameSpace").append("<h4>" + gameArray[counter].info + "</h4>");
            counter++;
            setTimeout(game, 20000); //change when game complete
        }
    }
};



//inside game function:

// function that runs the timer

// function that displays the answer

// document ready. listener for start button, which calls the game function

$(document).ready(function() {
   
  // function that displays the next question in the array

  $("#startGame").on("click", function() {
    game();
  });

  //function for the selection of answer
  
});

var game = function() {
  time = 20; //change when game is complete
  isAnswerChosen = false;
  isAnswerCorrect;
  $("#gameSpace").html(
    '<h2 id = "timerSpace">' + "Time Remaining: " + time + "</h2>"
  );
  askQ();
  timer();
};
