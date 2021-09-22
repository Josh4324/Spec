import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "../style.css";
import "../bootstrap.min.css";

function Dashboard(props) {
  return (
    <>
      <div style={{ height: "100vh" }}>
        <div className="header">
          <Link to="/">
            <div
              className="logo"
              style={{ padding: "10px", border: "3px solid #4f9265" }}
            >
              SPECSTATUS
            </div>
          </Link>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "60%",
            marginTop: "10%",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <div>
            <div style={{ textAlign: "center", marginTop: "18%" }}>
              <h5 style={{ width: "400px" }}>
                Hey Ladies, Do you have a SPEC? Here’s a chance to check just
                how much of a SPEC your SPEC is.
              </h5>
            </div>
            <Link to="/quiz/female">
              <div
                style={{
                  textAlign: "center",
                  padding: "15px",
                  border: "5px solid #4f9265",
                  width: "200px",
                  marginLeft: "auto",
                  marginRight: "auto",
                  marginTop: "10px",
                }}
              >
                TAKE A QUIZ
              </div>
            </Link>
          </div>
          <div>
            <div style={{ textAlign: "center", marginTop: "18%" }}>
              <h5 style={{ width: "400px" }}>
                Hey Guys, Are you a SPEC? Here’s a chance to check just how much
                of a SPEC you are. Lets go
              </h5>
            </div>
            <Link to="/quiz/male">
              <div
                style={{
                  textAlign: "center",
                  padding: "15px",
                  border: "5px solid #4f9265",
                  width: "200px",
                  marginLeft: "auto",
                  marginRight: "auto",
                  marginTop: "10px",
                }}
              >
                TAKE A QUIZ
              </div>
            </Link>
          </div>
        </div>
        <div
          style={{
            position: "fixed",
            width: "100%",
            bottom: "0px",
            display: "flex",
            padding: "20px",
            justifyContent: "space-between",
          }}
        >
          <span>TERMS OF USE | PRIVACY</span>
          <span>FOLLOW US</span>
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
