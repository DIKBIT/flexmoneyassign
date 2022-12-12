import React from 'react'
import bgImg from '../assets/3921140.jpg'
import {useForm} from 'react-hook-form'

const Form = (props) => {

    const {register, handleSubmit, formState:{errors}} = useForm()
    const onSubmit = data => console.log(data);
  return (
    <section>
        <div className = 'register'>
        <div className='col-1'>
        <h2>YOGA SIGN IN FORM</h2>
        <span>Stay calm and fit </span>
        <form method='POST' id='form' className='flex flex-col'>
        <input type="text" {...register("mail", {required:"true"})} placeholder='Email id'/>
        <input type="text" {...register("password", {required: "true"})} placeholder='Password'/>
        <button className='btn'>SIGN IN </button>
        <h5>New candidate? Register here </h5>
        <button className='btn'>REGISTER </button>
    
             
        </form>
        
        
        </div>
        <div className='col-2'>
            <img src={bgImg} alt="yoga image"></img>
        </div>

        </div>
    </section>
  )
}

export default Form