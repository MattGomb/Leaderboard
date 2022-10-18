import Score from './modules/constructor.js';

import Display from './modules/display.js';

import Storage from './modules/storage.js';

import './style.css';

const container = document.querySelector('#score-list-container');
container.innerHTML = '';

container.appendChild(Display.displayScores(Storage.getScores()));

document.querySelector('#form').addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.querySelector('#name-input').value;
  const scorevalue = document.querySelector('#score-input').value;

  const score = new Score(name, scorevalue);

  const list = document.querySelector('#score-list');

  list.appendChild(Display.addScoreToBoard(score));

  Storage.addScore(score);

  e.target.reset();
});

document.querySelector('#refresh').addEventListener('click', (e) => {
  e.preventDefault();

  window.location.reload();
})