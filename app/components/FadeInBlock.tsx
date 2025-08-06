'use client'
import React, {ReactNode} from 'react'
import { useInView } from 'react-intersection-observer'

type FadeInBlockProps = {
  children: ReactNode
}

const FadeInBlock = ({children}: FadeInBlockProps) => {
  const { ref, inView } = useInView({
      rootMargin: '-50px',
      triggerOnce: true,
  });

  return (
    <div ref={ref} className={`${inView ? "opacity-100" : "opacity-0 translate-y-[50%]"} duration-[1s]`}>
      {children}
    </div>
  )
}

export default FadeInBlock
