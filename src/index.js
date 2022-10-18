import Score from './modules/constructor';

import Display from './modules/display';

import Storage from './modules/storage';

import './style.css'

const container = document.querySelector('#score-list-container')
container.innerHTML = '';

container.appendChild(Display.displayScores(Storage.getScores()));

document.querySelector('#form').addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.querySelector('#name-input').value;
  const scorevalue = document.querySelector('#score-input').value

  let scores = [];
  if (localStorage.getItem('scores') !== null) {
    scores = JSON.parse(localStorage.getItem('scores'));
  }
  const score = new Score(name, scorevalue);

  const list = document.querySelector('#score-list'); 

  list.appendChild(Display.addScoreToBoard(score));

  Storage.addScore(score);

  e.target.reset();
});
