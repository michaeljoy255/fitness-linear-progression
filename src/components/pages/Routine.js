import React, { Fragment, useContext, useEffect } from "react";
import AppContext from "../../context/appContext";
import Header from "../routine/Header";
import Exercises from "../routine/Exercises";

const Routine = props => {
  const appContext = useContext(AppContext);
  const { routines } = appContext.previous;
  const { setStartTime } = appContext;
  const { routineId } = props.match.params;

  const routineName = routines.find(routine => routine.id === routineId).name;
  const exerciseIds = routines.find(routine => routine.id === routineId)
    .exercise_ids;

  useEffect(() => {
    setStartTime(new Date().getTime());
    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      <Header />
      <div className='container'>{routineName}</div>
      <Exercises eids={exerciseIds} />
    </Fragment>
  );
};

export default Routine;
