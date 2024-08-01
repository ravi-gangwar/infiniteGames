import { Button } from '@/components/ui/button';
import React from 'react'
import { MdDarkMode } from "react-icons/md";
function NavBar() {
    return (
        <div className='w-full pr-5 pl-5 flex justify-between items-center sticky top-0 bg-zinc-200 dark:bg-zinc-200 min-h-20'>
            <h1 className='text-3xl text-zinc-900 dark:text-zinc-800 font-extrabold'>InfinityStore</h1>
            <div className='flex gap-2'>
                <button className='text-3xl pl-5 pr-5 dark:bg-black rounded-full dark:text-white font-semibold'><MdDarkMode /></button>
                <button className='pl-5 pr-5 pt-2 pb-2 text-2xl dark:bg-black bg-black text-zinc-50 dark:text-white font-extrabold'>Login</button>
            </div>
        </div>
    )
}

export default NavBar