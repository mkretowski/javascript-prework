const STONE = "kamień";
const PAPER = "papier";
const SCISSORS = "nożyce";

function getMoveName(argMoveId) {
  if (argMoveId == 1) {
    return STONE;
  }
  if (argMoveId == 2) {
    return PAPER;
  }
  if (argMoveId == 3) {
    return SCISSORS;
  }

  printMessage("Nie znam ruchu o id " + argMoveId + ".");
  return "nieznany ruch";
}

function getResult(argComputerMove, argPlayerMove) {
  if (
    (argComputerMove == STONE && argPlayerMove == PAPER) ||
    (argComputerMove == PAPER && argPlayerMove == SCISSORS) ||
    (argComputerMove == SCISSORS && argPlayerMove == STONE)
  ) {
    return "Ty wygrywasz!";
  }
  if (argComputerMove == argPlayerMove) {
    return "Remis";
  }
  if (argPlayerMove == "nieznany ruch") {
    return "Nieznany ruch gracza";
  }
  if (argComputerMove == "nieznany ruch") {
    return "Nieznany ruch komputera";
  }

  return "Komputer wygrywa";
}

function playGame(argplayerInput) {
  clearMessages();
  let playerInput = argplayerInput;
  let randomNumber = Math.floor(Math.random() * 3 + 1);
  console.log("Wylosowana liczba to: " + randomNumber);
  let computerMove = getMoveName(randomNumber);
  printMessage("Mój ruch to: " + computerMove);

  console.log("Gracz wpisał: " + playerInput);
  let playerMove = getMoveName(playerInput);
  printMessage("Twój ruch to: " + playerMove);

  printMessage("Wynik: " + getResult(computerMove, playerMove));
}

document.getElementById("play-rock").addEventListener("click", function () {
  playGame(1);
});
document.getElementById("play-paper").addEventListener("click", function () {
  playGame(2);
});
document.getElementById("play-scissors").addEventListener("click", function () {
  playGame(3);
});
