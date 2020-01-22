import React, { useContext } from "react";
import Header from "../routine/Header";
import Exercise from "../routine/Exercise";
import AppContext from "../../context/appContext";

const Routine = props => {
  const appContext = useContext(AppContext);

  const currentRoutineId = props.match.params.id;

  const routineTitle = appContext.initial_routines.find(
    routine => routine.id === currentRoutineId
  ).name;

  const routineExerciseIds = appContext.initial_routines.find(
    routine => routine.id === currentRoutineId
  ).exercise_ids;

  const routineExercises = routineExerciseIds.map(exerciseId => (
    <Exercise key={exerciseId} id={exerciseId} />
  ));

  return (
    <section className='routine-section'>
      <Header />
      <div className='routine-title'>{routineTitle}</div>
      {routineExercises}
      <a href='/'>Submit Workout</a>
    </section>
  );
};

export default Routine;
