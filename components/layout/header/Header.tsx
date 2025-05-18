"use client"
import { Button } from '@/components/ui/button'
import { Search, User } from 'lucide-react'
import Link from 'next/link'
import MobileMenu from './MobileMenu'
import { ModeToggle } from '@/components/ModeToggle'
import useStore from '@/store/useStore'


/* import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet" */

const Header = () => {
    const { headerText } = useStore()

    return (
        <div className='headerBg shadow-sm top-0 z-50'>
            <div className='container mx-auto flex items-center justify-between px-4 py-3'>
                <Link href="/" className='text-2xl text-white font-bold'>{headerText}</Link>
                <nav className='hidden md:flex space-x-6'>
                    <Link href="/" className='text-white font-bold hover:underline'>Home</Link>
                    <Link href="/about" className='text-white font-bold hover:underline'>About</Link>
                    <Link href="/blog" className='text-white font-bold hover:underline'>Blog</Link>
                    <Link href="/blogclientside" className='text-white font-bold hover:underline'>Blogamaclient</Link>
                    <Link href="/contact" className='text-white font-bold hover:underline'>Contact</Link>
                </nav>
                <div className='flex items-center space-x-3'>
                    <Button variant="secondary">
                        <Search />
                    </Button>
                    <Link href="/login">
                        <Button variant="secondary">
                            <User />
                        </Button>
                    </Link>
                    <ModeToggle></ModeToggle>
                    <MobileMenu />


                </div>
            </div>
        </div>
    )
}

export default Header