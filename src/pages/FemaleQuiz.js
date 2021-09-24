import React, { useState, useEffect } from "react";
import { NotificationManager } from "react-notifications";
import { Link, useHistory } from "react-router-dom";
import { FemaleQuestions } from "../data";
import "../style.css";
export default function FemaleQuiz() {
  let history = useHistory();
  const [questionNum, setQuestionNum] = useState(0);
  const [current, setCurrent] = useState(FemaleQuestions[0]);
  const [score, setScore] = useState(0);
  const [quesScore, setQuesScore] = useState(0);
  const [answerState, setAnswerState] = useState(false);
  const [buttonState, setButtonState] = useState(false);
  const [option1State, setoption1State] = useState(false);
  const [option2State, setoption2State] = useState(false);
  const [option3State, setoption3State] = useState(false);
  const [option4State, setoption4State] = useState(false);
  const [option5State, setoption5State] = useState(false);

  useEffect(() => {
    topFunction();
    return () => {};
  }, [score]);
  const setQuestion = () => {
    topFunction();
    if (answerState === false) {
      return NotificationManager.error(
        "You need to answer the question before moving to the next one",
        "Error"
      );
    }

    if (questionNum === 9) {
      return history.push(`/congrat?score=${score + quesScore}`);
    }
    let num = questionNum + 1;
    let question = FemaleQuestions[num];
    setQuestionNum(num);
    setCurrent(null);
    setCurrent(question);
    setAnswerState(false);
    setButtonState(false);
    setoption1State(false);
    setoption2State(false);
    setoption3State(false);
    setoption4State(false);
    setoption5State(false);

    let prevScore = score;
    let newScore = prevScore + quesScore;
    setScore(newScore);
  };
  const getScore = (scoreObj, num) => {
    let currScore = Object.values(scoreObj)[0];
    setQuesScore(currScore);
    setAnswerState(true);

    if (num === 1) {
      setoption1State(true);
      setoption2State(false);
      setoption3State(false);
      setoption4State(false);
      setoption5State(false);
    } else if (num === 2) {
      setoption1State(false);
      setoption2State(true);
      setoption3State(false);
      setoption4State(false);
      setoption5State(false);
    } else if (num === 3) {
      setoption1State(false);
      setoption2State(false);
      setoption3State(true);
      setoption4State(false);
      setoption5State(false);
    } else if (num === 4) {
      setoption1State(false);
      setoption2State(false);
      setoption3State(false);
      setoption4State(true);
      setoption5State(false);
    } else if (num === 5) {
      setoption1State(false);
      setoption2State(false);
      setoption3State(false);
      setoption4State(false);
      setoption5State(true);
    }
  };
  const topFunction = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  };
  return (
    <div
      className="wrapper-question"
      style={{ backgroundImage: "url(../images/question-bg.jpg)" }}
    >
      <header className="header">
        <div class="container">
          <Link to="/" className="logo">
            <img src="../images/logo.png" />
          </Link>
        </div>
      </header>

      <div class="wrapper">
        <div class="container">
          <form class="multisteps-form__form" id="wizard" method="POST">
            <div class="wizard-forms">
              <div class="quiz-title">
                <p>
                  {questionNum + 1}. {current.ques}
                </p>
              </div>
              <div class="quiz-option-selector clearfix">
                <ul>
                  <li onClick={() => getScore(current.options[0], 1)}>
                    <label
                      className={
                        option1State === false ? "" : "quiz-item-active"
                      }
                    >
                      <input
                        type="radio"
                        name="quiz"
                        value="Email Markering"
                        class="exp-option-box"
                      />
                      <span class="exp-number text-uppercase">A.</span>
                      <span class="exp-label">
                        {Object.keys(current.options[0])[0]}
                      </span>
                    </label>
                  </li>
                  <li onClick={() => getScore(current.options[1], 2)}>
                    <label
                      className={
                        option2State === false ? "" : "quiz-item-active"
                      }
                    >
                      <input
                        type="radio"
                        name="quiz"
                        value="Font Developer"
                        class="exp-option-box"
                      />
                      <span class="exp-number text-uppercase">B.</span>
                      <span class="exp-label">
                        {Object.keys(current.options[1])[0]}
                      </span>
                    </label>
                  </li>
                  <li onClick={() => getScore(current.options[2], 3)}>
                    <label
                      className={
                        option3State === false ? "" : "quiz-item-active"
                      }
                    >
                      <input
                        type="radio"
                        name="quiz"
                        value="Digital Marketing"
                        class="exp-option-box"
                      />
                      <span class="exp-number text-uppercase">C.</span>
                      <span class="exp-label">
                        {Object.keys(current.options[2])[0]}
                      </span>
                    </label>
                  </li>
                  <li onClick={() => getScore(current.options[3], 4)}>
                    <label
                      className={
                        option4State === false ? "" : "quiz-item-active"
                      }
                    >
                      <input
                        type="radio"
                        name="quiz"
                        value="SEO"
                        class="exp-option-box"
                        disabled={buttonState}
                      />
                      <span class="exp-number text-uppercase">D.</span>
                      <span class="exp-label">
                        {Object.keys(current.options[3])[0]}
                      </span>
                    </label>
                  </li>
                  <li onClick={() => getScore(current.options[4], 5)}>
                    <label
                      className={
                        option5State === false ? "" : "quiz-item-active"
                      }
                    >
                      <input
                        type="radio"
                        name="quiz"
                        value="SEO"
                        class="exp-option-box"
                        disabled={buttonState}
                      />
                      <span class="exp-number text-uppercase">E.</span>
                      <span class="exp-label">
                        {Object.keys(current.options[4])[0]}
                      </span>
                    </label>
                  </li>
                </ul>
              </div>

              <div class="actions clearfix">
                <ul>
                  <li class="d-none">
                    <span class="js-btn-next" title="PREV">
                      Previous Question
                    </span>
                  </li>
                  <li onClick={setQuestion} onTouchStart={setQuestionNum}
                    className={
                      option1State ||
                      option2State ||
                      option3State ||
                      option4State ||
                      option5State == true
                        ? ""
                        : "btn-disabled"
                    }
                  >
                    <span
                      
                      class="js-btn-next"
                      title="NEXT"
                    >
                      Next Question
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div class="footer">
        <div class="container">
          <div class="col-md-12">
            <span>TERMS OF USE/ PRIVACY</span>
          </div>
        </div>
      </div>
    </div>
  );
}
