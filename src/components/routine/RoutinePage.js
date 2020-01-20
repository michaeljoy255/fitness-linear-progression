import React from "react";
import RoutineHeader from "./RoutineHeader";
import Exercise from "./exercise/Exercise";

const RoutinePage = () => {
  return (
    <div>
      <h1>Routine Page</h1>
      <RoutineHeader />
      <Exercise />
      <Exercise />
      <Exercise />
      <a href='/'>Submit Workout</a>
    </div>
  );
};

export default RoutinePage;
