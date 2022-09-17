import React, { Fragment } from "react";
import { useMemo } from "react";
import { useState, useEffect } from "react";
import classes from "./UseMemo.module.css";

const UseMemo = () => {
  const [number, setNumber] = useState();
  const [dark, light] = useState(true);
  const doubleNum = useMemo(() => {
    return slowFunction(number);
  }, [number]);
  const handleOnChange = (event) => {
    setNumber(event.target.value);
  };
  const handleTheme = () => {
    if (dark) {
      light(false);
      return;
    } else {
      light(true);
      return;
    }
  };
  useEffect(() => {
    console.log("Number changes");
  }, [number]);
  useEffect(() => {
    console.log("Theme changes");
  }, [dark]);

  return (
    <Fragment>
      <main className={`${classes.memo} ${!dark ? classes.bgTheme : ""}`}>
        <div className={classes.input}>
          <input
            type="number"
            placeholder="Square of Number"
            onChange={handleOnChange}
          />
        </div>
        <div className={classes.display}>
          <h1>{doubleNum ? doubleNum : "Enter Number"}</h1>
        </div>
        <div className={classes["change-theme"]}>
          <button onClick={handleTheme}>{dark ? "Dark" : "Light"}</button>
        </div>
      </main>
    </Fragment>
  );
};
const slowFunction = (num) => {
  for (let i = 0; i < 1000000000; i++) {}
  return num * num;
};

export default UseMemo;
