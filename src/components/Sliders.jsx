import React from 'react'

const items = [
  'Download Analytics',
  'Global Hotkeys',
  'Custom Menus',
  'Multi-window support',
  'Offline Support',
  'Screen Recording',
  'Lunch at Startup',
  'Deep Linking',
  'Trays',
  'Code Signing'
];

const Sliders = () => {
  return (
    <div className='border border-gray-300 h-[80px] flex items-center gap-5 rounded-xl m-9 overflow-hidden'>
      <div className='flex animate-scroll whitespace-nowrap'>
        {/* Duplicate content for seamless scroll */}
        {[...items, ...items].map((text, i) => (
          <p key={i} className='px-4 font-medium flex-shrink-0'>
            <span className='px-2 text-gray-400'>•</span>{text}
          </p>
        ))}
      </div>
    </div>
  )
}

export default Sliders
