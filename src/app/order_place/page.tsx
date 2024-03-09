'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

const page = () => {
  const router = useRouter();
    const handleClick = () => {
        router.forward()
    }
  return (
    <>
        <h1>Our Product</h1>
        <button onClick={handleClick} className='text-red-900'>Click Here</button>
    </>
  )
}

export default page