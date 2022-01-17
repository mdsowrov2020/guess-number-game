'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
// document.querySelector('.numVal').textContent = secretNumber;

//

document.querySelector('.guessNum').addEventListener('click', function () {
  //   document.querySelector('.decision').textContent = number;
  const inpVal = Number(document.querySelector('.inpVal').value);
  if (!inpVal) {
    document.querySelector('.decision').textContent = 'No Number';
  } else if (inpVal === secretNumber) {
    document.querySelector('.decision').textContent = 'Correct Number';
    document.querySelector('.numVal').textContent = secretNumber;
    document.querySelector('.number').style.cssText =
      'background-color: #fff; width: 100px; border-radius: 50%; transition: all .6s linear';

    document.querySelector('.bg').style.cssText = 'background: #42F079 ';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (inpVal > secretNumber) {
    if (score > 1) {
      document.querySelector('.decision').textContent = 'too high';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.decision').textContent = 'You lost the game!';
    }
  } else if (inpVal < secretNumber) {
    if (score > 1) {
      document.querySelector('.decision').textContent = 'too low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.decision').textContent = 'You lost the game!';
    }
  }
});

// reset

document.querySelector('.reset').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.decision').textContent = 'Start Guessing..';
  document.querySelector('.score').textContent = score;
  document.querySelector('.inpVal').value = '';

  document.querySelector('.number').style.cssText =
    'background-color: rgba(250, 250, 250, 0.9); width: 25%; transition: all .6s linear';
  document.querySelector('.numVal').textContent = '?';
  document.querySelector('.bg').style.background = 'rgb(73, 73, 73)';
});
