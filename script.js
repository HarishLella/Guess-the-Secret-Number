'use strict';

const secretNumberCalc = () => Math.trunc(Math.random() * 20 + 1);
let secretNumber = secretNumberCalc();
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //If there is no input
  if (!guess) {
    //document.querySelector('.message').textContent = 'No Number🚫';
    displayMessage('No Number🚫');
  }
  //When player wins
  else if (guess === secretNumber) {
    //document.querySelector('.message').textContent = '🎉Correct Number';
    displayMessage('🎉Correct Number');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
    }
    document.querySelector('.highscore').textContent = highScore;
  }
  //when input is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      //   document.querySelector('.message').textContent =
      //     guess > secretNumber ? '📈Too high!' : '📉Too low!';
      displayMessage(guess > secretNumber ? '📈Too high!' : '📉Too low!');
      score--;
      //document.querySelector('.score').textContent = score;
      displayScore(score);
    } else {
      //document.querySelector('.message').textContent = '🚫You lost the Game';
      displayMessage('🚫You lost the Game');
      //document.querySelector('.score').textContent = 0;
      displayScore(0);
    }
  }
  /*
  // when input is higher
  else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '🚫You lost the Game';
      document.querySelector('.score').textContent = 0;
    }
  } //// when input is lower
  else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '🚫You lost the Game';
      document.querySelector('.score').textContent = 0;
    }
  }*/
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = secretNumberCalc();
  document.querySelector('.guess').value = '';

  score = 20;
  //document.querySelector('.score').textContent = score;
  displayScore(score);
  document.querySelector('.number').textContent = '?';
  //document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#2A445E';
});
