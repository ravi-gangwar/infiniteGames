import React from 'react'

function layout({ children }) {
    return (
        <div className='h-screen w-screen flex items-center justify-center'>
            {children}
        </div>
    )
}

export default layout