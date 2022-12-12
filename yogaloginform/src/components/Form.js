import React from 'react'
import bgImg from '../assets/3921140.jpg'

const Form = () => {
  return (
    <section>
        <div className = 'register'>
        <div className='col-1'>
        <h2>YOGA SIGN IN FORM</h2>
        <span>Stay calm and fit </span>
        
        <form id='form' className='flex flex-col'>
        <input type="text" placeholder='username'/>
        <input type="text" placeholder='password'/>
        <input type="text" placeholder='confirm password'/>
        <input type="text" placeholder='mobile no.'/>
        <input type="text" placeholder='date of birth'/>


        <button className='btn'>SIGN IN </button>

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