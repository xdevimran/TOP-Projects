let options = ["Rock", "Paper", "Scissors"];
function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  let computerChoice = options[randomNumber];
  return computerChoice;
}

function rockPaper(player1, player2) {
  if (player1 === "Rock" && player2 === "Scissors") {
    return "You win";
  } else if (player1 === "Scissors" && player2 === "Paper") {
    return "You win";
  } else if (player1 === "Paper" && player2 === "Rock") {
    return "You win";
  } else if (player2 === "Rock" && player1 === "Scissors") {
    return "Computer win";
  } else if (player2 === "Scissors" && player1 === "Paper") {
    return "Computer win";
  } else if (player2 === "Paper" && player1 === "Rock") {
    return "Computer win";
  } else if (player2 === player1) {
    return "Tie";
  }
}

const buttons = document.querySelectorAll(".playButton");
for (let button of buttons) {
  button.addEventListener("click", function () {
    const player1 = button.innerText;
    const player2 = getComputerChoice();
    const result = rockPaper(player1, player2);
    const youChoose = document.getElementById("youChoose");
    constcomputerChoose = document.getElementById("computerChoose");
    youChoose.innerText = button.innerText;
    constcomputerChoose.innerText = player2.innerText;
    const whoWin = document.getElementById("whoWin");
    whoWin.innerText = result;
  });
}
