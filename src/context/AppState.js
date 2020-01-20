import React, { useReducer } from "react";
import AppContext from "./appContext";
import AppReducer from "./appReducer";
import { GET_App } from "./types";

const AppState = props => {
  const initialState = {};

  const [state, dispatch] = useReducer(AppReducer, initialState);

  // action methods go below

  return <AppContext.Provider value={{}}>{props.children}</AppContext.Provider>;
};

export default AppState;
