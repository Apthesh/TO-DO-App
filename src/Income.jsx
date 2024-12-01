// import React from 'react'

import { useState } from "react"


function Income() {
     let[totalincome,settotalincome]=useState(0)
     let[salary,setsalary]=useState("")

     let CalculateTax=()=>
     {
       return totalincome>3000
     }
     let updateTotalIncome =()=>
     {
       settotalincome(Number(salary))
     }
     let updatesalary=({target:{value}})=>
     {
        setsalary(value)
     }
  return (
    <>
    <h1>Income Tax:{CalculateTax()? "eligible" :"Not Eligible"}</h1>
<input type="text" placeholder="Enter salary" onChange={updatesalary}/>
<button onClick={updateTotalIncome}>Submit</button>
    </>
  )
}

export default Income