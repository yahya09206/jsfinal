/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

// Variables for game
var scores, roundScore, activePlayer;

scores = [0,0];
roundScore = 0;
activePlayer = 1;

//Use query selector to change element of css
document.querySelector('.dice').style.display = 'none';

// Hide dice on page load
document.querySelector('.btn-roll').addEventListener('click', function(){
	//1. random number
		// Generate random number for dice
		var dice = Math.floor(Math.random() * 6) + 1;

	//2. display result
		var diceDOM = document.querySelector('.dice');
		// match dice result with match picture
		diceDOM.style.display = 'block';
		diceDOM.src = 'dice-' + dice + '.png';

	//3. update round score only if rolled number was not a 1
});


//Selecting elements from webpage using DOM
// document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';
// document.querySelector('#current-' + activePlayer).textContent = dice;

// Read elements from webpage then store inside variable aka getter
// var x = document.querySelector('#score-0').textContent;
// console.log(x);
