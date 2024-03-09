import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>

        <h1><Link href='/'>Home</Link></h1>
        <h5><Link href='/products'>List of Productrs</Link></h5>
        <p><Link href='/products/1'>Products 1</Link></p>
        <p><Link href='/products/2'>Products 2</Link></p>
        <p><Link href='/products/3' replace>Products 3</Link></p>
        
        
    </div>
  )
}

export default page