import React, { useContext } from "react";
import AppContext from "../../context/appContext";

const Header = () => {
  const appContext = useContext(AppContext);

  const calculateRoutineTime = () => {
    appContext.startTimer();
    const currentTime = new Date().getTime();
    const timeDiff = currentTime - appContext.routine_start_time;

    const hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
    const mins = Math.floor((timeDiff / 1000 / 60) % 60);
    const secs = Math.floor((timeDiff / 1000) % 60);

    const sHours = hours.toString().padStart(2, "0");
    const sMins = mins.toString().padStart(2, "0");
    const sSecs = secs.toString().padStart(2, "0");

    document.querySelector(
      "#routine-timer"
    ).innerHTML = `${sHours}:${sMins}:${sSecs}`;
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
        <span id='routine-timer'></span>
      </span>
    </header>
  );
};

export default Header;
