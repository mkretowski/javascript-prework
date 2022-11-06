function getMoveName(argMoveId){
    if(argMoveId == 1){
      return 'kamień';
    }
    if(argMoveId == 2){
        return 'papier';
      }
    if(argMoveId == 3){
        return 'nożyce';
    }
  
    printMessage('Nie znam ruchu o id ' + argMoveId + '.');
    return 'nieznany ruch';
}

function displayResult(argComputerMove, argPlayerMove){
    if( (argComputerMove == 'kamień' && argPlayerMove == 'papier') || (argComputerMove == 'papier' && argPlayerMove == 'nożyce') || (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') ){
        return 'Ty wygrywasz!';
    }if (argComputerMove == argPlayerMove) {
        return 'Remis';
    }if (argPlayerMove == 'nieznany ruch') {
        return 'Nieznany ruch gracza';
    }if (argComputerMove == 'nieznany ruch') {
        return 'Nieznany ruch komputera';
    }
    
    return 'Komputer wygrywa';
    
}

let randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('Wylosowana liczba to: ' + randomNumber);
let computerMove = getMoveName(randomNumber);
printMessage('Mój ruch to: ' + computerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
console.log('Gracz wpisał: ' + playerInput);
let playerMove = getMoveName(playerInput);
printMessage('Twój ruch to: ' + playerMove);

printMessage('Wynik: ' + displayResult(computerMove, playerMove));






/*if(randomNumber == 1){
//    computerMove = 'kamień';
//}else if (randomNumber == '2') {
//	computerMove = 'papier';
//}else if (randomNumber == '3') {
//	computerMove = 'nożyce';
}

if(playerInput == '1'){
    playerMove = 'kamień';
}else if (playerInput == '2') {
	playerMove = 'papier';
}else if (playerInput == '3') {
	playerMove = 'nożyce';
}

if( computerMove == 'kamień' && playerMove == 'papier'){
    printMessage('Ty wygrywasz!');
}else if (computerMove == 'papier' && playerMove == 'nożyce') {
    printMessage('Ty wygrywasz!');
}else if (computerMove == 'nożyce' && playerMove == 'kamień') {
    printMessage('Ty wygrywasz!');
}else if (computerMove == playerMove) {
    printMessage('Remis');
}else if (playerMove == 'nieznany ruch') {
    printMessage('Nieznany ruch gracza');
}else if (computerMove == 'nieznany ruch') {
    printMessage('Nieznany ruch komputera');
}else {
    printMessage('Komputer wygrywa');
}*/

