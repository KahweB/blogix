import Footer from '@/components/layout/footer/Footer'
import Header from '@/components/layout/header/Header'
import React from 'react'

const RoutesLayout
    = ({ children }: { children: React.ReactNode }) => {
        return (
            <div className='flex flex-col min-h-screen'>
                <Header />
                <main className='flex-grow container mx-auto py-4 bg-primarycolor'>
                    {children}
                </main>
                <Footer />

            </div>
        )
    }

export default RoutesLayout
