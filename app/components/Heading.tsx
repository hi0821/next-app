import React from 'react'

type HeadingProps = {
  children: React.ReactNode
}

const Heading = (props: HeadingProps) => {
  return (
    <h2 className="text-2xl md:text-[32px] font-bold mb-4 md:mb-8">
      {props.children}
    </h2>
  )
}

export default Heading
