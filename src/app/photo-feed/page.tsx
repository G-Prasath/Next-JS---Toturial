import React from 'react'
import wondersImage from './wonder'
import Link from 'next/link'
import Image from 'next/image'

const page = () => {
    
    return (
        <main>
            <div className='w-full'>
                <h1 className='text-center text-3xl font-bold mt-4'>New wonder of world</h1>
                <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
                    {
                        wondersImage.map(({ id, src, name }) => (
                            <Link href={`/photo-feed/${id}`} key={id}>
                                <Image
                                    src={src}
                                    alt={name}
                                    className='w-full object-cover aspect-square'
                                    width={150}
                                    height={150}
                                />
                            </Link>
                        ))
                    }
                </div>
            </div>
        </main>
    )
}

export default page