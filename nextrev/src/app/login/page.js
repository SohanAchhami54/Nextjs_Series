'use client'
import { createPost } from '@/lib/action'
import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'


const loginSchema=z.object({
    email:z.string()
    .min(1,'Email is required')
    .email('Please enter a valid email address'),
    password:z.string()
    .min(1,'Password is required')
    .min(6,'Please enter a valid password')
})


const Login = () => {
   const {register,handleSubmit, formState:{errors,isSubmitting},reset}=useForm({
    resolver:zodResolver(loginSchema),
    mode:'onChange'
   })


   const onsubmit=(data)=>{
      createPost(data)
      reset()
   }

  return (
    <div className='mx-auto max-w-sm bg-gray-700 p-5 rounded-md'>
       <form onSubmit={handleSubmit(onsubmit)}
        className='flex flex-col gap-3'>
           <label htmlFor="email">Email:</label>
            <input type="text"
            {...register('email')}
            className='outline-none border focus:ring-2 py-1 rounded-md '
             placeholder='Enter your email'/>
             {errors.email && (
                <p className='text-red-500'>{errors.email.message} </p>
             )}
             <label htmlFor="password">Password:</label>
             <input type="password"
             {...register('password')}
             className='outline-none border focus:ring-2 py-1 rounded-md'
             placeholder='Enter your password'/>

             {errors.password && (
                <p className='text-red-500'>{errors.password.message} </p>
             )}

             <button className='py-2 bg-gray-800 rounded-md '>
                {isSubmitting?'Signing...':'Login'}
             </button>
       </form>
    </div>
  )
}

export default Login
