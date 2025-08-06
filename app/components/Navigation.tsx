import React from 'react'
import Link from 'next/link'

const Navigation = () => {
  return (
    <nav className='px-4'>
      <ul className='flex flex-col md:flex-row gap-2 md:gap-4 border-t border-black md:border-none'>
        <li className='border-b border-black md:border-none'><Link className='block font-bold py-4 md:p-0' href="/about">About</Link></li>
        <li className='border-b border-black md:border-none'><Link className='block font-bold py-4 md:p-0' href="/works">Works</Link></li>
        <li className='border-b border-black md:border-none'><Link className='block font-bold py-4 md:p-0' href="/demo">Demo</Link></li>
      </ul>
    </nav>
  )
}

export default Navigation
