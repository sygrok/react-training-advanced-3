import React from "react";

import Navigation from "./Navigation";
import classes from "./MainHeader.module.css";
import Text from "../../store/auth-context";

const MainHeader = (props) => {
  return (
    <header className={classes["main-header"]}>
      <h1>A Typical Page</h1>
      <Navigation onLogout={props.onLogout} />
    </header>
  );
};

export default MainHeader;
