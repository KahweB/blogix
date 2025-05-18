"use client"

import { Button } from '@/components/ui/button'
import { Minus, PlusIcon } from 'lucide-react'
import React, { useEffect, useState } from 'react'

const AboutMainPage = () => {

    const [count, setCount] = useState<number>(0)
    useEffect(() => {
        document.title = `count ${count}`;
    }, [count])
    const increment = () => {
        setCount(count + 1);
    }
    const decrement = () => {
        if (count != 0) {
            setCount(count - 1);
        }

    }
    const reset = () => {
        setCount(0);
    }
    return (
        <div>
            <div>number is : {count}</div>
            <Button onClick={increment} variant="secondary"><PlusIcon></PlusIcon></Button>
            <Button onClick={decrement} variant="secondary"><Minus></Minus></Button>
            <Button onClick={reset} variant="secondary">reset</Button>

        </div >

    )
}

export default AboutMainPage