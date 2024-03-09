'use client'
import { notFound } from 'next/navigation'
import React from 'react'

function getRandomInt(count: number) {
    console.log("hi");
    return Math.floor(Math.random() * count)
}


const page = ({ params }: {
    params: { productId: string, reviewsId: string }
}) => {
    parseInt(params.reviewsId) > 1000 ? notFound() : ''
    
    const random = getRandomInt(2)
    if (random === 1) {
        throw new Error('Error Loading Reviewss ...')
    }


    return (
        <div>

            <h1>Reviews ID : {params.productId} of {params.reviewsId}</h1>
        </div>
    )
}

export default page