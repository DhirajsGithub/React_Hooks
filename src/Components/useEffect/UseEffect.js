import React from "react";
import { useState, useEffect } from "react";
import { Fragment } from "react";
import classes from "./UseEffect.module.css";
import User from "./User";

const UseEffect = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
        setLoading(true);
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      let fetchUsers = await response.json();
      setUsers(fetchUsers);
      setLoading(false);
    };
    try {
      fetchUsers();
    } catch (error) {
      alert(error);
    }
  }, []);
  console.log(users);

  return (
    <Fragment>
      <div className={classes.UserData}>
        <h1>User Data</h1>
        {loading && <p className={classes.loading}>Loading...</p>}
        <ul>
          {users &&
            users.map((user) => {
              return <li key={user.id}>
                <User user={user} />
              </li>;
            })}
        </ul>
      </div>
    </Fragment>
  );
};

export default UseEffect;
