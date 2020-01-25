import React, { useReducer } from "react";
import AppContext from "./appContext";
import AppReducer from "./appReducer";
import Initializer from "../modules/initializer";
import { ROUTINE_START_TIME } from "./types";

const AppState = props => {
  // Setup initial state
  const initialState = {
    previous: {
      exercises: Initializer.initAllExercises(),
      routines: Initializer.initAllRoutines(),
      best: Initializer.initAllBest()
    },
    current: {
      exercises: [],
      routine: null,
      startTime: null
    }
  };

  const [state, dispatch] = useReducer(AppReducer, initialState);

  const setRoutineStartTime = () => {
    dispatch({ type: ROUTINE_START_TIME });
  };

  const logState = () => {
    console.log(state);
  };

  //----------------------------------------------------------------------------
  return (
    <AppContext.Provider
      value={{
        previous: {
          exercises: initialState.previous.exercises,
          routines: initialState.previous.routines,
          best: initialState.previous.best
        },
        current: {
          exercises: [],
          routine: null,
          startedAt: null
        },
        logState,
        setRoutineStartTime
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;
