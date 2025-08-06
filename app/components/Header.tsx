"use client"
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Logo from '@/components/Logo'
import Navigation from '@/components/Navigation'
import styles from '@/styles/Header.module.scss'

const Header = () => {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    // クリーンアップで解除
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const handleNavLinkClick = () => setOpen(false);

  return (
    <header className='fixed top-0 left-0 right-0 bg-white border-b border-black z-50'>
      <div className='flex items-center justify-between w-full h-12 md:h-16 px-4 md:px-12'>
        <Link onClick={handleNavLinkClick} className='text-lg md:text-2xl font-bold' href="/">
          Logo
        </Link>
        {/* <Logo /> */}
        <button
          className={styles['c-header_navigation_button']}
          onClick={() => setOpen(!open)}
          aria-label="メニューを開く"
        >
          <span
            className={`
              ${styles['c-header_navigation_button-line']}
              ${open ? styles['is-open'] : ''}
            `}
          />
          <span
            className={`
              ${styles['c-header_navigation_button-line']}
              ${open ? styles['is-open'] : ''}
            `}
          />
        </button>
        <div
          className={`
            ${styles['c-header_navigation']}
            ${open ? styles['is-open'] : ''}
          `}
        >
          <nav className='px-4'>
            <ul className='flex flex-col md:flex-row gap-2 md:gap-4 border-t border-black md:border-none'>
              <li className='border-b border-black md:border-none'><Link onClick={handleNavLinkClick} className='block font-bold py-4 md:p-0' href="/about">About</Link></li>
              <li className='border-b border-black md:border-none'><Link onClick={handleNavLinkClick} className='block font-bold py-4 md:p-0' href="/works">Works</Link></li>
              <li className='border-b border-black md:border-none'><Link onClick={handleNavLinkClick} className='block font-bold py-4 md:p-0' href="/demo">Demo</Link></li>
            </ul>
          </nav>
          {/* <Navigation /> */}
        </div>
      </div>
    </header>
  )
}

export default Header