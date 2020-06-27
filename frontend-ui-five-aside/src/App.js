import React from "react";
import Players from "./components/Players";
import Teams from "./components/Teams";
import Loading from "./components/Loading/Loading";

import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

const App = () => (
  <Router basename="/">
    <React.Fragment>
      <Route exact path="/" component={Players} />
      <Route path="/team-sheet" component={Teams} />
      <Loading />
    </React.Fragment>
  </Router>
);

export default App;
