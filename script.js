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

let scores, currentScore, activePlayer, playing;

const initialValue = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;

  // checking if the game is still playing
  playing = true;

  // setting the score to zero
  score0El.textContent = 0;
  score1El.textContent = 0;
  currentScore0el.textContent = 0;
  currentScore1el.textContent = 0;

  diceEl.classList.add('hidden');
};

initialValue();

// swicth effect (bg) of the player turn
const toggle = function () {
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

const nxtPlayer = function () {
  // swicth to next player and reseting the score of the current player back to 0
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;

  // setting the current score back to 0
  currentScore = 0;
  toggle();
};

const winner = function () {
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.add('player--winner');
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--active');
};

const reset = function () {
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--winner');
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.add('player--active');
};

// rolling the dice
btnRoll.addEventListener('click', function () {
  if (playing) {
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
      nxtPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    // add current score to active player score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // check if the score of the player is >= 100. if so the game ends.
    if (scores[activePlayer] >= 10) {
      playing = false;
      diceEl.classList.add('hidden');
      winner();
    } else {
      nxtPlayer();
    }
  }
});

btnNew.addEventListener('click', function () {
  reset();
  initialValue();
});
