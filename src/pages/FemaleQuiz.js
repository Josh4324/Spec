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
  const [answerState, setAnswerState] = useState(false);
  const [buttonState, setButtonState] = useState(false);
  const [option1State, setoption1State] = useState(false);
  const [option2State, setoption2State] = useState(false);
  const [option3State, setoption3State] = useState(false);
  const [option4State, setoption4State] = useState(false);
  const [option5State, setoption5State] = useState(false);

  useEffect(() => {
    return () => {};
  }, [score]);
  const setQuestion = () => {
    if (answerState === false) {
      return NotificationManager.error(
        "You need to answer the question before moving to the next one",
        "Error"
      );
    }
    setButtonState(false);
    if (questionNum === 9) {
      return history.push(`/congrat?score=${score}`);
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
  };
  const getScore = (scoreObj, num) => {
    setButtonState(true);
    let prevScore = score;
    let currScore = Object.values(scoreObj)[0];
    let newScore = prevScore + currScore;
    setScore(newScore);
    setAnswerState(true);
    console.log(newScore);

    num === 1 && buttonState === false
      ? setoption1State(true)
      : num === 2 && buttonState === false
      ? setoption2State(true)
      : num === 3 && buttonState === false
      ? setoption3State(true)
      : num === 4 && buttonState === false
      ? setoption4State(true)
      : num === 5 && buttonState === false
      ? setoption5State(true)
      : setoption5State(false);
  };
  return (
    <div style={{ paddingTop: "10px" }}>
      <Link to="/">
        <div
          className="logo"
          style={{
            marginTop: "0px",
            padding: "5px",
            width: "120px",
            border: "3px solid #4f9265",
            textAlign: "center",
          }}
        >
          SPECSTATUS
        </div>
      </Link>

      <div class="wrapper position-relative">
        <div class="wizard-content-1 clearfix">
          <div class="steps d-inline-block position-absolute clearfix">
            <ul class="tablist multisteps-form__progress">
              <li class="multisteps-form__progress-btn js-active current"></li>
              <li class="multisteps-form__progress-btn "></li>
              <li class="multisteps-form__progress-btn"></li>
              <li class="multisteps-form__progress-btn"></li>
              <li class="multisteps-form__progress-btn"></li>
            </ul>
          </div>
          <div class="step-inner-content clearfix position-relative">
            <form class="multisteps-form__form" id="wizard" method="POST">
              <div class="form-area position-relative">
                <div
                  class="multisteps-form__panel  js-active"
                  data-animation="fadeIn"
                >
                  <div class="wizard-forms clearfix position-relative">
                    <div class="quiz-title text-center">
                      <span>Question {questionNum + 1}</span>
                      <p>{current.ques}</p>
                    </div>
                    <div class="quiz-option-selector clearfix">
                      <ul>
                        <li onClick={() => getScore(current.options[0], 1)}>
                          <label class="start-quiz-item">
                            <input
                              disabled={buttonState}
                              type="radio"
                              name="quiz"
                              value="Email Markering"
                              class="exp-option-box"
                            />
                            <span class="exp-number text-uppercase">A</span>
                            <span class="exp-label">
                              {Object.keys(current.options[0])[0]}
                            </span>
                            <span
                              className={
                                option1State === false
                                  ? "checkmark-border"
                                  : "checkmark-border blue"
                              }
                            ></span>
                          </label>
                        </li>
                        <li onClick={() => getScore(current.options[1], 2)}>
                          <label>
                            <input
                              type="radio"
                              name="quiz"
                              value="Font Developer"
                              class="exp-option-box"
                              disabled={buttonState}
                            />
                            <span class="exp-number text-uppercase">b</span>
                            <span class="exp-label">
                              {Object.keys(current.options[1])[0]}
                            </span>
                            <span
                              className={
                                option2State === false
                                  ? "checkmark-border"
                                  : "checkmark-border blue"
                              }
                            ></span>
                          </label>
                        </li>
                        <li onClick={() => getScore(current.options[2], 3)}>
                          <label>
                            <input
                              type="radio"
                              name="quiz"
                              value="Digital Marketing"
                              class="exp-option-box"
                              disabled={buttonState}
                            />
                            <span class="exp-number text-uppercase">c</span>
                            <span class="exp-label">
                              {Object.keys(current.options[2])[0]}
                            </span>
                            <span
                              className={
                                option3State === false
                                  ? "checkmark-border"
                                  : "checkmark-border blue"
                              }
                            ></span>
                          </label>
                        </li>
                        <li onClick={() => getScore(current.options[3], 4)}>
                          <label>
                            <input
                              type="radio"
                              name="quiz"
                              value="SEO"
                              class="exp-option-box"
                              disabled={buttonState}
                            />
                            <span class="exp-number text-uppercase">d</span>
                            <span class="exp-label">
                              {Object.keys(current.options[3])[0]}
                            </span>
                            <span
                              className={
                                option4State === false
                                  ? "checkmark-border"
                                  : "checkmark-border blue"
                              }
                            ></span>
                          </label>
                        </li>
                        <li onClick={() => getScore(current.options[4], 5)}>
                          <label>
                            <input
                              type="radio"
                              name="quiz"
                              value="SEO"
                              class="exp-option-box"
                              disabled={buttonState}
                            />
                            <span class="exp-number text-uppercase">e</span>
                            <span class="exp-label">
                              {Object.keys(current.options[4])[0]}
                            </span>
                            <span
                              className={
                                option5State === false
                                  ? "checkmark-border"
                                  : "checkmark-border blue"
                              }
                            ></span>
                          </label>
                        </li>
                      </ul>
                    </div>
                    <div class="bottom-vector">
                      <img src="assets/img/bq1.png" alt="" />
                    </div>

                    <div class="actions clearfix">
                      <ul>
                        <li class="d-none">
                          <span class="js-btn-next" title="PREV">
                            Previous Question
                          </span>
                        </li>
                        <li>
                          <span
                            onClick={setQuestion}
                            class="js-btn-next"
                            title="NEXT"
                          >
                            Next Question
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
