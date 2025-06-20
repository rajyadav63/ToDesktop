import React from 'react'

const Faq = () => {
    return (
        <div>
            <div className='border border-slate-300 px-5 py-7 rounded-2xl flex justify-between items-center m-5'>
                <div className='hover:cursor-pointer'>
                    <p>Is ToDesktop For Me?</p>
                    <p className='hidden'>That depends! If you would like to distribute your web app to your users as a downloadable desktop app then ToDesktop is for you.</p>
                </div>
                <img className='h-5 w-5 hover:cursor-pointer' src="/assets/asset 70.svg" alt="" />
            </div>
        </div>
    )
}

export default Faq
