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

function getPlayerMove(move) {
    return move || getInput();
}

function getComputerMove(move) {
    return move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;

     if (playerMove == "rock") {
        if (computerMove == "rock") {
    	winner = "tie";
    	} else if (computerMove == "paper") {
    	winner = "computer";
    	} else {
    	winner = "player";
    	}
    } else if (playerMove == "paper") {
    	if (computerMove == "paper") {
    		winner = "tie";
    	} else if (computerMove == "scissors") {
			winner = "computer";
		} else {
    		winner = "player";
    	}
    } else if (playerMove == "scissors") {
    	if (computerMove == "scissors") {
    			winner = "tie";
    	} else if (computerMove == "rock") {
    			winner = "computer";
    	} else {
    			winner = "player";
    	}
    }     else {
                winner = "Error";
    }
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    while ((playerWins < 5) && (computerWins < 5)) {
        var playerMove = getPlayerMove();
        console.log("Player chose " + playerMove);
        var computerMove = getComputerMove();
        console.log("Computer chose " + computerMove);
        var winner = getWinner(playerMove, computerMove);


        if (winner == "player") {
            playerWins += 1;
            computerWins = computerWins;
            console.log("Player chose " + playerMove + " while Computer chose " + computerMove);
            console.log("The score is currently " + playerWins + " to " + computerWins);
        } else if (winner == "computer") {
            playerWins = playerWins;
            computerWins += 1;
            console.log("Player chose " + playerMove + " while Computer chose " + computerMove);
            console.log("The score is currently " + playerWins + " to " + computerWins);
        } else if (winner =="tie") {
            console.log("Result was a tie. The score is still Player: " + playerWins + " to Computer: " + computerWins);
        } else if (winner == "error") {
            console.log("Error! You must ONLY choose rock paper or scissors!");
            console.log("No score for this game. The score is still Player: " + playerWins + " to Computer: " + computerWins);


        }
    }
    return [playerWins, computerWins];
}

playToFive();
