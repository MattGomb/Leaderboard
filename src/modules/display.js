const displayScores = (highScores) => {
  const list = document.querySelector('#score-list');
  list.textContent = '';
  for (let i = 0; i < highScores.length; i += 1) {
    const newScore = document.createElement('li');
    newScore.classList.add('entry', `nr${[i]}`);
    list.appendChild(newScore);

    const user = document.createElement('p');
    user.textContent = highScores[i].user.length > 20 ? 'Someone with a long name ;)' : highScores[i].user;
    user.classList.add('name');
    newScore.appendChild(user);

    const score = document.createElement('p');
    score.textContent = highScores[i].score.length > 10 ? '99999999999 - maxed out! :)' : highScores[i].score;
    score.classList.add('score');
    newScore.appendChild(score);
  }

  const score = document.getElementsByClassName('score');
  score[0].textContent = highScores[0].score.length > 10 ? '99999999999 - maxed out! 🥇' : `${highScores[0].score} 🥇`;
  score[1].textContent = `${highScores[1].score} 🥈`;
  score[2].textContent = `${highScores[2].score} 🥉`;
};

export default displayScores;