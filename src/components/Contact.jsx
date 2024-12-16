import React from 'react'
import { useForm } from "react-hook-form"
import axios from "axios"
import toast from "react-hot-toast"


const Contact = () => {
    const {
        register,
        handleSubmit,
        
        
        
        formState: { errors },
      } = useForm()
      const onSubmit = async(data) => {
        const userInfo={
            fullname: data.fullname,
            email: data.email,
            message: data.message
        }
        try {
               await axios.post("https://getform.io/f/bollwoja",userInfo );
               toast.success("Form submitted successfully");
        }
        catch (error) {
            console.error(error);
            toast.error("Failed to submit form");
        }
      }
  return (
   <>
   <div name='Contact' className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-16'>
<h1 className='text-3xl font-bold mb-4'>Contact Me </h1>
<span>Please fill out the form below to contact me.</span>
<div className='flex flex-col justify-center items-center mt-5'>
    <form 
    onSubmit={handleSubmit(onSubmit)}
    //action="https://getform.io/f/bollwoja"  method="POST"  
    className='bg-slate-200 w-96 px-8 py-6'>
        <h1 className='text-xl font-semibold mb-4 text-gray-700'>Send Your Message</h1>
        <div className='flex flex-col mb-4'>
            <label className='block text-gray-700'>Full Name:*</label>
            <input {...register("fullname", { required: true })}
            className='shadow appearance-none border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' 
            id='fullname'
            name='fullname'
            type='text'
            placeholder='Enter Your Name'/>
            {errors.fullname&& <span>This field is required</span>}
            <br />
            <label className='block text-gray-700'>Email Address:*</label>
            <input {...register("email", { required: true })}
            className='shadow appearance-none border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' 
            id='email'
            name='email'
            type='text'
            placeholder='Enter Your Email Address'/>
            
            {errors.email&& <span>This field is required</span>}
            <br />
            
            <label className='block text-gray-700'>Message</label>
            <textarea {...register("message", { required: true })}
            className='shadow appearance-none border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' 
            id='message'
            name='message'
            type='text'
            placeholder='Message'/>
            
            {errors.message&& <span>This field is required</span>}
            
        </div>
        <button type='submit' className='bg-black text-white px-5 py-2 rounded-lg hover:bg-slate-500 duration-100'>Send</button>
    </form>
</div>
   </div>
   </>
  )
}

export default Contact
