let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = 'nieznany ruch';

if(playerInput == '1'){
  playerMove = 'kamień';
}else if (playerInput == '2') {
	printMessage('papier');
} else {
	printMessage('nożyce');
}

printMessage('Twój ruch to: ' + playerMove);
