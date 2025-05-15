import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <div className='bg-secondarycolor shadow-sm top-0 z-50'>
            <div className='container mx-auto flex items-center justify-between px-4 py-3'>
                <Link href="/" className='text-xl text-white font-bold'>Logo</Link>
            </div>
        </div>
    )
}

export default Header