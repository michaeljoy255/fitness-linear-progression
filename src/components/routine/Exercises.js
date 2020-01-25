import React, { Fragment } from "react";
import Exercise from "./exercise/Exercise";

const Exercises = props => {
  const { eids } = props;

  return (
    <Fragment>
      <div className='container'>
        {eids.map(exerId => {
          return <Exercise key={`eKey_${exerId}`} id={exerId} />;
        })}
        <div>Finish Button</div>
      </div>
    </Fragment>
  );
};

export default Exercises;
