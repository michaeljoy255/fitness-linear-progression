import React, { useContext } from "react";
import AppContext from "../../../context/appContext";
import Defaults from "../../../modules/defaults";

const Inputs = props => {
  const appContext = useContext(AppContext);
  const { setDuration, setDistance, setWeight, setReps } = appContext;
  const { id, category, duration, distance, sets } = props;

  const onDuration = function(e) {
    setDuration(id, e.target.value);
  };

  const onDistance = function(e) {
    setDistance(id, e.target.value);
  };

  const onWeight = function(e) {
    setWeight(id, Number(e.target.name), e.target.value);
  };

  const onReps = function(e) {
    setReps(id, e.target.name, e.target.value);
  };

  // Conditionals that determine which inputs appear
  if (category === Defaults.Category.MISC) {
    return <div className='inputs'>{/* No inputs for MISC exercises */}</div>;
  } else if (category === Defaults.Category.CARDIO) {
    return (
      <div className='inputs'>
        <div>Duration</div>
        <div>Distance or Steps</div>
        <input type='number' placeholder={duration} onChange={onDuration} />
        <input type='number' placeholder={distance} onChange={onDistance} />
      </div>
    );
  } else {
    return (
      <div className='inputs'>
        <div>Set</div>
        <div>Weight</div>
        <div>Reps</div>
        <div>1</div>
        <input
          type='number'
          placeholder={sets[0].weight}
          name='0'
          onChange={onWeight}
        />
        <input
          type='number'
          placeholder={sets[0].reps}
          name='0'
          onChange={onReps}
        />
        <div>2</div>
        <input
          type='number'
          placeholder={sets[1].weight}
          name='1'
          onChange={onWeight}
        />
        <input
          type='number'
          placeholder={sets[1].reps}
          name='1'
          onChange={onReps}
        />
        <div>3</div>
        <input
          type='number'
          placeholder={sets[2].weight}
          name='2'
          onChange={onWeight}
        />
        <input
          type='number'
          placeholder={sets[2].reps}
          name='2'
          onChange={onReps}
        />
        <div>4</div>
        <input
          type='number'
          placeholder={sets[3].weight}
          name='3'
          onChange={onWeight}
        />
        <input
          type='number'
          placeholder={sets[3].reps}
          name='3'
          onChange={onReps}
        />
        <div>5</div>
        <input
          type='number'
          placeholder={sets[4].weight}
          name='4'
          onChange={onWeight}
        />
        <input
          type='number'
          placeholder={sets[4].reps}
          name='4'
          onChange={onReps}
        />
      </div>
    );
  }
};

export default Inputs;
