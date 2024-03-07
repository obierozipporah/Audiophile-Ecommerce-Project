import classes from "./Hero.module.css";
import Header from "../Header/Header.jsx";
import MainHead from "../MainHead/MainHead.jsx";
import React from "react";

const Hero = () => {
  return (
    <div className={classes.hero}>
      <Header />
      <MainHead />
    </div>
  );
};

export default Hero;