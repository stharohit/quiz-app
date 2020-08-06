import React, { useState } from "react";
import { stylesheet } from "typestyle";
import { Colors } from "../../../constants/Colors";
import { QuizProps } from "./interface";
import Answers from "./Answers";
import { shuffleQuiz } from "../../../utils/shuffler";
import FinalScore from "./FinalScore";
import { scoreHandler } from "../../../utils/scoreHandler";

const classNames = stylesheet({
  question: {
    background: Colors.WHITE,
    padding: "20px",
    position: "relative",
    borderRadius: "10px",
    fontSize: "30px",
    color: Colors.GREY,
    marginBottom: "80px",

    $nest: {
      "&::after": {
        position: "absolute",
        content: `''`,
        top: "100%",
        left: "40%",
        border: "20px solid transparent",
        borderTopColor: Colors.WHITE,
        borderLeftColor: Colors.WHITE
      }
    }
  }
});

interface Props {
  quiz: Array<QuizProps>;
}

const QuizApp = (props: Props) => {
  const { quiz } = props;
  const [index, setindex] = useState(0);
  const [finalscore, setfinalScore] = useState<number>();

  const handleNextQuestion = (score: number) => {
    if (index < quiz.length - 1) {
      setindex(index + 1);
    } else {
      setfinalScore(score);
      scoreHandler(score);
    }
  };
  return (
    <React.Fragment>
      {!finalscore ? (
        <React.Fragment>
          <div className={classNames.question}>{quiz[index].question}</div>
          <Answers
            handleNextQuestion={handleNextQuestion}
            answers={shuffleQuiz(quiz[index].options)}
            correct={quiz[index].correct_answer}
          />
        </React.Fragment>
      ) : (
        <FinalScore
          score={finalscore?.toString()}
          totalScore={(quiz.length * 2).toString()}
        />
      )}
    </React.Fragment>
  );
};

export default QuizApp;
