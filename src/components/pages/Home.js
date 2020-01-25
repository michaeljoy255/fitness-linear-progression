import React, { Fragment } from "react";
import Navbar from "../home/Navbar";
import Routines from "../home/Routines";

const Home = () => {
  const appTitle = "Fitness Progression";

  return (
    <Fragment>
      {/* <Navbar /> */}
      <h1>{appTitle}</h1>
      <Routines />
    </Fragment>
  );
};

export default Home;
