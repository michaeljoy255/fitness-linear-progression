import React, { useReducer } from "react";
import AppContext from "./appContext";
import AppReducer from "./appReducer";
import { START_TIMER, ROUTINE_TIMER, RESET_TIMER } from "./types";

const AppState = props => {
  const initialState = {
    exercises: [],
    routine: null,
    routine_start_time: 0,
    routine_timer: null,
    timer_id: null
  };

  const [state, dispatch] = useReducer(AppReducer, initialState);

  const startTimer = () => {
    clearInterval(state.timer_id);
    dispatch({ type: START_TIMER });

    let timerId = setInterval(
      () =>
        dispatch({
          type: ROUTINE_TIMER,
          payload: {
            startTime: initialState.routine_start_time,
            currentTime: new Date().getTime(),
            timerId
          }
        }),
      1000
    );

    // TEMP
    console.log(state.routine_timer);
  };

  const resetTimer = () => {
    clearInterval(state.timer_id);

    dispatch({ type: RESET_TIMER });
  };

  return (
    <AppContext.Provider
      value={{
        exercises: state.exercises,
        routine: state.routine,
        routine_timer: state.routine_timer,
        timer_id: state.timer_id,
        startTimer,
        resetTimer
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;
