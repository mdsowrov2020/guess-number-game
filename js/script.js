'use strict';

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
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
      'background-color: #90EE90; width: 40%; transition: all .6s linear';
  } else if (inpVal > secretNumber) {
    document.querySelector('.decision').textContent = 'too high';
    score--;
    document.querySelector('.score').textContent = score;
  } else if (inpVal < secretNumber) {
    document.querySelector('.decision').textContent = 'too low';
    score--;
    document.querySelector('.score').textContent = score;
  }
});
