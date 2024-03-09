import React from 'react'
import { Metadata } from 'next'

type Props = {
  params: {
    productId: string
  }
}

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  const title = await new Promise(resolve => {
    setTimeout(() => {
      resolve(`iPhone ${params.productId}`)
    },100)
  })
  return {
    title: `Product ${title}`
  }
}


const page = ({ params }: Props) => {
  return (
    <div>
      <p>This Product ID : {params.productId}</p>
    </div>
  )
}

export default page