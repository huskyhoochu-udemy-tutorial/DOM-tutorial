/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, gamePlaying;

function init() {
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;

// 모든 점수를 초기
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
}

init();

document.querySelector('.btn-roll').addEventListener('click', function () {
    if (gamePlaying) {

        // 1. Random number
        var dice = Math.floor(Math.random() * 6) + 1;

        // 2. Display the result
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';
        document.querySelector('#current-' + activePlayer).textContent = dice.toString();

        // 3. Update the round score if the rolled number was not a 1

        if (dice !== 1) {
            roundScore += dice;
            document.querySelector('#score-' + activePlayer).textContent = roundScore;
        } else {
            // 삼항 연산자
            activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
            document.getElementById('current-0').textContent = '0';
            document.getElementById('current-1').textContent = '0';
        }
    }
});

document.querySelector('.btn-new').addEventListener('click', init);

