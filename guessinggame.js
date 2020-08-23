// CREATE SECRET NUMBER
var secretNumber = 4;

// ASK USER FOR GUESS
var stringGuess = prompt("Guess A Number");
var guess = Number(stringGuess);

// CHECK GUESS
if(guess === secretNumber) {
    alert("YOU GOT IT RIGHT!");
}

// OTHERWISE CHECK IF HIGHER
else if(guess >  secretNumber) {
    alert("Too High, Guess Again");
}

//OTHERWISE CHECK IF LOWER
else  {
    alert("Too Low, Guess Again");
}