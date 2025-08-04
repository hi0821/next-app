import React from 'react'
import Link from 'next/link'

const Navigation = () => {
  return (
    <nav className='px-4'>
      <ul className='flex flex-col md:flex-row gap-2 md:gap-4 border-t border-black md:border-none'>
        <li className='py-4 md:p-0 border-b border-black md:border-none'><a className='font-bold' href="/page1">Page1</a></li>
        <li className='py-4 md:p-0 border-b border-black md:border-none'><a className='font-bold' href="/page2">Page2</a></li>
        <li className='py-4 md:p-0 border-b border-black md:border-none'><a className='font-bold' href="/page3">page3</a></li>
      </ul>
    </nav>
  )
}

export default Navigation
