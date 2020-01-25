import React from "react";

const Inputs = props => {
  const { id, duration, distance, sets } = props;

  return (
    <div className='inputs'>
      ---Inputs---
      {duration}
      {distance}
    </div>
  );
};

export default Inputs;
