import Card from '@/ui/card'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <Card>
      <p>Users</p>
      <Link href='/complex-ui/archive'>Archive Mode</Link>
    </Card>
  )
}

export default page