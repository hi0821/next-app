import React from 'react'
import Logo from '@/components/Logo'

const Footer = () => {
  return (
    <footer className='pt-16 pb-4 border-t border-black'>
      <div className='px-4 md:px-12'>
        <Logo />
        <div className='mt-8 text-center'>
          <p className='text-xs font-bold'>@copy right</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
