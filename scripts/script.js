`use strict`;
const rangeEl = document.getElementById(`range`);
const randomGuessEl = document.getElementById(`display-guess`);
const userGuessEl = document.getElementById(`user-guess`);
const checkBtnEl = document.getElementById(`check`);
const messageEl = document.getElementById(`message`);
const scoreEl = document.getElementById(`score`);
const highScoreEl = document.getElementById(`high-score`);
const restartBtnEl = document.getElementById(`restart`);
const sectionOneEl = document.getElementById(`section-one`);
const sectionThreeEl = document.getElementById(`section-three`);

let score = 5;
let highScore = 0;
let randomNumber = Math.trunc(Math.random() * Number(rangeEl.value)) + 1;

const init = function () {
  scoreEl.innerText = score;
  highScoreEl.innerText = highScore;
};

rangeEl.addEventListener(`change`, () => {
  randomNumber = Math.trunc(Math.random() * Number(rangeEl.value)) + 1;
  score = 5;
  init();
});

checkBtnEl.addEventListener(`click`, () => {
  let guess = Math.round(Number(userGuessEl.value));
  if (score > 0) {
    if (!guess || score < 0) {
      messageEl.innerText = `🚫Not valid🚫`;
      userGuessEl.value = null;
    } else if (guess === randomNumber) {
      messageEl.innerText = `🎉🎉Correct🎉🎉`;
      highScoreEl.innerText = Number(highScoreEl.innerText) + score;
      randomGuessEl.innerText = randomNumber;
      sectionOneEl.classList.add(`disable`);
      sectionThreeEl.classList.add(`disable`);
    } else if (guess > randomNumber) {
      messageEl.innerText = `⛔Too high⛔`;
      userGuessEl.value = null;
      score--;
      scoreEl.innerText = score;
    } else if (guess < randomNumber) {
      messageEl.innerText = `⛔Too low⛔`;
      userGuessEl.value = null;
      score--;
      scoreEl.innerText = score;
    }
  } else {
    messageEl.innerText = `Game over😞😞`;
    randomGuessEl.innerText = randomNumber;
    sectionOneEl.classList.add(`disable`);
    sectionThreeEl.classList.add(`disable`);
  }
});

restartBtnEl.addEventListener(`click`, () => {
  randomNumber = Math.trunc(Math.random() * Number(rangeEl.value)) + 1;
  randomGuessEl.innerText = randomNumber;
  sectionOneEl.classList.remove(`disable`);
  sectionThreeEl.classList.remove(`disable`);
  randomGuessEl.innerText = `?`;
  userGuessEl.value = null;
  messageEl.innerText = `Start guessing....`;
  scoreEl.innerText = 5;
  score = scoreEl.innerText;
});

init();
