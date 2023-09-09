var buttonColors = ["red","blue","yellow","green",];
var gamePattern = [];

function nextSequence(){
    return Math.floor(Math.random() * 4);  
}

var chosenColor = buttonColors[nextSequence];
gamePattern.push(chosenColor);