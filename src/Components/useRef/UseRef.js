import React, { Fragment, useRef } from "react";
import classes from "./UseRef.module.css";

const UseRef = () => {
    
    const fNameRef = useRef();
    const lNameRef = useRef();

    const handleOnSubmit = (event)=>{
        event.preventDefault();
        const firstName = fNameRef.current.value ? fNameRef.current.value : " ";
        const lastName = lNameRef.current.value ? lNameRef.current.value : " ";
        alert(`Hello 👋 '${firstName} ${lastName}' from useRef`)
    }
  return (
    <Fragment>
      <div className={classes.main}>
        <form onSubmit={handleOnSubmit} className={classes.form} action="">
          <div>
            <label htmlFor="fName">First Name</label>
            <input type="text" id="fName" ref={fNameRef} />
          </div>
          <div>
            <label htmlFor="lName">Last Name</label>
            <input type="text" id="lName" ref={lNameRef} />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </Fragment>
  );
};

export default UseRef;
