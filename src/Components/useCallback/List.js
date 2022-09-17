import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const List = (props) => {
    const [items, setItems] = useState([]);
    // const arr = [props.num, props.num*props.num, props.num*props.num*props.num]
    
    useEffect(()=>{
      setItems(props.numList())
        console.log("Updating Items")
    }, [props.numList])

  return (
    <ul>
        {items.map((item)=>{
            return <li key={item}>{item}</li>
        })}
    </ul>
  )
}

export default List