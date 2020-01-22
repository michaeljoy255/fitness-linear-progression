import React, { useReducer } from "react";
import AppContext from "./appContext";
import AppReducer from "./appReducer";
import DataInitializer from "../modules/data-initializer";
import { ROUTINE_START_TIME } from "./types";

const AppState = props => {
  const initialState = {
    initial_exercises: DataInitializer.initializeExercises(),
    initial_routines: DataInitializer.initializeRoutines(),
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
        initial_exercises: state.initial_exercises,
        initial_routines: state.initial_routines,
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
