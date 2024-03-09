import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='flex gap-x-3'>
        F4 Page
        <Link href='/f1/f3'>F3 Page Route</Link>
        <Link href='/about'>About</Link>
        <Link href='/blog'>Blog</Link>

    </div>
  )
}

export default page