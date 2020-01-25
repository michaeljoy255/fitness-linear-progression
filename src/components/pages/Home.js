import React, { useContext, Fragment } from "react";
import Navbar from "../home/Navbar";
import Routines from "../home/Routines";
import { Link } from "react-router-dom";
import AppContext from "../../context/appContext";
import { useEffect } from "react";

const Home = () => {
  const appContext = useContext(AppContext);
  const appTitle = "Fitness Progression";

  return (
    <Fragment>
      <Navbar />
      <h1>{appTitle}</h1>
      <Routines />
    </Fragment>
  );
};

export default Home;
