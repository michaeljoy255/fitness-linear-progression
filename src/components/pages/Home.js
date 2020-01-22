import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AppContext from "../../context/appContext";

const Home = () => {
  const appContext = useContext(AppContext);

  return (
    <section className='home-section'>
      <h1 className='app-title'>Fitness Linear Progression</h1>
      <div className='home-routines'>
        {appContext.initial_routines.map(routine => (
          <Link
            to={`/routine/${routine.id}`}
            className='routine-btn'
            key={routine.id}
            id={routine.id}
            onClick={appContext.setRoutineStartTime}
          >
            <div>{routine.name}</div>
            <div className='mini-text'>Jan 20, 2020 (00:12:15)</div>
          </Link>
        ))}
      </div>
      <p className='byline'>WIP Fitness App ~ Michael J.</p>
    </section>
  );
};

export default Home;
