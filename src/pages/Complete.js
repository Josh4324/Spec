import React from "react";
import { Link } from "react-router-dom";

export default function Complete(props) {
  let details;
  let score = props.location.search.slice(7);
  if (score <= 30) {
    details =
      "You just dey! Perhaps, all this spec thing no too concern you? you have a long way to go guy, try level up";
  } else if (score > 30 && score <= 40) {
    details =
      "Opor!,We know you aspire to be Spec-tacular. You are in line, Keep Grinding!";
  } else if (score > 40 && score <= 50) {
    details =
      "On a low, you suppose be Spec o, but you still ghas do one or two";
  } else if (score > 50 && score <= 60) {
    details =
      "You are not doing bad!, But then, you no for like complete am?, 100% suppose be the goal";
  } else if (score > 60) {
    details =
      "Who dey breathe? Spec Overload!, You dey drip glory. E sha never complete";
  }
  return (
    <>
      <div class="wrapper-complete" style={{ backgroundImage: "url(../images/question-bg.jpg)" }}>
        <header className="header">
            <div class="container">
              <Link to="/" className = "logo">
                  <img src="../images/logo.png"/>
              </Link>
            </div>
        </header>

        <div class="wrapper">
          <div class="container">
              <div class="row justify-content-center">
                <div class="col-md-6">
                  <div class = "complete-content">
                  <h2 class="complete-content-title fc-title ">WINNER DETAILS</h2>
                  <p class="complete-content-subtitle text-center">Fill in your details to know your spec status</p>
                  <form>
                    <div class="form-group">
                      <label>Instagram/Facebook Profile Link</label>
                      <input type="text" className="form-control" placeholder="" />
                    </div>

                    <div class="form-group">
                      <label>Email Address</label>
                      <input type="email" className="form-control" />
                    </div>

                    <div class="form-group">
                      <label>Phone Number</label>
                      <input type="text" className="form-control" />
                    </div>
                    <div class="btn-wrapper text-center">
                      <button class="btn">
                        CONTINUE
                      </button>
                    </div>
                  </form>
                  </div>
                </div>
              </div>
            </div>

          {/* <div style={{ width: "50%" }}>
            <div
              style={{
                width: "200px",
                height: "200px",
                borderRadius: "50%",
                border: "2px solid white",
                textAlign: "center",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              <h1
                style={{
                  textAlign: "center",
                  marginTop: "25%",
                  fontSize: "60px",
                }}
              >
                {score}
              </h1>
            </div>
            <h2>{details}</h2>
          </div> */}
        
        </div>
        <div class="footer">
        <div class="container">
          <div class="col-md-12">
            <span>TERMS OF USE/ PRIVACY</span>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
