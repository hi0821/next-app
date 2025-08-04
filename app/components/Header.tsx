"use client"
import React, { useState, useEffect } from 'react'
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

  return (
    <header className='fixed top-0 left-0 right-0 bg-white border-b border-black z-50'>
      <div className='flex items-center justify-between w-full h-12 md:h-16 px-4 md:px-12'>
        <Logo />
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
          <Navigation />
        </div>
      </div>
    </header>
  )
}

export default Header