import React from 'react'

const ToDesktopHandle = () => {
  return (
    <div className='flex flex-col lg:flex-row ml-16 mr-16 gap-3'>
      <div className='lg:w-1/3'>
        <div className='bg-gray-200 border border-gray-400 flex flex-col justify-center items-center h-auto py-4 rounded-2xl mb-5'>
          <h1 className='text-2xl mb-1 font-semibold'>Native Notifications</h1>
          <img src="/assets/asset 37.png" />
        </div>
        <div className='bg-gray-200 border border-gray-400 flex flex-col justify-center items-center h-auto py-4 rounded-2xl mb-5'>
          <h1 className='text-2xl mb-1 font-semibold'>Auto updates</h1>
          <p className='text-center m-3'>We’ll ensure the underlying browser is up to date and deliver performance improvements, security patches, & additional features.</p>
          <img src="/assets/asset 38.png" />
        </div>
      </div>
      <div className='lg:w-1/3'>
        <div className='bg-gray-200 border border-gray-400 flex flex-col justify-center items-center h-auto py-4 rounded-2xl mb-5'>
          <h1 className='text-2xl mb-1 font-semibold'>Plugins</h1>
          <img src="/assets/asset 39.png" />
        </div>
        <div className='bg-gray-200 border border-gray-400 flex flex-col justify-center items-center h-auto py-4 rounded-2xl mb-5'>
          <h1 className='text-2xl mb-1 font-semibold'>Access to Native APIs</h1>
          <p className='text-center m-2'>ToDesktop ensures the underlying browser, performance improvements, security patches and additional features are always up to date.</p>
          <img src="/assets/asset 40.png" />
        </div>
      </div>
      <div className='lg:w-1/3 gap-2'>
        <div className='bg-gray-200 border border-gray-400 flex flex-col justify-center items-center h-auto py-4 rounded-2xl mb-5'>
          <h1 className='text-2xl mb-1 font-semibold'>Native Notifications</h1>
          <img src="/assets/asset 41.png" />
        </div>
        <div className='bg-gray-200 border border-gray-400 flex flex-col justify-center items-center h-auto py-4 rounded-2xl mb-5'>
          <h1 className='text-2xl mb-1 font-semibold'>Native Installers</h1>
          <p className='text-center m-2'>We even provide a magic link which will detect your users operating system & download the most up to date version of your app.</p>
          <img src="/assets/asset 43.png" />
        </div>
      </div>

    </div>
  )
}

export default ToDesktopHandle
