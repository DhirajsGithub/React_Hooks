import React, { Fragment } from 'react'
import Card from './Card';
import classes from './User.module.css';

const User = (props) => {
    const { name, username, email, address, website, company} = props.user;
  return (
    <Fragment>
        <Card>
            <h1>{name}</h1>
            <h2>username : {username}</h2>
            <a href={`${email}`}>{email}</a>
            <p>Find me at : <span>{address.street} <br /> {address.city} <br /> <mark>{address.zipcode}</mark> </span></p>
            <a href={`http://${website}`} target="_blank">{website}</a>
            
            <div className={classes.company}>
                <h1>{company.name}</h1>
                <h2>{company.catchPhrase}</h2>
                <p>{company.bs}</p>
            </div>
        </Card>
    </Fragment>
  )
}

export default User