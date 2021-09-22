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
            marginTop: "5%",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <div>
            <h2 style={{ marginBottom: "30px" }}>WINNER DETAILS</h2>
            <form>
              <div style={{ marginBottom: "20px" }}>
                <div>
                  <label>Facebook Handle</label>
                </div>
                <input
                  type="text"
                  style={{
                    width: "100%",
                    border: 0,
                    borderBottom: "1px solid white",
                  }}
                  className="remove"
                />
              </div>

              <div style={{ marginBottom: "20px" }}>
                <div>
                  <label>Email Address</label>
                </div>
                <input
                  style={{
                    width: "100%",
                    border: 0,
                    borderBottom: "1px solid white",
                  }}
                  className="remove"
                  type="email"
                />
              </div>

              <div style={{ marginBottom: "20px" }}>
                <div>
                  <label>Phone Number</label>
                </div>
                <input
                  style={{
                    width: "100%",
                    border: 0,
                    borderBottom: "1px solid white",
                  }}
                  className="remove"
                />
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "20px",
                }}
              >
                <button
                  style={{
                    backgroundColor: "transparent",
                    color: "white",
                    borderRadius: "5px",
                    padding: "10px",
                  }}
                >
                  SHARE
                </button>
                <button
                  style={{
                    backgroundColor: "transparent",
                    color: "white",
                    borderRadius: "5px",
                    padding: "10px",
                  }}
                >
                  DOWNLOAD
                </button>
              </div>
            </form>
          </div>
          <div style={{ width: "50%" }}>
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
