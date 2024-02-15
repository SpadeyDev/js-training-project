"use strict"; 
/* variables */

let diceNumber = Math.trunc(Math.random() * 6) + 1;
let score1 = 0;
let score2 = 0; 
let totalScore = 0;
let totalScore2 = 0;
let playing = true;

/* dom */

const scoreElement0 = document.getElementById('score--0');
const scoreElement1 = document.getElementById('score--1');
const currentElement0 = document.getElementById('current--0');
const currentElement1 = document.getElementById('current--1');
const player0Element = document.querySelector('.player--0');
const player1Element = document.querySelector('.player--1');

scoreElement0.textContent = totalScore;
scoreElement1.textContent = totalScore2;

/* player change */

function playerChange() {
    if (player0Element.classList.contains('player--active')) {
      player0Element.classList.remove('player--active');
      player1Element.classList.add('player--active');
      score1 = 0;
      currentElement0.textContent = score1;
    } else {
      player0Element.classList.add('player--active');
      player1Element.classList.remove('player--active');
      score2 = 0;
      currentElement1.textContent = score2;
    }
  }
/* roll dice */

if(playing) {
    document.querySelector('.btn--roll').addEventListener('click', function () {
    diceNumber = Math.trunc(Math.random() * 6) + 1;
    document.querySelector('.dice').src = `dice-${diceNumber}.png`; 
    console.log(diceNumber);
    
    if(player0Element.classList.contains('player--active')){
        if(!(diceNumber === 1)){
            score1 += diceNumber;
            currentElement0.textContent = score1;
        } else {
            playerChange();
        } 
    }
    else if (player1Element.classList.contains('player--active')){
        if(!(diceNumber === 1)){
            score2 += diceNumber;
            currentElement1.textContent = score2;
        } else {
            playerChange();
        }
    }
    }
);
}

/* click hold */

document.querySelector('.btn--hold').addEventListener('click', function () {
    if (player0Element.classList.contains('player--active')) {
      totalScore += score1;
      scoreElement0.textContent = totalScore;
      score1 = 0;

      if (totalScore >= 100) {
        console.log('1. player win');
        resetGame(player0Element);
        playing = false;
      } else {
        playerChange();
      }
    } else if (player1Element.classList.contains('player--active')) {
      totalScore2 += score2;
      scoreElement1.textContent = totalScore2;
      score2 = 0;

      if (totalScore2 >= 100) {
        console.log('2. player win');
        resetGame(player1Element);
        playing = false;
      } else {
        playerChange();
      }
    }
  });


/* new game */

document.querySelector('.btn--new').addEventListener('click', function () {
    resetGame(player0Element);
    player0Element.classList.remove('player--winner');
    player1Element.classList.remove('player--winner');

});

/* reset game */

function resetGame(activePlayerElement) {
    score1 = 0;
    score2 = 0;
    totalScore = 0;
    totalScore2 = 0;

    currentElement0.textContent = score1;
    currentElement1.textContent = score2;
    scoreElement0.textContent = totalScore;
    scoreElement1.textContent = totalScore2;

    player0Element.classList.remove('player--active','player--winner');
    player1Element.classList.remove('player--active','player--winner');
   
    activePlayerElement.classList.add('player--active','player--winner');
}