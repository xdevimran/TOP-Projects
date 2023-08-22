let options = ["Rock", "Paper", "Scissors"];
function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  let computerChoice = options[randomNumber];
  console.log(computerChoice);
  return computerChoice;
}

// you win
// computer win

function rockPaper(player1, player2) {
  if (player1 === "Rock" && player2 === "Scissors") {
    console.log("you win");
  } else if (player1 === "Scissors" && player2 === "Paper") {
    console.log("you win");
  } else if (player1 === "Paper" && player2 === "Rock") {
    console.log("you win");
  } else if (player2 === "Rock" && player1 === "Scissors") {
    console.log("computer win");
  } else if (player2 === "Scissors" && player1 === "Paper") {
    console.log("computer win");
  } else if (player2 === "Paper" && player1 === "Rock") {
    console.log("computer win");
  } else if (player2 === player1) {
    console.log("Tie");
  }
}

// const player1 = prompt();
const player1 = getComputerChoice();
const player2 = getComputerChoice();
const result = rockPaper(player1, player2);
console.log(result);
