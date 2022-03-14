'use strict';
const message = document.querySelector('.message');
const number = document.querySelector('.number');
const score = document.querySelector('.score');
const body = document.querySelector('body');
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let scoreCount = 20;
let highscore = 0;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // when there is no input
  if (!guess) {
    message.textContent = '⛔No Number!';

    // When player wins
  } else if (guess === secretNumber) {
    message.textContent = '🎉 Correct Number! ';
    number.textContent = secretNumber;

    body.style.backgroundColor = '#60b347';
    number.style.width = '30rem';
    // high score condition
    if (scoreCount > highscore) {
      highscore = scoreCount;
      document.querySelector('.highscore').textContent = highscore;
    }
    // when guess is wrong
  } else if (guess !== secretNumber) {
    if (scoreCount > 1) {
      message.textContent =
        guess > secretNumber ? '📈Too High!' : '📉Too Low!!';
      scoreCount--;
      score.textContent = scoreCount;
    } else {
      message.textContent = '💥You Lost The Game!';
      score.textContent = 0;
    }
  }
});
// resetting all value to initial state except for highscore on click event for button again
document.querySelector('.again').addEventListener('click', function () {
  scoreCount = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  message.textContent = 'Start guessing...';
  score.textContent = scoreCount;
  number.textContent = '?';
  document.querySelector('.guess').value = '';
  body.style.backgroundColor = '#222';
  number.style.width = '15rem';
});
