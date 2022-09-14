import React from 'react'
import { MagnifyingGlassIcon, SunIcon } from '@heroicons/react/24/outline'

const Header = () => {
  return (
    <nav className='container px-10 h-16 max-w-full flex justify-between items-center sticky top-0 border-b border-slate-200 bg-white'>
        <div className='text-2xl font-bold'>
            UI/UIX Styleguide
        </div>
        <div className='flex justify-between gap-4'>
            <div className='p-1 bg-slate-50 rounded-full border border-blue-700'>
                <MagnifyingGlassIcon className='text-slate-800 h-[18px] w-[18px]' />
            </div>
            <div className='p-1 bg-slate-50 rounded-full border border-blue-700'>
                <SunIcon className='text-slate-800 h-[18px] w-[18px]' />
            </div>
        </div>
    </nav>
  )
}

export default Header
