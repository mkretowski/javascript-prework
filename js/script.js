{
  const STONE = "kamień";
  const PAPER = "papier";
  const SCISSORS = "nożyce";
  let X = 0;
  let Y = 0;
  let roundNumber = 0;

  const getMoveName = function (argMoveId) {
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
  };

  const getResult = function (argComputerMove, argPlayerMove) {
    if (
      (argComputerMove == STONE && argPlayerMove == PAPER) ||
      (argComputerMove == PAPER && argPlayerMove == SCISSORS) ||
      (argComputerMove == SCISSORS && argPlayerMove == STONE)
    ) {
      X = X + 1;
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
    Y = Y + 1;
    return "Komputer wygrywa";
  };

  const playGame = function (argplayerInput) {
    clearMessages();
    let playerInput = argplayerInput;
    let randomNumber = Math.floor(Math.random() * 1.35 + 1.85);
    console.log("Wylosowana liczba to: " + randomNumber);
    let computerMove = getMoveName(randomNumber);
    printMessage("Mój ruch to: " + computerMove);

    console.log("Gracz wpisał: " + playerInput);
    let playerMove = getMoveName(playerInput);
    printMessage("Twój ruch to: " + playerMove);

    roundNumber = roundNumber + 1;
    printMessage("Wynik rundy: " + getResult(computerMove, playerMove));
    printMessage(
      "Wynik po " +
        roundNumber +
        " rundzie: <br>Komputer: " +
        Y +
        " <br>Gracz: " +
        X
    );
    printMessage(
      "Procent przegranych rund przez komputer: " +
        Math.round((X / roundNumber) * 100) +
        "%"
    );
  };

  const doMultipleRounds = function () {
    for (let i = 0; i < 10000; i++) {
      playGame(3);
      //playGame(Math.floor(Math.random() * 3 + 1));
    }
  };

  document.getElementById("play-rock").addEventListener("click", function () {
    playGame(1);
  });
  document.getElementById("play-paper").addEventListener("click", function () {
    playGame(2);
  });
  document
    .getElementById("play-scissors")
    .addEventListener("click", function () {
      playGame(3);
    });
  document
    .getElementById("play-multiplerounds")
    .addEventListener("click", function () {
      doMultipleRounds();
    });
}
