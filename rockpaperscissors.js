////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////


var move;
var playerMove;
var computerMove;
var winner;
var playerWins;
var computerWins;

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.

    }
    return move || getInput()';
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return move || 'randomPlay()';
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
    var playerMove = getPLayerMove();
    var computerMove = getComputerMove();

    if (playerMove == "rock") {
       if (computerMove == "rock"){
          winner = "tie";
       } else if (computerMove == "scissors") {
          winner = "player";
       } else {
          winner = "computer";
       }
    }  else if (playerMove == "paper") {
          if (computer == "paper") {
          winner = "tie;
      } else if (computer == "rock") {
          winner = "player";
      } else {
          winner = "computer";
      } else if (playerMove == "scissors") {
        if (computerMove == "scissors") {
          winner = "tie";
      } else if (computerMove == "paper") {
          winner = "player";
      } else {
          winner = "computer";
      } else {
           winner == "Error";
    }
        return winner;
  }


    function playToFive() = {
    console.log("Let's play rock, paper, scissors");
    var playeWins = 0;
    var computerWins = 0;


    while ((playerWins < 5) && (computerWins < 5)) {
    var playerMove = getPlayerMove();
    console.log("Player chose " + playerMove);
    var computerMove = getComputerMove():
    console.log("Computer chose " + computerMove);
    var winner = getWinner();




        if (winner == "player") {
        playerWins +=1;
        computerWins = computerWins;
        console.log("The winner of this round is " + winner);
        console.log("The score is currently " + playerWins + "to " + computerWins);
    }
        else if (winner == "computer") {
        computerWins += 1;
        playerWins = playerWins;
        console.log("The winner of this round is " + winner);
        console.log("The score is currently " + playerWins + "to " + computerWins);
    }
        else if (winner == "tie") {
        console.log("Result was a tie. The score is still Player: " + playerWins + " to Computer: " + computerWins);
    }   else if {
        winner == "Error";
        console.log("Error! You MUST only choose rock, paper, or scissors!");
    }
}
        return [playerWins, computerWins];
}

playToFive();
