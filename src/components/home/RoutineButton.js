import React, { useContext } from "react";
import AppContext from "../../context/appContext";
import { Link } from "react-router-dom";

const RoutineButton = props => {
  const appContext = useContext(AppContext);
  const { id, name, date, duration } = props;

  return (
    <Link to={`/routine/${id}`} id={id} onClick={appContext.logState}>
      <div>{name}</div>
      <div>
        {date} ({duration})
      </div>
    </Link>
  );
};

export default RoutineButton;
