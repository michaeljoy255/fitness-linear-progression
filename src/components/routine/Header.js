import React, { useContext, useEffect } from "react";
import AppContext from "../../context/appContext";
import useInterval from "../../modules/helpers";

const Header = () => {
  const appContext = useContext(AppContext);
  const { setStartTime, setTimerId, routine_start_time } = appContext;

  let timerId = useInterval(() => {
    setTimerId(timerId);
    calculateRoutineTime(routine_start_time);
  }, 1000);

  useEffect(() => {
    setStartTime();
    // eslint-disable-next-line
  }, []); // [] means call once

  const calculateRoutineTime = startTime => {
    const currentTime = new Date().getTime();
    const timeDiff = currentTime - startTime;
    const secsPerDay = 60 * 60 * 1000 * 24;
    const secsPerHour = 60 * 60 * 1000;

    const hours = Math.floor(((timeDiff % secsPerDay) / secsPerHour) * 1);
    const mins = Math.floor(
      (((timeDiff % secsPerDay) % secsPerHour) / (60 * 1000)) * 1
    );
    const secs = Math.floor(
      ((((timeDiff % secsPerDay) % secsPerHour) % (60 * 1000)) / 1000) * 1
    );

    const strHours = hours.toString().padStart(2, "0");
    const strMins = mins.toString().padStart(2, "0");
    const strSecs = secs.toString().padStart(2, "0");

    document.querySelector(
      "#routine-timer"
    ).innerHTML = `${strHours}:${strMins}:${strSecs}`;
  };

  return (
    <header className='routine-header'>
      <span>
        <i className='material-icons' id='cancel-btn'>
          cancel
        </i>
      </span>
      <span>
        <i className='material-icons'>calendar_today</i> &nbsp;
        <span>1/21/2020</span>
      </span>
      <span>
        <i className='material-icons'>timer</i> &nbsp;
        <span id='routine-timer'>00:00:00</span>
      </span>
    </header>
  );
};

export default Header;
