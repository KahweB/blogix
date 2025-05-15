"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"


const MobileMenu = () => {
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);
    return (
        <Sheet open={isNavbarOpen}>
            <SheetTrigger asChild><Button variant="secondary" onClick={() => setIsNavbarOpen(true)} className='md:hidden'><Menu /></Button></SheetTrigger>

            <SheetContent className='' onInteractOutside={() => setIsNavbarOpen(false)}>
                <SheetHeader>
                    <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <div className='flex flex-col content-center items-center h-full space-y-19'>
                    <Link onClick={() => setIsNavbarOpen(false)} href="/" className='text-black text-2xl font-bold hover:underline'>Home</Link>
                    <Link onClick={() => setIsNavbarOpen(false)} href="/about" className='text-black text-2xl font-bold hover:underline'>About</Link>
                    <Link onClick={() => setIsNavbarOpen(false)} href="/blog" className='text-black text-2xl font-bold hover:underline'>Blog</Link>
                    <Link onClick={() => setIsNavbarOpen(false)} href="/contact" className='text-black text-2xl font-bold hover:underline'>Contact</Link>
                </div>

            </SheetContent>
        </Sheet>
    )
}

export default MobileMenu