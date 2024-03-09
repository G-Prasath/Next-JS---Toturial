import React from 'react'
import wondersImage, { WonderImage } from '../../../wonder'
import Image from 'next/image';
import Modal from '@/ui/Modalbox';

export default function photoPage({ params }: { params: { id: string } }) {

  const photo: WonderImage = wondersImage.find((p) => p.id === params.id)!;

  return (
    <Modal>
      <div className='w-full mx-auto'>
        <div className='w-1/2 mx-auto'>
         
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
    </Modal>
  )


}