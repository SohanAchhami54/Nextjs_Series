'use client'
import React from 'react'
import { useLinkStatus } from 'next/link'
const LoadingSkeleton = () => {
const {pending}=useLinkStatus()

  return pending?<p className='text-5xl text-red-600'>loading</p>:''
}

export default LoadingSkeleton
