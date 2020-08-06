import React, { useEffect, useState } from "react";
import { stylesheet } from "typestyle";
import { Colors } from "../../../constants/Colors";
import Button from "../../../components/Button/Button";

const scoreboard = stylesheet({
  scoreboardWrap: {
    fontSize: "40px",
    color: Colors.WHITE
  },
  score: {
    fontSize: "60px",
    color: Colors.PRIMARY
  },
  td: {
    border: "1px solid #dddddd",
    textAlign: "left",
    padding: "8px"
  },
  tr: {
    $nest: {
      "&:nth-child(even)": {
        backgroundColor: Colors.SECONDARY
      }
    }
  },
  table: {
    fontFamily: "arial, sans-serif",
    borderCollapse: "collapse",
    width: "100%",
    marginBottom: "25px"
  },
  scoreTitle: {
    margin: "30px 0 20px 0"
  }
});

interface Props {
  score: string | any;
  totalScore: string;
}

interface ScoreBoard {
  user: string;
  score: string;
}

const FinalScore = (props: Props) => {
  const { score, totalScore } = props;
  const [scoreBoard, setscoreBoard] = useState<Array<ScoreBoard> | any>();

  const topTenScorer = (scoreBoardList: Array<ScoreBoard>) => {
    let list = scoreBoardList;
    let sortedList = list
      .sort((a: ScoreBoard | any, b: ScoreBoard | any) => b.score - a.score)
      .slice(0, 10);
      return sortedList;
  };

  useEffect(() => {
    let json = window.localStorage.getItem("scoreBoard");
    let scoreboardList: Array<ScoreBoard> = json && JSON.parse(json);
    let TopTenScorer = topTenScorer(scoreboardList);
    console.log(TopTenScorer);
    setscoreBoard(TopTenScorer);
  }, []);

  return (
    <div className={scoreboard.scoreboardWrap}>
      <div className={scoreboard.score}>{score}</div>
      <div>Out of</div>
      <div>{totalScore}</div>
      <Button onClick={() => window.location.reload()}>Retry</Button>
      <div className={scoreboard.scoreTitle}>ScoreBoard</div>
      <table className={scoreboard.table}>
        <thead>
          <tr className={scoreboard.tr}>
            <th className={scoreboard.td}>User</th>
            <th className={scoreboard.td}>Score</th>
          </tr>
        </thead>
        <tbody>
          {scoreBoard &&
            scoreBoard.map((score: any, index: number) => (
              <tr key={index} className={scoreboard.tr}>
                <td className={scoreboard.td}>{score.user}</td>
                <td className={scoreboard.td}>{score.score}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default FinalScore;
