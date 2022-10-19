import './style.css';

import display from './modules/display.js';

import AwesomeGame from './modules/apiMethods.js';

const manageScores = async () => {
  const scores = await AwesomeGame.getScoreFromApi();
  scores.sort((a, b) => b.score - a.score);
  const topScores = scores.slice(0, 10);
  display.displayScores(topScores);
}

manageScores();

document.querySelector('#form').addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.querySelector('#name-input').value;
  const scorevalue = document.querySelector('#score-input').value;

  AwesomeGame.sendScoreToApi(name, scorevalue).then(manageScores);

})

document.querySelector('#refresh').addEventListener('click', (e) => {
  e.preventDefault();

  window.location.reload();
});