import React, {useRef} from "react";
import { NotificationManager } from "react-notifications";
import { Link } from "react-router-dom";
import { createDetail  } from "../utils/apiCalls";

export default function Complete(props) {
  let details;
  console.log(props.location.search)
  let score = props.location.search.slice(7,9);
  let gender = props.location.search.slice(17,);

  const profileRef = useRef("");
  const phoneRef = useRef("");

  const submit = async(evt) => {
    evt.preventDefault();
    if (profileRef.current.value === ""){
      return NotificationManager.error("Please enter your instagram / facebook link");
    }

    if (phoneRef.current.value === ""){
      return NotificationManager.error("Please enter your phone number")
    }

    let cred = {
      social : profileRef.current.value,
      number: phoneRef.current.value
    }

    let result = await createDetail(cred);
    console.log(result);

    window.location.href = `/badge?score=${score}?gender=${gender}`
  }

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
                <div class="col-md-6 d-flex align-items-center">
                  <div  style={{ backgroundImage: "url(../images/score-bubble.svg)"}} class="spec-score">
                      <span>{score}</span>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class = "complete-content">
                  <h2 class="complete-content-title fc-title ">Get your Spec Badge</h2>
                  <p class="complete-content-subtitle text-center">Fill in your details to know your spec status</p>
                  <form action="/badge">
                    <div class="form-group">
                      <label>Instagram/Facebook Profile Link</label>
                      <input ref={profileRef} type="text" className="form-control" placeholder="" />
                    </div>
                    <div class="form-group">
                      <label>Phone Number</label>
                      <input ref={phoneRef} type="text" className="form-control" />
                    </div>
                    <div class="btn-wrapper text-center">
                      <button class="btn" onClick={submit}>
                        <a style={{textDecoration:"none", color:"white"}} href={`/badge?score=${score}?gender=${gender}`}>CONTINUE</a>
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
            <Link to="/privacy" style={{color:"white"}}>
            <div class="col-md-12">
              <span>TERMS OF USE/ PRIVACY</span>
            </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
