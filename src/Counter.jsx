// import React from 'react'

import { useState } from "react"

function Counter() {
    let[count,setcount]= useState(0)
    let[count1,setcount1]=useState(0)
    let upCount =()=>
    {
        setcount(count+5)
        console.log(count);
    }
    let secount=()=>
    {
        setcount1(5)
        console.log(count1);
    }

  return (
    <>
        <button onClick={upCount}>Count:{count}</button><br /><hr />
        <button onClick={secount}>count Once:{count1}</button>
    </>
  )
}

export default Counter