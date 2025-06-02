const buttonColours = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = []; 
let level = 0;
let started = false;

$(document).keypress(function(e){
    let key = e.key;

    if (!started) {
        if (key === "a" || key ==="A") {
        nextSequence(); 
        level = 1;
        $("#level-title").text("Level " + level);   
        started = true;  
    } 
    }   
    });

/*
const btns = document.querySelectorAll(".btn");
    for(var i=0; i<btns.length; i++) {
    btns[i].addEventListener("click", function(e) {
        let color = e.currentTarget.id;
        //console.log(e.currentTarget.id);
        playAudio(color);
        } );
    }
*/

$(".btn").click( function(e) {
    let userChosenColor = e.currentTarget.id;
    playSound(userChosenColor);
    userClickedPattern.push(userChosenColor);
    animatePress(userChosenColor);
    const index = userClickedPattern.length -1;
    checkAnswer(index);  
    //console.log(userClickedPattern);
      
})


function nextSequence() {
    level++;
    const randomNumber = Math.floor(Math.random() * 4);
    
    let randomChosenColour;
    randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100)    //delay(100).fadeOut().fadeIn(100)

    playSound(randomChosenColour);
   
    $("#level-title").text("Level " + level);
    console.log("game" + gamePattern);
    userClickedPattern =[];
      
}


function playSound(name) {
  new Audio("./sounds/" + name + ".mp3").play();
}

function animatePress(currentColour) {
    $("#" + currentColour).addClass("pressed");
    
    setTimeout( function() {
        $("#" + currentColour).removeClass("pressed");
    }, 100)
}

function checkAnswer(currentLevel) {
 
    const gameChoice = gamePattern[currentLevel]
    const userChoice = userClickedPattern[currentLevel];  
    if (userChoice === gameChoice) {
        console.log("equal");  
        if (userClickedPattern.length === gamePattern.length){
          setTimeout( function() {
        nextSequence();   
        }, 1000);
        }     
    } else {
        console.log("not equal");

        $("body").addClass("game-over");

        setTimeout( function() {
            $("body").removeClass("game-over")
        }, 200);

        $("h1").text("Game Over, Press A Key to Restart");
        startOver();
        }    
    }

    function startOver() {
        level = 0;
        started = false;
        gamePattern = [];
    }
    




 //let playSound = () => new Audio("src").play()
    //<button onclick="playSound()">Play</button>