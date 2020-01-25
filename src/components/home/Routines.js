import React, { useContext } from "react";
import RoutineButton from "../home/RoutineButton";
import AppContext from "../../context/appContext";

const Routines = () => {
  const appContext = useContext(AppContext);
  const { routines } = appContext.previous;

  return (
    <ul className='container'>
      {routines.map(routine => {
        return (
          <RoutineButton
            key={`rKey_${routine.id}`}
            rid={routine.id}
            name={routine.name}
            date={routine.date}
            duration={routine.duration}
          />
        );
      })}
    </ul>
  );
};

export default Routines;
