'use strict';

// naming variables
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const currentScore0el = document.getElementById('current--0');
const currentScore1el = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// setting the score to zero
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

// swicth effect (bg) of the player turn
const toggle = function () {
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

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
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    // swicth to next player and reseting the score of the current player back to 0
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    // setting the current score back to 0
    currentScore = 0;
    toggle();
  }
});
