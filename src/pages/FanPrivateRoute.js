import React, { useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import jwt_decode from "jwt-decode";
import { useHistory } from "react-router-dom";
import { NotificationManager } from "react-notifications";

function FanPrivateRoute({ component: Component, props, dispatch, ...rest }) {
  let user;
  let history = useHistory();
  if (rest !== null) {
    if (rest.user.userType === "creator") {
      history.push("/dashboard");
    }
  }

  if (rest.location.search) {
    let data = {
      token: rest.location.search.slice(6, -1),
    };

    localStorage.setItem("trend-user", JSON.stringify(data));
    user = "something";
  } else {
    user = rest.user;
  }

  if (user !== null && user !== "something") {
    const decoded = jwt_decode(user.token);

    const expirationTime = new Date() / 1000;

    if (expirationTime >= decoded.exp) {
      user = null;
      dispatch({ type: "LOGIN_SUCCESS", payload: null });
      console.log("expired");
      localStorage.removeItem("trend-user");
      NotificationManager.error(
        "Session has expired, please log in again",
        "Error",
        10000
      );
      history.push("/login");
    }
  }

  return (
    <Route
      {...rest}
      render={(props) =>
        user ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
    data: state.user,
  };
};

export default connect(mapStateToProps)(FanPrivateRoute);