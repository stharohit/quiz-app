import React, { useState } from "react";
import { stylesheet, classes } from "typestyle";
import { Colors } from "../../../constants/Colors";
import Button from "../../../components/Button/Button";

const classNames = stylesheet({
  answerBtn: {
    fontSize: "20px",
    background: Colors.WHITE,
    borderRadius: "4px",
    padding: "20px",
    display: "block",
    width: "100%",
    border: "none",
    marginBottom: "20px",
    cursor: "pointer",
    boxShadow: `0 0 10px ${Colors.GREY}`,
    transition: ".3s",

    $nest: {
      "&:focus": {
        outline: 0
      }
    }
  },
  right: {
    background: Colors.SUCCESS,
    color: Colors.WHITE
  },
  wrong: {
    background: Colors.DANGER,
    color: Colors.WHITE
  }
});

interface Props {
  answers: Array<string>;
  correct: string;
  handleNextQuestion: Function;
}

const Answers = (props: Props) => {
  const { answers, correct, handleNextQuestion } = props;
  const [activeIndex, setactiveIndex] = useState<number>();
  const [wrongIndex, setwrongIndex] = useState<number>();
  const [chosen, setChosen] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [submitEnable, setSubmitEnable] = useState<boolean>();

  const handleSelection = (checkAnswer: number, index: number) => {
    if (chosen) return;
    if (checkAnswer === 0) {
      setactiveIndex(index);
      setScore(score + 2);
    } else {
      let correctAnswerIndex;
      answers.forEach((ans, index) => {
        if (ans.localeCompare(correct) === 0) correctAnswerIndex = index;
      });
      setactiveIndex(correctAnswerIndex);
      setwrongIndex(index);
    }
    setSubmitEnable(true);
    setChosen(true);
  };

  const handleSubmit = () => {
    setactiveIndex(undefined);
    setwrongIndex(undefined);
    setChosen(false);
    setSubmitEnable(false);
    handleNextQuestion(score);
  };

  return (
    <React.Fragment>
      {answers.map((ans, index) => (
        <Button
          key={index}
          className={classes(
            classNames.answerBtn,
            activeIndex === index && classNames.right,
            wrongIndex === index && classNames.wrong
          )}
          onClick={() => handleSelection(ans.localeCompare(correct), index)}
        >
          {ans}
        </Button>
      ))}
      <Button
        disabled={submitEnable ? false : true}
        onClick={() => handleSubmit()}
      >
        Submit
      </Button>
    </React.Fragment>
  );
};

export default Answers;
