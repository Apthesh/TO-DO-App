// import React from 'react'
import "../public/formdata.css"
import { useForm } from "react-hook-form"

function Forms() {

  let {register, handleSubmit, formstate:{errors}}= useForm();

  let sendformdata=(data)=>
  {
    console.log(data);
  }
  // console.log(errors);
  return (

    <form onSubmit={handleSubmit(sendformdata)}>
      <h1>Register Form</h1>

      <div className="text- field" >
      <input type="text" placeholder="Enter Your Name" {...register("fullname")}/>
      <div className="message">
        {errors.fullname?.message}
      </div>
      </div>

      <div className="pass-field" >
      <input type="password" placeholder="Enter password" {...register("password")}/>
      <div className="message">
        {errors.password?.message}
      </div>
      </div>

      <button type="submit">Register</button>
      
    </form>
  )
}

export default Forms