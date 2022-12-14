'use strict';
const score_0 = document.querySelector('#score--0');
const score_1 = document.querySelector('#score--1');
const player_1 = document.querySelector('.player--1');
const player_0 = document.querySelector('.player--0');

const diceEl = document.querySelector('.dice');
const btnnew = document.querySelector('.btn--new');
const btnroll = document.querySelector('.btn--roll');
const btnhold = document.querySelector('.btn--hold');

let score = [0, 0];
let curScore = 0;
let playing = true;
let activePlayer = 0;
score_0.innerText = 0;
score_1.innerText = 0;
diceEl.classList.add('hidden');

const swap = () => {
  score[activePlayer] += curScore;
  document.querySelector(`#score--${activePlayer}`).innerText =
    score[activePlayer];
  curScore = 0;
  if (score[activePlayer] >= 20) {
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add('player--winner');
    diceEl.classList.add('hidden');
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add('player--winner');
    // diceEl.classList.remove('player--active');
    playing = false;
  }
  document.querySelector(`#current--${activePlayer}`).innerText = curScore;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player_0.classList.toggle('player--active');
  player_1.classList.toggle('player--active');
};

btnroll.addEventListener('click', () => {
  if (playing) {
    //generate dice
    const dice = Math.trunc(Math.random() * 6) + 1;

    //display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `./assets/dice-${dice}.png`;

    // checking if the dice not equal to 1
    if (dice != 1) {
      curScore += dice;
      document.querySelector(`#current--${activePlayer}`).innerText = curScore;
    } else {
      curScore = 0;
      swap();
    }
  }
});

btnhold.addEventListener('click', () => {
  if (playing) swap();
});

btnnew.addEventListener('click', () => {
  document.querySelector(`.player--1`).classList.remove('player--winner');
  document.querySelector(`.player--1`).classList.remove('player--active');
  document.querySelector(`.player--0`).classList.add('player--active');
  document.querySelector(`.player--0`).classList.remove('player--winner');
  score = [0, 0];
  curScore = 0;
  activePlayer = 0;
  score_0.innerText = 0;
  score_1.innerText = 0;
  playing = true;
  diceEl.classList.add('hidden');
});
