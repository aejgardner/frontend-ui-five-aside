import React from "react";

import Players from "./components/Players";

import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

const App = () => (
  <Router basename="/">
    <React.Fragment>
      <Route exact path="/" component={Players} />
    </React.Fragment>
  </Router>
);

export default App;
