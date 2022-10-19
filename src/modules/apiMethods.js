const myUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/AGSkoi8S3uv29a2GTKA4/scores/';

const AwesomeGame = {
  async sendScoreToApi(user, score) {
    const response = await fetch(myUrl, {
      method: 'POST',
      body: JSON.stringify({
        user,
        score,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    return response.json();
  },

  async getScoreFromApi() {
    const response = await (await fetch(myUrl)).json();
    return response.result;
  },
};

export default AwesomeGame;