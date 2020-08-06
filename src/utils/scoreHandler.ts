export const scoreHandler = (score: number) => {
  let userScore: string | any = score.toString();
  let username: string | any = window.localStorage.getItem("loggedInUser");
  let scoreBoard = window.localStorage.getItem("scoreBoard");
  if (scoreBoard) {
    let scoreboard: Array<{ user: string; score: string }> = JSON.parse(
      scoreBoard
    );
    let newScore = { user: username, score: userScore };
    scoreboard.push(newScore);
    window.localStorage.setItem("scoreBoard", JSON.stringify(scoreboard));
  } else {
    let scorer = [{ user: username, score: userScore }];
    window.localStorage.setItem("scoreBoard", JSON.stringify(scorer));
  }
};
