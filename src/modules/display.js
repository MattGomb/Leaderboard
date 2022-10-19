const display = {
  displayScores(highScores) {
    const list = document.querySelector('#score-list');
    list.innerHTML = '';
    for (let i = 0; i < highScores.length; i += 1) {
      const newScore = document.createElement('li')
      newScore.classList.add('entry');
      list.appendChild(newScore);

      const user = document.createElement('p');
      user.textContent = highScores[i].user.length > 20 ? 'Someone with a long name ;)' : highScores[i].user;
      user.classList.add('name');
      newScore.appendChild(user);

      const score = document.createElement('p');
      score.textContent = highScores[i].score.length > 10 ? 'A really big score ;)' : highScores[i].score;
      score.classList.add('score');
      newScore.appendChild(score);
    }
  },
};

export default display;