import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { Dashboard } from "./pages/index";
import { NotificationContainer } from "react-notifications";
import { connect } from "react-redux";
import "react-notifications/lib/notifications.css";
import "./style.css";
import "./App.css";
import MaleQuiz from "./pages/MaleQuiz";
import FemaleQuiz from "./pages/FemaleQuiz";
import Complete from "./pages/Complete";
import Badge from "./pages/Badge";
import Privacy from "./pages/Privacy";

function App(props) {
  return (
    <div className="back">
      <Router>
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/congrat" exact component={Complete} />
          <Route path="/badge" exact component={Badge} />
          <Route path="/privacy" exact component={Privacy} />
          <Route path="/quiz/male" exact component={MaleQuiz} />
          <Route path="/quiz/female" exact component={FemaleQuiz} />
        </Switch>
        <NotificationContainer />
      </Router>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.auth
  };
};

export default connect(mapStateToProps)(App);
