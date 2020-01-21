import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Routine from "./components/pages/Routine";
import NotFound from "./components/pages/NotFound";

import AppState from "./context/AppState";

import "./App.css";

const App = () => {
  return (
    <AppState>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/routine/:id' component={Routine} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </AppState>
  );
};

export default App;
