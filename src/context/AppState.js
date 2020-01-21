import React, { useReducer } from "react";
import AppContext from "./appContext";
import AppReducer from "./appReducer";
import { SET_START_TIME, RESET_TIME, SET_TIMER_ID } from "./types";

const AppState = props => {
  const initialState = {
    exercises: [],
    routine: null,
    routine_start_time: null,
    timer_id: null
  };

  const [state, dispatch] = useReducer(AppReducer, initialState);

  const setStartTime = () => {
    clearInterval(state.timer_id);
    dispatch({ type: SET_START_TIME });
  };

  const resetTime = () => {
    clearInterval(state.timer_id);
    dispatch({ type: RESET_TIME });
  };

  const setTimerId = timerId => {
    dispatch({ type: SET_TIMER_ID, payload: timerId });
  };

  return (
    <AppContext.Provider
      value={{
        exercises: state.exercises,
        routine: state.routine,
        routine_start_time: state.routine_start_time,
        timer_id: state.timer_id,
        setStartTime,
        resetTime,
        setTimerId
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;
