import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <div className='bg-primarycolor text-white py-6'>
            <div className='container mx-auto flex flex-col md:flex-row justify-between items-center'>
                <div className='text-center md:text-left'>
                    <Link href="/" className='text-exl text-white font-bold'>Logo</Link>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, necessitatibus praesentium </p>
                </div>
            </div>

        </div>
    )
}

export default Footer