import React, { useContext } from "react";
import AppContext from "../../context/appContext";

const Exercise = props => {
  const appContext = useContext(AppContext);

  const currentExercise = appContext.initial_exercises.find(
    exercise => exercise.id === props.id
  );

  console.log(currentExercise);

  return (
    <div className='exercise'>
      <p>Exercise Name - Category</p>
      <p>Exercise Notes</p>
      <div className='exercise-inputs'>
        <input type='text' />
        <input type='text' />
      </div>
    </div>
  );
};

export default Exercise;
