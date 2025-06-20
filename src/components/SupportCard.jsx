import React from 'react'

const SupportCard = () => {
    return (
        <div className='flex flex-col sm:items-center lg:justify-around lg:gap-12 lg:flex-row border border-slate-400 h-auto m-8 rounded-xl bg-slate-900 text-white'>
            <div className='m-8 lg:w-[48vh]'>
                <p className='mb-3'> DEDICATED SUPPORT AND EXPERT GUIDANCE.</p>
                <h1 className='text-5xl font-semibold mb-3'>Enterprise</h1>
                <div className='flex flex-col gap-3 '>
                    <p><span className='mr-3'>✔️</span>Whiteglove Onboarding</p>
                    <p><span className='mr-3'>✔️</span>Custom Features</p>
                    <p><span className='mr-3'>✔️</span>Priority Supportp</p>
                    <p><span className='mr-3'>✔️</span>Shared Slack Channel</p>
                    <p><span className='mr-3'>✔️</span>Dedicated Account Manager</p>
                    <p><span className='mr-3'>✔️</span>Custom Billing</p>
                </div>
            </div>
            <div className='bg-white text-slate-500 m-3 rounded-xl h-[35vh] flex  items-center flex-col px-8 py-7'>
                <p className='max-w-[290px] text-center m-5'>Secure, reliable cross-platform desktop apps for enterprise teams.</p>
                <div className='bg-blue-600 hover:bg-blue-700 text-white text-center px-16 py-3 rounded-xl font-semibold mb-5 cursor-pointer'>
                    <p>Contact Sales</p>
                </div>
                <p className='font-light'>You may also live chat with us by <span className='underline text-slate-700 px-3'>clicking here.</span></p>
            </div>
        </div>
    )
}

export default SupportCard
