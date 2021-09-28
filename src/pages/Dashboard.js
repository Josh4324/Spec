import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "../style.css";
import "../bootstrap.min.css";

function Dashboard(props) {
  return (
    <>
      <div className="wrapper-home" style={{ backgroundImage: "url(images/bg-new-2.jpg)" }}>
        

        <header className="header">
          <div class="container">
          <div class="row">
                <div class="col-6">
                <Link to="/" className = "logo">
                    <img src="images/2sure-logo.png" style={{height: "80px"}}/>
                </Link>
                </div>
                <div class="col-6 text-right">
                <Link to="/" className = "logo">
                    <img src="images/logo.png"/>
                </Link>
                </div>
            </div>
          </div>
        </header>

        <div class="main">
          <div class="container">
            <div class="home-title">
              <img src="images/are-you-a-sp.png" class="home-title-img" />
            </div>
            <div class="row justify-content-center">

              <div class="col-md-5">
              <div class="home-spec-info">
                  <h2><span>Hey Guys,</span><br/> Are you a SPEC?</h2>
                  <p>Here’s a chance to check just how much of a SPEC you are.</p>
                  <Link to="/quiz/male" class="home-spec-info__link">
                    <span>Take the Quiz</span>
                    Check Your SPEC Status
                  </Link>
                </div>
              </div>
              <div class="col-md-5">
                <div class="home-spec-info">
                  <h2><span>Hey Ladies,</span><br/> Do you have a SPEC?</h2>
                  <p>Here’s a chance to check just how much of a SPEC your SPEC is.</p>
                  <Link to="/quiz/female" class="home-spec-info__link">
                    <span>Take the Quiz</span>
                    Check the SPEC status of your SPEC
                  </Link>
                </div>
              </div>


            </div>
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
    </>
  );
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    user: state.auth,
    data: state.user,
  };
};

export default connect(mapStateToProps)(Dashboard);
