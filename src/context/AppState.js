import React, { useReducer } from "react";
import AppContext from "./appContext";
import AppReducer from "./appReducer";
import Initializer from "../modules/initializer";
import { SET_START_TIME } from "./types";

const AppState = props => {
  const initialState = {
    previous: {
      exercises: Initializer.initAllExercises(),
      routines: Initializer.initAllRoutines(),
      best: Initializer.initAllBest()
    },
    current: {
      exercises: [],
      routine: null,
      startedAt: null
    }
  };

  const [state, dispatch] = useReducer(AppReducer, initialState);

  const setStartTime = function(time) {
    dispatch({ type: SET_START_TIME, payload: time });
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
        setStartTime
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;
