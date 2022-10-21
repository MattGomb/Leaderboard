import './style.css';

import displayScores from './modules/display.js';

import AwesomeGame from './modules/apiMethods.js';

const manageScores = async () => {
  const scores = await AwesomeGame.getScoreFromApi();
  scores.sort((a, b) => b.score - a.score);
  const topScores = scores.slice(0, 10);

  displayScores(topScores);
};

window.onload = manageScores();

document.querySelector('#form').addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.querySelector('#name-input').value;
  const scorevalue = document.querySelector('#score-input').value;

  AwesomeGame.sendScoreToApi(name, scorevalue).then(manageScores);

  e.target.reset();
});

document.querySelector('#refresh').addEventListener('click', () => {
  window.location.reload();
});