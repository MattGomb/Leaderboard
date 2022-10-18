export default class Storage {
  static getScores() {
    let scores;
    if (!localStorage.getItem('scores')) {
      scores = []; 
    } else {
      scores = JSON.parse(localStorage.getItem('scores'))
    } 
    return scores;
  }

  static addScore(score) {
    const scores = Storage.getScores();

    scores.push(score);

    localStorage.setItem('scores', JSON.stringify(scores));

    return Storage.getScores();

  }
}