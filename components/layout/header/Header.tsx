"use client"
import { Button } from '@/components/ui/button'
import { Menu, Search, User } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

const Header = () => {
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);
    return (
        <div className='bg-secondarycolor shadow-sm top-0 z-50'>
            <div className='container mx-auto flex items-center justify-between px-4 py-3'>
                <Link href="/" className='text-2xl text-white font-bold'>Logo</Link>
                <nav className='hidden md:flex space-x-6'>
                    <Link href="/" className='text-white font-bold hover:underline'>Home</Link>
                    <Link href="/about" className='text-white font-bold hover:underline'>About</Link>
                    <Link href="/blog" className='text-white font-bold hover:underline'>Blog</Link>
                    <Link href="/contact" className='text-white font-bold hover:underline'>Contact</Link>
                </nav>
                <div className='flex items-center space-x-3'>
                    <Button variant="secondary">
                        <Search />
                    </Button>
                    <Button variant="secondary">
                        <User />
                    </Button>

                    <Sheet open={isNavbarOpen}>
                        <SheetTrigger asChild><Button onClick={() => setIsNavbarOpen(true)} className='md:hidden'><Menu /></Button></SheetTrigger>

                        <SheetContent className='' onInteractOutside={() => setIsNavbarOpen(false)}>
                            <SheetHeader>
                                <SheetTitle>Menu</SheetTitle>
                            </SheetHeader>
                            <Link onClick={() => setIsNavbarOpen(false)} href="/" className='text-black font-bold hover:underline'>Home</Link>
                            <Link onClick={() => setIsNavbarOpen(false)} href="/about" className='text-black font-bold hover:underline'>About</Link>
                            <Link onClick={() => setIsNavbarOpen(false)} href="/blog" className='text-black font-bold hover:underline'>Blog</Link>
                            <Link onClick={() => setIsNavbarOpen(false)} href="/contact" className='text-black font-bold hover:underline'>Contact</Link>
                        </SheetContent>
                    </Sheet>



                </div>
            </div>
        </div>
    )
}

export default Header