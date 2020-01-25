import React, { useContext } from "react";
import AppContext from "../../../context/appContext";
import Heading from "./Heading";
import Details from "./Details";
import Inputs from "./Inputs";

const Exercise = props => {
  const appContext = useContext(AppContext);
  const { exercises } = appContext.previous;
  const { id } = props;

  const { name, category, notes, duration, distance, sets } = exercises.find(
    exer => exer.id === id
  );

  return (
    <div className='exercise' id={id}>
      <Heading name={name} category={category} />
      <Details notes={notes} />
      <Inputs id={id} duration={duration} distance={distance} sets={sets} />
    </div>
  );
};

export default Exercise;
