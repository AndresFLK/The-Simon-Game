
var buttonColours = ["red","blue","green","yellow",];

var gamePattern = [];
var userPattern = [];

var started = false; 
var level = 0;

$(document).keypress(function() {
    if (!started) {
      $("#level-title").text("Level " + level);
      nextSequence();
      started = true;
    }
});

$(".btn").click(function(){

    var userChose = $(this).attr("id");
    userPattern.push(userChose);

    playSound(userChose);
    pressAnimation(userChose);

    verification(userPattern.length - 1);
});


function verification(currentLevel){
    if (gamePattern[currentLevel] === userPattern[currentLevel]) {

        console.log("success");
  
        if (userPattern.length === gamePattern.length){
          setTimeout(function () {
            nextSequence();
          }, 1000);
        }
  
      } else {
  
        console.log("wrong");
  
        playSound("wrong");
  
        $("body").addClass("game-over");
        setTimeout(function () {
          $("body").removeClass("game-over");
        }, 200);
  
        $("#level-title").text("Game Over, Press Any Key to Restart");
  
        //2. Call startOver() if the user gets the sequence wrong.
        startOver();
      }

}

function nextSequence(){

    userPattern = [];
    level++;
    $("h1").text("Level " + level);

    var randomNumber = Math.floor(Math.random() * 4);
    var chosenColour = buttonColours[randomNumber];
    gamePattern.push(chosenColour);

    $("#"+chosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100); 
    playSound(chosenColour);
}

function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function pressAnimation(colour){ 
    $("#" + colour).addClass("pressed");
    setTimeout(function () {
        $("#" + colour).removeClass("pressed");
    }, 200);
}


function startOver() {
    level = 0;
    gamePattern = [];
    started = false;
  }
