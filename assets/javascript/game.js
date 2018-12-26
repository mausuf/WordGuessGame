var computerWords = ["BONE", "APPLE", "TEA"];
var blankLines = [];
var test = "testing"
var blanks = "_"


//test

var computerGuess = computerWords[Math.floor(Math.random()* computerWords.length)];
for (i=0; i<test.length; i++) {
    blankLines.push(blanks);
    alert(blankLines);};

    document.getElementById("112").innerHTML = blankLines
   


var userGuess = event.key;