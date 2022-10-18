export default class Display {
  static displayScores(scores) {
    const list = document.createElement('ul');
    list.id = 'score-list';
    if (scores.length !== 0) {
      scores.forEach((score) => {
        list.appendChild(Display.addScoreToBoard(score));
      });
    }
    return list;
  }

  static addScoreToBoard({ name, scorevalue }) {
    const newEntry = document.createElement('li');
    newEntry.setAttribute('class', 'entry');

    const user = document.createElement('p');
    user.classList.add('name');
    user.textContent = name.length > 30 ? 'Someone with a long name ;)' : name;
    newEntry.appendChild(user);

    const scorevalue1 = document.createElement('p');
    scorevalue1.classList.add('score');
    scorevalue1.textContent = scorevalue.length > 10 ? 'A really big score ;)' : scorevalue;
    newEntry.appendChild(scorevalue1);

    return newEntry;
  }
}