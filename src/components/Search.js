import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import React from 'react'

const Search = () => {
  return (
    <div className='search-wrapper bg-slate-900/20 backdrop-blur-[2px] fixed inset-0 p-6 flex justify-center items-center z-[999]'>
      <div className='w-full md:w-1/2 max-h-full overflow-auto bg-white shadow-sm rounded-lg py-2'>
        <div className='flex justify-between items-center w-full border-b border-primary/10 h-10 px-4'>
            <MagnifyingGlassIcon className='w-6 h-6 text-primary' />
        </div>        
      </div>
    </div>
  )
}

export default Search
