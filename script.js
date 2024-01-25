'use strict';

// naming variables
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const currentScore0el = document.getElementById('current--0')
const currentScore1el = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// setting the score to zero
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

let currentScore = 0;

// rolling the dice
btnRoll.addEventListener('click', function () {
  // generating a random dice roll from 1 to 6
  const dice = Math.trunc(Math.random() * 6) + 1;

  // display dice
  diceEl.classList.remove('hidden');
  diceEl.src = `/images/dice-${dice}.png`;

  // check if the dice value is 1
  if (dice !== 1) {
    // add value of dice to current score
    currentScore += dice;
    currentScore0el.textContent = currentScore
  } else {
    // swicth to next player
    currentScore1el.textContent = currentScore;
  }
});
