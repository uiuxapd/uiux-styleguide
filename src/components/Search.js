import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import React from 'react'

const Search = () => {
  return (
    <div className='search-popup'>
      <div className='search-box'>
        <div className='search-box-header'>
            <MagnifyingGlassIcon className='icon24 text-primary-main' />
        </div>        
      </div>
    </div>
  )
}

export default Search
