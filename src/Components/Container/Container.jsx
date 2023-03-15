import React, { useContext, useState } from "react";
import { Global } from "../../App";
import "./container.css";

const Container = () => {
  const questions = useContext(Global);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [start, setStart] = useState(true);
  const [rightAns, setRightAns] = useState(0);
  const [wrongAns, setWrongAns] = useState(0);
  const [answer, setAnswer] = useState();
  const [showAns, setShowAns] = useState(false);

  // console.log(questions);

  const ans = () => {
    setTimeout(() => {
      setAnswer(questions[questionNumber].showAns);
    }, 10);
  };

  const nextQus = (initialAns, ans) => {
    // console.log(element.style.color);
    setAnswer(initialAns);

    if (ans === questions[questionNumber].answer) {
      setRightAns((previous) => {
        return previous + 1;
      });
    } else {
      setWrongAns((previous) => {
        return previous + 1;
      });
    }
    setTimeout(() => {
      setQuestionNumber((previous) => {
        if (questionNumber === questions.length - 1) {
          setStart(false);
        }

        console.log(questions.length, questionNumber);
        setTimeout(() => {
          setAnswer(null);
        }, 500);

        return previous + 1;
      });
    }, 2000);
  };

  const percentage = () => {
    return (rightAns / questions.length) * 100;
  };

  return (
    <>
      <div className="container">
        {start && (
          <div className="dataContainer">
            <div className="scoreContainer">
              <h3>Question No : {questionNumber + 1}</h3>
            </div>
            <div className="heading">
              <h3>Quiz</h3>
            </div>
            <div className="questionContainer">
              <div className="questions">
                <h3>Ques: {questions[questionNumber].question}</h3>
              </div>
              <div className="option">
                <h3
                  onClick={(e) => {
                    ans();
                    nextQus(null, e.target.innerText);
                    setShowAns(true);
                  }}
                >
                  {questions[questionNumber].opt1}
                </h3>
              </div>
              <div className="option">
                <h3
                  onClick={(e) => {
                    ans();

                    nextQus(null, e.target.innerText);
                    setShowAns(true);
                  }}
                >
                  {questions[questionNumber].opt2}
                </h3>
              </div>
              <div className="option">
                <h3
                  onClick={(e) => {
                    ans();

                    nextQus(null, e.target.innerText);
                    setShowAns(true);
                  }}
                >
                  {questions[questionNumber].opt3}
                </h3>
              </div>
              <div className="option">
                <h3
                  onClick={(e) => {
                    ans();

                    nextQus(null, e.target.innerText);
                    setShowAns(true);
                  }}
                >
                  {questions[questionNumber].opt4}
                </h3>
              </div>

              {showAns && (
                <div className="rightAns">
                  <h5 className="ans">Right Ans Is : {answer}</h5>
                </div>
              )}
            </div>
          </div>
        )}

        {!start && (
          <div className="scoreShow">
            <div>
              <h1 style={{ color: "lightgoldenrodyellow" }}>Score Card</h1>
            </div>
            <h2 style={{ color: "white" }}>
              Total Questions : <span>{questions.length}</span>
            </h2>
            <h2 style={{ color: "green" }}>
              Right Answer : <span>{rightAns}</span>
            </h2>
            <h2 style={{ color: "red" }}>
              Wrong Answer Is : <span>{wrongAns}</span>
            </h2>
            <h2 style={{ color: "rebeccapurple" }}>
              Your OverAll Percentage Is : <span>{percentage()} %</span>
            </h2>
            <button
              onClick={() => {
                setStart(true);
                setQuestionNumber(0);
              }}
              className="playAgain"
            >
              Play Again!
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Container;
