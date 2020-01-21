import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AppContext from "../../context/appContext";
import DataInitializer from "../../modules/data-initializer";

const Home = () => {
  const appContext = useContext(AppContext);
  const routines = DataInitializer.initializeRoutines();

  return (
    <section className='home-section'>
      <h1>Fitness Linear Progression</h1>
      <div className='home-routines'>
        {routines.map(routine => (
          <Link
            to={`/routine/${routine.id}`}
            className='routine-btn'
            key={routine.id}
            onClick={appContext.setRoutineStartTime}
          >
            <div>{routine.name}</div>
            <div className='mini-text'>Jan 20, 2020 (00:12:15)</div>
          </Link>
        ))}
      </div>
      <p>WIP Fitness App ~ Michael J.</p>
    </section>
  );
};

export default Home;
