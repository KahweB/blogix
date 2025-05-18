"use client"
import { Button } from '@/components/ui/button'
import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";



import Link from 'next/link'
import React from 'react'
import useStore from '@/store/useStore';

const Footer = () => {
    const { footerText } = useStore();
    return (
        <div className='bg-primarycolor text-white py-6  ' >
            <div className='container mx-auto flex flex-col md:flex-row justify-between items-center space-y-5'>
                <div className='text-center md:text-left'>
                    <Link href="/" className='text-exl text-white font-bold sm:space-y-4'>{footerText}</Link>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, necessitatibus praesentium</p>
                </div>
                <nav className='hidden md:flex space-x-6 '>

                </nav>
                <div className='flex flex-row space-x-4'>
                    <Button variant="secondary" size="icon">
                        < FaFacebookF />
                    </Button>
                    <Button variant="secondary" size="icon">
                        <FaGithub />

                    </Button>
                    <Button variant="secondary" size="icon">
                        <FaInstagram />

                    </Button>
                </div>
            </div>

        </div >
    )
}

export default Footer