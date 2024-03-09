import React from 'react'
import wondersImage, { WonderImage } from '../wonder'
import Image from 'next/image';

export default function photoPage({ params }: { params: { id: string } }) {

  const photo:WonderImage = wondersImage.find((p) => p.id === params.id)!;

  return(
    <div className='w-full mx-auto'>
      <div className='w-1/2 mx-auto'>
        <div>
          <h1 className='text-center text-3xl font-bold my-4'>{photo.name}</h1>
        </div>
        <Image
        src={photo.src}
        alt={photo.name}
        className='w-full object-cover aspect-auto'
        />

        <div className='bg-white py-4 text-black px-[10px]'>
          <p className='text-[14px]'>{photo.photographer}</p>
          <h4 className='text-[16px] font-bold'>{photo.location}</h4>
        </div>
      </div>
    </div>
  )
  

}