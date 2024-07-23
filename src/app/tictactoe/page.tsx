"use client";
import React, { useState, useEffect } from 'react';

function Page() {
    const [matSize, setMatSize] = useState(3);
    const [matrix, setMatrix] = useState([]);
    const [isXNext, setIsXNext] = useState(true);
    const [winner, setWinner] = useState(null);

    useEffect(() => {
        const initialMatrix = Array(matSize).fill(null).map(() => Array(matSize).fill(null));
        setMatrix(initialMatrix);
        setWinner(null);
        setIsXNext(true);
    }, [matSize]);

    const handleClick = (i, j) => {
        if (matrix[i][j] || winner) return;

        const newMatrix = matrix.map((row, rowIndex) =>
            row.map((cell, colIndex) =>
                rowIndex === i && colIndex === j ? (isXNext ? 'X' : 'O') : cell
            )
        );

        setMatrix(newMatrix);
        setIsXNext(!isXNext);
        checkWinner(newMatrix);
    };

    const checkWinner = (matrix) => {
        const size = matSize;
        const lines = [];

        // Rows
        for (let i = 0; i < size; i++) {
            lines.push(matrix[i]);
        }

        // Columns
        for (let i = 0; i < size; i++) {
            const col = [];
            for (let j = 0; j < size; j++) {
                col.push(matrix[j][i]);
            }
            lines.push(col);
        }

        // Diagonals
        const diag1 = [];
        const diag2 = [];
        for (let i = 0; i < size; i++) {
            diag1.push(matrix[i][i]);
            diag2.push(matrix[i][size - 1 - i]);
        }
        lines.push(diag1);
        lines.push(diag2);

        for (let line of lines) {
            if (line[0] && line.every(cell => cell === line[0])) {
                setWinner(line[0]);
                return;
            }
        }

        if (matrix.flat().every(cell => cell !== null)) {
            setWinner('Draw');
        }
    };

    const handleReset = () => {
        const newMatrix = Array(matSize).fill(null).map(() => Array(matSize).fill(null));
        setMatrix(newMatrix);
        setIsXNext(true);
        setWinner(null);
    };

    const handleSizeChange = (event) => {
        const newSize = parseInt(event.target.value);
        if (newSize >= 3) {
            setMatSize(newSize);
        }
    };

    
    return (
        <div className='flex flex-col items-center'>
            <h1 className='text-2xl mb-4'>Tic Tac Toe</h1>
            <div className='mb-4'>
                <label className='mr-2'>Matrix Size:</label>
                <input
                    type='number'
                    value={matSize}
                    onChange={handleSizeChange}
                    min='3'
                    className='border-2 p-1'
                />
            </div>
            <div className='gap-2'>
                {matrix.map((row, i) => (
                    <div key={i} className='flex gap-2'>
                        {row.map((cell, j) => (
                            <div
                                onClick={() => handleClick(i, j)}
                                key={`${i}-${j}`}
                                className='hover:bg-white dark:hover:bg-black hover:text-black mt-2 h-20 w-20 text-3xl text-center flex items-center justify-center border-2'
                            >
                                {cell}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
            {winner && (
                <div className='mt-4'>
                    <h2 className='text-xl'>{winner === 'Draw' ? 'It\'s a Draw!' : `Winner: ${winner}`}</h2>
                    <button
                        onClick={handleReset}
                        className='mt-2 px-4 py-2 bg-blue-500 text-white rounded'
                    >
                        Restart Game
                    </button>
                </div>
            )}
        </div>
    );
}

export default Page;
