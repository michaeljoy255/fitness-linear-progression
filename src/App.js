import React from "react";
import HomePage from "./components/home/HomePage";
import AppState from "./context/AppState";

import "./App.css";

const App = () => {
  return (
    <AppState>
      <HomePage />
    </AppState>
  );
};

export default App;
