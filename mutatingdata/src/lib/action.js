'use server'
import { redirect } from "next/navigation"

const createPost=async(formData)=>{
    
    const email=formData.email
    const password=formData.password 
    console.log('login attempt with:',{email,password}) 
    //mutate 
    //cached
    redirect('/')  
}

export {createPost}