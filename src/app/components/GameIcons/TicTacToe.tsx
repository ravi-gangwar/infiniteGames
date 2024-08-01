"use client"
import { useRouter } from 'next/navigation';
import React from 'react'
import { GiTicTacToe } from "react-icons/gi";

function TicTacToe() {
    const router = useRouter();

    const handleRedirect = () => {
        router.push('/tictactoe');
    }
    return (
        <div onClick={()=> handleRedirect()} className='cursor-pointer min-h-20 min-w-20 border-2 rounded-lg text-2xl dark:text-white dark:border-white p-10 flex flex-col justify-center items-center'>
            <GiTicTacToe size={90} />
            <p>Tic Tac Toe</p>
        </div>  

    )
}

export default TicTacToe