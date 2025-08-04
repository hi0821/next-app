import React, { ReactNode } from 'react'

type LayoutProps = {
  children: ReactNode
}

const Layout = ({children}: LayoutProps) => {
  return (
    <div>
      <div className='max-w-7xl mx-auto px-4 md:px-10'>
        {children}
      </div>
    </div>
  )
}

export default Layout