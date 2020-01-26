import React, { Fragment } from "react";
// import Navbar from "../home/Navbar";
import Routines from "../home/Routines";

const Home = () => {
  const appTitle = "Fitness Progression";

  return (
    <Fragment>
      {/* <Navbar /> */}
      <h1 className='title'>{appTitle}</h1>
      <Routines />
    </Fragment>
  );
};

export default Home;
