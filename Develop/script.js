// 1 - ask for user input 
// 2 - check if the user entered value is R,S or P. (using if statement)
// 3 - calculate random value out of R,S or P and assign it varialbe called computerChoice.
// 4 - compare the values of userChoice and computer Choice in same case(lower or UPPER).
// 5 - display a message with the result. (using windows.alert)
var userChoice = "";
var computerChoice = "";
var allowedValues = ["R", "S", "P"]
var score = {
    userWin: 0,
    computerWin: 0,
    tie: 0
}
function captureUserInput() {
    userChoice = window.prompt("Enter R,S,P");
    if (!allowedValues.includes(userChoice)) {
        window.alert("Invalid value entered");
        captureUserInput();
    }
}
function captureComputerValue() {
    //randomly selects value from allowedValues
    var random = Math.floor(Math.random() * allowedValues.length);
    console.log(random);
    debugger
    computerChoice = allowedValues[random];
    window.alert(`computer entered ${computerChoice}`);
}
function compareValues() {
    if (userChoice === computerChoice)
    {
        window.alert("It's a tie")
        score.tie++;
    }
    else if ((userChoice === 'R' && computerChoice === 'S') ||
        (userChoice === 'S' && computerChoice === 'P') ||
        (userChoice === 'P' && computerChoice === 'R')) {
        window.alert("User win");
        score.userWin++; 
    }
    else {
        window.alert("Computer win");
        score.computerWin++;
    }
}
function game() {
    captureUserInput();
    captureComputerValue();
    compareValues();
    var playAgain = window.confirm("Play Again");
    if(playAgain)
      game();
}
game();