import React, { useReducer } from "react";
import AppContext from "./appContext";
import AppReducer from "./appReducer";
import { EXAMPLE_ACTION } from "./types";

const AppState = props => {
  const initialState = {
    exercises: [],
    routine: null
  };

  const [state, dispatch] = useReducer(AppReducer, initialState);

  /**
   * @todo action methods go here - EXAMPLE
   */
  const exampleAction = () => dispatch({ type: EXAMPLE_ACTION });

  return (
    <AppContext.Provider
      value={{
        exercises: state.exercises,
        routine: state.routine,
        exampleAction
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;
