import React, { useContext } from "react";
import RoutineButton from "../home/RoutineButton";
import AppContext from "../../context/appContext";

const Routines = () => {
  const appContext = useContext(AppContext);
  const { previous } = appContext;

  return (
    <div className='container'>
      {previous.routines.map(routine => {
        return (
          <RoutineButton
            key={routine.id}
            id={routine.id}
            name={routine.name}
            date={routine.date}
            duration={routine.duration}
          />
        );
      })}
    </div>
  );
};

export default Routines;
