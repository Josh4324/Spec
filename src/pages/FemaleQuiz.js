import React, { useState, useEffect } from "react";
import { NotificationManager } from "react-notifications";
import { Link, useHistory } from "react-router-dom";
import { FemaleQuestions } from "../data";
import { femaleQuestionCount,femaleQuestionOptionCount   } from "../utils/apiCalls";
import "../style.css";
export default function FemaleQuiz() {
  let history = useHistory();
  function iOS() {
    return [
      'iPad Simulator',
      'iPhone Simulator',
      'iPod Simulator',
      'iPad',
      'iPhone',
      'iPod'
    ].includes(navigator.platform)
    // iPad on iOS 13 detection
    || (navigator.userAgent.includes("Mac") && "ontouchend" in document)
  }

  let ios = iOS();
  console.log("ios", ios)
  let check = 'ontouchstart' in window ? true : false;
  console.log(check);
  const [questionNum, setQuestionNum] = useState(0);
  const [current, setCurrent] = useState(FemaleQuestions[0]);
  const [score, setScore] = useState(0);
  const [choice, setChoice] = useState("");
  const [quesScore, setQuesScore] = useState(0);
  const [answerState, setAnswerState] = useState(false);
  const [buttonState, setButtonState] = useState(false);
  const [option1State, setoption1State] = useState(false);
  const [option2State, setoption2State] = useState(false);
  const [option3State, setoption3State] = useState(false);
  const [option4State, setoption4State] = useState(false);
  const [option5State, setoption5State] = useState(false);

  const countQuestion = async(num) => {
    console.log("count")
      const cred = {
        ques: num
      }
     await femaleQuestionCount(cred);
  }

  const countOptions = async(crd, num) => {
      const cred = {
          ques: num,
          [crd]: 1
      }

      await femaleQuestionOptionCount(cred)
  }

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
    let num = questionNum + 1;
    countQuestion(num);
    let cred;
    if (choice === 1){
      cred = "option1"
    }else if (choice === 2){
      cred = "option2"
    }else if (choice === 3){
      cred = "option3"
    }else if (choice === 4){
      cred = "option4"
    }else if (choice === 5){
      cred = "option5"
    }
    countOptions(cred, num);
    if (questionNum === 9) {
      return history.push(`/congrat?score=${score + quesScore}?gender=female`);
    }
    
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
    setChoice(num)
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
          <div class="row">
                <div class="col-6">
                <Link to="/" className = "logo">
                    <img src="../images/2sure-logo.png" style={{height: "80px"}}/>
                </Link>
                </div>
                <div class="col-6 text-right">
                <Link to="/" className = "logo">
                    <img src="../images/logo.png"/>
                </Link>
                </div>
            </div>
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

                  {
                    ios === true ? (<li onTouchEnd={setQuestion}
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
                  ) : (<li onClick={setQuestion}
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
                  </li>)
                  }
                </ul>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div class="footer">
          <div class="container">
            <div class="row">
              <div class="col-md-6">
              <Link to="/privacy" style={{color:"white"}}>
                <div class="col-md-12">
                  <span>TERMS OF USE/ PRIVACY</span>
                </div>
              </Link>
              </div>

              <div class="col-md-6 text-right">
              <a
            target="_blank"
            style={{color:"white"}}
            rel="noopener noreferrer"
            className = "share-button mr-3"
            href="https://www.facebook.com/2SureNigeria/">
            <i class="fab fa-facebook-square"></i>
          </a>
            <a
            target="_blank"
            style={{color:"white"}}
            rel="noopener noreferrer"
            className = "share-button mr-3"
            href="https://www.instagram.com/2sureng/">
            <i class="fab fa-instagram"></i>
          </a>
              <a                         
            target="_blank"
            style={{color:"white"}}
            rel="noopener noreferrer"
            className = "share-button mr-3" href="https://www.twitter.com/2SureNG/"><i class="fab fa-twitter-square"></i></a> 
             
              </div>
            </div>
            
          </div>
        </div>

    </div>
  );
}
