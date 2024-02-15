"use strict";

let player1_totalscore = 0;
let player1_currentscore = 0;
let player2_totalscore = 0;
let player2_currentscore = 0;
let start_dice = Math.ceil(Math.random() * 6);
let game_playing = true;

/* DOM EVENTS */

let score0 = document.getElementById('score--0');
let score1 = document.getElementById('score--1');
let current1 = document.getElementById('current--0');
let current2 = document.getElementById('current--1');
// let player1 = document.getElementById('name--0');
// let player2 = document.getElementById('name--1');
let player = document.querySelector('.player')

let sectionPlayerOne = document.querySelector('.player--0')
let sectionPlayerTwo = document.querySelector('.player--1')

/* PLAYER CHANGE */

function player_change() {
    if (sectionPlayerOne.classList.contains('player--active'))
    {
    sectionPlayerOne.classList.remove('player--active')
    sectionPlayerTwo.classList.add('player--active')


    } else {
    sectionPlayerTwo.classList.remove('player--active')
    sectionPlayerOne.classList.add('player--active')
    }
}

/* R0LL DICE */
if (game_playing) {
    document.querySelector('.btn--roll').addEventListener('click', function () {
        start_dice = Math.ceil(Math.random() * 6);
        console.log(start_dice);
        document.querySelector(".dice").src = `dice-${start_dice}.png`;

        if (sectionPlayerOne.classList.contains('player--active')) {
            if (start_dice == 1) {
                player_change();
            } else {
                score0 += start_dice;
                current1.textContent = score0;
            }
        } else if (sectionPlayerTwo.classList.contains('player--active')) {
            if (start_dice == 1) {
                player_change();
            } else {
                score1 += start_dice;
                current2.textContent = score1;

            }
        }
    });
}




/* HOLD BUTTON */
document.querySelector('.btn--hold').addEventListener('click', function () {
    if (sectionPlayerOne.classList.contains('player--active'))
    {
        if (score0 + current1 >= 100)
        {
           console.log("player 1 kazandı")
        } else if (current1 <= 100 ) {
            current1 += score0
            score0 = 0
            player_change()
        }
    } else if (sectionPlayerTwo.classList.contains('player--active'))
    {
        if (score1 + current2 >= 100)
        {
           console.log("player 2 kazandı")
        } else if (current2 <= 100 ) {
            current2 += score1
            score1 = 0
            player_change()
        }
    }
})


/* NEW GAME */
document.querySelector('.btn--new').addEventListener('click', function () {
resetGame()
sectionPlayerOne.classList.remove('player--winner')
sectionPlayerTwo.classList.remove('player--winner')

})

/* RESET GAME */
function resetGame() {
    if (player2_totalscore > player1_totalscore) {
        player2.classList.add('player--winner');
    } else if (player2_totalscore < player1_totalscore) {
        player1.classList.add('player--winner');
    }

    score0 = 0;
    score1 = 0;
    current1 = 0;
    current2 = 0;

    score0.textContent = player1_totalscore;
    score1.textContent = player2_totalscore;
    current1.textContent = player1_currentscore;
    current2.textContent = player2_currentscore;
}


function deger(One,two) {
    deger = One - two;
    return deger;
}

console.log(deger(5,3));