import React, { Fragment } from "react";
import { useMemo } from "react";
import { useCallback } from "react";
import { useState, useEffect } from "react";
import List from "./List";
import classes from "./UseCallback.module.css";

const UseCallback = () => {
  const [number, setNumber] = useState(1);
  const [dark, light] = useState(true);

  const handleOnChange = (event) => {
    setNumber(event.target.value);
  };

  const getItem = useCallback(()=>{
    return [+number, +number+1, +number+2, +number+3];
  }, [number])

  const handleTheme = () => {
    if (dark) {
      light(false);
      return;
    } else {
      light(true);
      return;
    }
  };
//   useEffect(() => {
//     console.log("Number changes");
//   }, [number]);
//   useEffect(() => {
//     console.log("Theme changes");
//   }, [dark]);

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
          <h1><List numList ={getItem} /></h1>
        </div>
        <div className={classes["change-theme"]}>
          <button onClick={handleTheme}>{dark ? "Dark" : "Light"}</button>
        </div>
      </main>
    </Fragment>
  );
};

export default UseCallback;
