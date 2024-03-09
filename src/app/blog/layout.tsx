'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { usePathname } from 'next/navigation'

const navLink = [
    { label: 'Blog-1', link: '/blog/blog-1' },
    { label: 'Blog-2', link: '/blog/blog-2' },
    { label: 'Blog-3', link: '/blog/blog-3' },
]

const layout = ({ children }: { children: React.ReactNode }) => {
    const [input, setInput] = useState('')
    const pathname = usePathname();
    return (
        <div>
            <div>
                <input type="text" value={input} onChange={e => setInput(e.target.value)} className='border-2 border-red-500 text-black' />
            </div>
            <ul>
                {
                    navLink.map((items) => {
                        const isActive = pathname.startsWith(items.link)
                        return (
                            <li key={items.label}>
                                <Link href={items.link} className={isActive ? 'text-red-900 bg-white' : ''}>{items.label}</Link>
                            </li>
                        )
                    })
                }
            </ul>
            {children}
        </div>
    )
}

export default layout