import React from "react";
import Header from "../routine/Header";
import Exercise from "../routine/Exercise";

const Routine = () => {
  return (
    <section className='routine-section'>
      <Header />
      <Exercise />
      <Exercise />
      <Exercise />
      <a href='/'>Submit Workout</a>
    </section>
  );
};

export default Routine;
