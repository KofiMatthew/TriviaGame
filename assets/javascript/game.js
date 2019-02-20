var gameArray = [
    {
        Q: "The spice trade is believed to have been first established in India as early as:",
        a: "a.  3000 BC",
        b: "b.	1150 BC",
        c: "c.	700 AD",
        d: "d.	1200 AD",
        answer: "a. 3000 BC - Trade was focused in the southwest coastal port of Muziris.  "
    },{
        Q: "In which country are the greatest number of ancient pyramids?",
        a: "a.  Peru",
        b: "b.	Mexico",
        c: "c.	Egypt",
        d: "d.	Sudan",
        answer: "d. Sudan - About 220 pyramids have been discovered in Sudan's Nile valley.  Egypt has about 120."
    },{
        Q: "In which country/region was the first compass invented?",
        a: "a.  Italy",
        b: "b.	Middle East",
        c: "c.	China",
        d: "d.	France",
        answer: "c"
    },{
        Q: "Ships from which civilization were the first to circumnavigate the African continent?",
        a: "a.  Portuguese",
        b: "b.	Phoenician",
        c: "c.	Egyptian",
        d: "d.	Greek",
        answer: "c" 
    },{
        Q: "At the same time that Rome was flourishing, what people were making extended ocean voyages in the Pacific?",
        a: "a.  Huns",
        d: "b.	Polynesians",
        b: "c.	Inca",
        c: "d.	Chinese",
        answer: "b" 
    }
]

// Global variables:
var intervalId;
var counter = 0;
var clockRunning = false;
var time = 5;

var correct = 0;
var missed = 0;
var finalScore;

//Function that displays the current question:

var askQ = function (){    
    if (counter < gameArray.length) {
        console.log(gameArray.length);
        $('#gameSpace').append('<br><p>'+ gameArray[counter].Q +'</p>');
        $('#gameSpace').append('<p class="option" id="a">'+ gameArray[counter].a +'</p>');
        $('#gameSpace').append('<p class="option" id="b">'+ gameArray[counter].b +'</p>');
        $('#gameSpace').append('<p class="option" id="c">'+ gameArray[counter].c +'</p>');
        $('#gameSpace').append('<p class="option" id="d">'+ gameArray[counter].d +'</p>');
    }
    else {
        clearInterval(intervalId);
        clockRunning = false;
        $('#gameSpace').html('<h3> Correct answers: '+ correct +'</h3>');
        $('#gameSpace').html('<br><h3> Incorrect answers: '+ missed +'</h3>');
        $('#gameSpace').html('<br><h3> Final Score: '+ finalScore +'</h3>');
    }
}

// function that decrements time
var countDown = function(){
    time--;
    $('#timerSpace').text('Time Remaining: ' + time);
    if (time < 1) {
        answer();
        clearInterval(intervalId);
        clockRunning = false;
        setTimeout(game,10000);
    }
}        

//function that sets the interval for decrementing time
var timer = function() {
    if (!clockRunning) {
        intervalId = setInterval(countDown, 1000);
        clockRunning = true;
        }
    
}

//function that displays the answer
var answer = function () {
    $('#gameSpace').append('<h3>'+ gameArray[counter].answer +'</h3>');
    counter++;
    console.log(counter)
}



//inside game function:


// function that runs the timer

// function that displays the answer 



// document ready. listener for start button, which calls the game function

$(document).ready(function(){

    // function that displays the next question in the array
    
    $('#startGame').on('click', function() {
        game();
    });
});

var game = function() {
    time = 7;
    $('#gameSpace').html('<h2 id = "timerSpace">' + "Time Remaining: " + time + '</h2>');
    askQ();
    timer();
}





