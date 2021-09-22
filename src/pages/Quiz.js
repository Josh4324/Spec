import React from "react";
import { Link } from "react-router-dom";
export default function Quiz() {
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
                      <span>Question 1</span>
                      <h2>Start Quiz</h2>
                      <p>
                        User interface design.One Awesome Flat Ui Kit in Psd
                        format. The pack ... Quiz App is a mobile UI kit created
                        using Sketch and Photoshop, aimed to help you kick start
                        your next mobile quiz or trivia project
                      </p>
                    </div>
                    <div class="quiz-option-selector clearfix">
                      <ul>
                        <li>
                          <label class="start-quiz-item">
                            <input
                              type="radio"
                              name="quiz"
                              value="Email Markering"
                              class="exp-option-box"
                            />
                            <span class="exp-number text-uppercase">A</span>
                            <span class="exp-label">Email Markering</span>
                            <span class="checkmark-border"></span>
                          </label>
                        </li>
                        <li>
                          <label>
                            <input
                              type="radio"
                              name="quiz"
                              value="Font Developer"
                              class="exp-option-box"
                            />
                            <span class="exp-number text-uppercase">b</span>
                            <span class="exp-label">Font Developer</span>
                            <span class="checkmark-border"></span>
                          </label>
                        </li>
                        <li>
                          <label>
                            <input
                              type="radio"
                              name="quiz"
                              value="Digital Marketing"
                              class="exp-option-box"
                            />
                            <span class="exp-number text-uppercase">c</span>
                            <span class="exp-label">Digital Marketing</span>
                            <span class="checkmark-border"></span>
                          </label>
                        </li>
                        <li>
                          <label>
                            <input
                              type="radio"
                              name="quiz"
                              value="SEO"
                              class="exp-option-box"
                            />
                            <span class="exp-number text-uppercase">d</span>
                            <span class="exp-label">SEO </span>
                            <span class="checkmark-border"></span>
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
                          <span class="js-btn-next" title="NEXT">
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
