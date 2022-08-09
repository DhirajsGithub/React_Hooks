import React from "react";
import { useState } from "react";
import classes from "./UseState.module.css";

const UseState = () => {
  const [toggle, setToggle] = useState("light");

  let themeClass = toggle === "light" ? "" : classes["dark-mode"];

  let btnName = toggle === "light" ? "Dark Mode" : "Light Mode";

  const toggleTheme = () => {
    if(toggle === "light"){
      setToggle("dark");
    }else{
      setToggle("light")
    }
    
  };

  return (
    <body className={themeClass}>
      
      <main>
      <div className={classes.btn}>
        <button class={classes["toggle-mode"]} onClick={toggleTheme}>
          {btnName}
        </button>
      </div>
        <h1>Article Heading</h1>

        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum
          cupiditate provident architecto aut ut similique delectus repellat
          facere neque nisi.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum
          cupiditate provident architecto aut ut similique delectus repellat
          facere neque nisi.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum
          cupiditate provident architecto aut ut similique delectus repellat
          facere neque nisi.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum
          cupiditate provident architecto aut ut similique delectus repellat
          facere neque nisi.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum
          cupiditate provident architecto aut ut similique delectus repellat
          facere neque nisi.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum
          cupiditate provident architecto aut ut similique delectus repellat
          facere neque nisi.
        </p>
      </main>
    </body>
  );
};

export default UseState;
