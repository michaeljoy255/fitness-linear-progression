import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const RoutineButton = props => {
  const { rid, name, date, duration } = props;

  return (
    <li>
      <Link to={`/routine/${rid}`}>
        <div className='btn'>
          <div>{name}</div>
          <div>
            {(date && (
              <Fragment>
                {date} ({duration})
              </Fragment>
            )) ||
              "No previous record"}
          </div>
        </div>
      </Link>
    </li>
  );
};

export default RoutineButton;
