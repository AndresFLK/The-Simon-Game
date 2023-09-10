var buttonColors = ["red","blue","yellow","green",];
var gamePattern = [];
var userPattern = [];

function nextSequence(){
    return Math.floor(Math.random() * 4);  
}

function play(){
    randomNumber = nextSequence();
    
    var chosenColor = buttonColors[randomNumber];
    switch(chosenColor){
        case "red":
            var audio = new Audio("./sounds/red.mp3");
            audio.play();
        case "blue":
            var audio = new Audio("./sounds/blue.mp3");
            audio.play();
        case "yellow":
            var audio = new Audio("./sounds/yellow.mp3");
            audio.play();
        case "green":
            var audio = new Audio("./sounds/green.mp3");
            audio.play();
    }
    $("#"+chosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    gamePattern.push(chosenColor); 
}


$(".btn").click(function(){
    var userChose = $(this).attr("id");
     userPattern.push(userChose);
    console.log(userPattern);
})
    




