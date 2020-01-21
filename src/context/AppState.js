import React, { useReducer } from "react";
import AppContext from "./appContext";
import AppReducer from "./appReducer";
import { ROUTINE_START_TIME } from "./types";

const AppState = props => {
  const initialState = {
    exercises: [],
    routine: null,
    routine_start_time: new Date().getTime()
  };

  const [state, dispatch] = useReducer(AppReducer, initialState);

  const setRoutineStartTime = () => {
    dispatch({ type: ROUTINE_START_TIME });
  };

  return (
    <AppContext.Provider
      value={{
        exercises: state.exercises,
        routine: state.routine,
        routine_start_time: state.routine_start_time,
        setRoutineStartTime
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;
