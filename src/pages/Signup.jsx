import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

const Signup = () => {

  const [email,setEmail]=useState('')
  const[password,setPassword]=useState('')
  const {user,signUp} = UserAuth()
  const handleSubmit = async (e) => {
    e.preventDefault()
    try{
      await signUp(email,password)
    }
    catch(error)
    {
      console.log(error)
    }
  } 
  return (
    <div>
      <div className='w-full h-screen'>
        <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
        <div className='fixed w-full px-4 py-24 z-50'>
          <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white border border-white'>
              <div className='max-w-[320px] mx-auto py-16'>
              <h1 className=' text-3xl font-bold'>Sign Up</h1>
                <form className='w-full flex flex-col py-4' onSubmit={handleSubmit}>
                  <input className='p-3 my-2 bg-gray-700' type='email' placeholder='Email' onChange={(e)=>setEmail(e.target.value)}/>
                  <input className='p-3 my-2 bg-gray-700' type='password' placeholder='Password' onChange={(e)=>setPassword(e.target.value)}/>
                  <button className='bg-red-600 py-3 my-6 rounded font-bold'>Sign Up</button>
                  <div className='flex justify-between items-center text-gray-600'>
                    <p><input className='mr-2' type='checkbox'/>Remember</p>
                    <p>Need Help?</p>
                  </div>
                  <p className='py-8'><span className='text-gray-600'>Already subscribed to Netflix?</span>{' '}<Link to='/login'>Sign In</Link></p>
                </form>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup