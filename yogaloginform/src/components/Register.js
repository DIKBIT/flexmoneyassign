import React ,{useContext, useState} from 'react'
import bgImg from '../assets/3921140.jpg'
import {useForm} from 'react-hook-form'
// const router = require('../../server/router/router')
// const controller = require("../../server/controller/controller")
import { NavLink } from 'react-router-dom'
import { adddata } from './context/ContextProvider'



const Register = (props) => {
  const {udata, setUdata} = useContext(adddata)
  // const history = useHistory();

  const [inpval,setINP] = useState({
    username:"",
    mail :"",
    pasword:"",
    confirmpwd :"",
    age :""
  })

  const setdata = (e) =>{
    console.log(e.target.value);
    const{name,value}=e.target;
    setINP((preval)=>{
      return {
        ...preval,
        [name]:value
      }

    })
  }

  const addinpdata = async (e) =>{
    e.preventDefault();

    const{username, mail, password, confirmpwd, age} =inpval;

    if(username ==="" || password ===""|| confirmpwd===""||age==="")
    alert("Fields are not filled.")
    else if (!mail.includes("@"))
    alert("Enter valid email address")
    else{

      const res= await fetch("/register",{
        method :"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          username,mail,confirmpwd,age
        })

      });

      const data = await res.json();
      console.log(data);

      if (res.status === 422 || !data){
        console.log("error");
        alert("error");
      }
      else{
        // history.push("/")
        setUdata(data)
        console.log("data added");
      }
    }
  }

  

    const {register, handleSubmit, formState:{errors}} = useForm()
    const onSubmit = data => console.log(data);
   return (
    <div className = 'register'>
    <div className='col-1'>
        <h2>YOGA REGISTER FORM</h2>
        <span>Stay calm and fit </span>
        <form method='POST' id='form' className='flex flex-col'>
        <input type="text" {...register("username", {required:"true"})} placeholder='Username'/>
        <input type="text" {...register("mail", {required:"true"})} placeholder='Email id'/>
        <input type="text" {...register("password", {required: "true"})} placeholder='Password'/>
        <input type="text" {...register("confirmpwd", {required: "true"})} placeholder='Confirm Password'/>
        <input type="number" {...register("age", {required: true,min:18, max:65})} placeholder='Age'/>
        {errors.age?.type==="required" && "age is to be specified"}
        {errors.age?.type==="min" && "your age is less than 18 hence not elogible"}
        {errors.age?.type==="max" && "your age is more than 18 hence not eligible"}
        <button className='btn'>REGISTER </button>
             
        </form>
        
        
        </div>

        <div className='col-2'>
            <img src={bgImg} alt="yoga image"></img>
        </div>

    </div>
  )
}

export default Register





































{/* <form id='form' className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
        <input type="text" {...register("username", {required:"true"})} placeholder='Username'/>
        <input type="text" {...register("password", {required: "true"})} placeholder='Password'/>
        <input type="text" {...register("confirmpwd", {required: "true"})} placeholder='Confirm Password'/>
        <input type="number" {...register("mobile",{required:true,maxLength:10, minLength:10})}placeholder='mobile no.'/>
        {errors.mobile?.type==="required" && "mobile number is reuired"}
        {errors.mobile?.type==="maxLength" && "max length exceeded"}
        {errors.mobile?.type==="minLength" && "less characters than min length"}
        <input type="number" {...register("age", {required: true,min:18, max:65})} placeholder='Age'/>
        {errors.age?.type==="required" && "age is to be specified"}
        {errors.age?.type==="min" && "your age is less than 18 hence not elogible"}
        {errors.age?.type==="rmax" && "your age is more than 18 hence not eligible"}
        <button className='btn'>SIGN IN </button>

        </form> */}