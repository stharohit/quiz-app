import React, { useState } from "react";
import Button from "../../components/Button/Button";
import QuizApp from "./QuizStart/QuizApp";
import { stylesheet } from "typestyle";
import QuizImage from "../../assets/quiz.png";
import { Quiz } from "../../utils/quiz";
import { shuffleQuiz } from "../../utils/shuffler";

const classNames = stylesheet({
  quizWrap: {
    width: "600px",
    margin: "auto",
    marginTop: "50px",
    textAlign: "center",

    $nest: {
      "@media screen and (max-width: 900px)": {
        width: "90%",
        margin: "auto"
      }
    }
  },
  img: {
    maxWidth: "100%",
  }
});

const QuizStart = () => {
  const [start, setStart] = useState<boolean>(false);
  const [loader, setLoader] = useState<boolean>(false);

  const handleQuizStart = () => {
    setLoader(true);
    setTimeout(() => {
      setStart(true);
      setLoader(false);
    }, 500);
  };

  const quiz = shuffleQuiz(Quiz.data);

  return (
    <div className={classNames.quizWrap}>
      {!start ? (
        <React.Fragment>
          <img src={QuizImage} alt="Quiz starter" className={classNames.img}/>
          <Button loading={loader} onClick={handleQuizStart}>
            Start Quiz
          </Button>
        </React.Fragment>
      ) : (
        <QuizApp quiz={quiz} />
      )}
    </div>
  );
};

export default QuizStart;
