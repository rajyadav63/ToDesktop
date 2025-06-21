import React from 'react'

const SubFooter = () => {
    return (
        <div className='flex flex-col justify-center items-center text-center gap-4 mt-9 mb-5'>
            <div className='flex justify-center items-center text-center gap-4'>
                <img className='h-[30px] rounded-lg' src="/assets/asset 54.svg" alt="" />
                <span className='text-slate-600'>A Y Combinator company.</span>
            </div>
            <div>
                <p className='text-slate-500'>© 2025 ToDesktop, Inc. All rights reserved.</p>
            </div>
        </div>
    )
}

export default SubFooter
