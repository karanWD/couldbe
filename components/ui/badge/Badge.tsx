import React, { FC, ReactNode } from 'react'

type BadgeType = {
  children: ReactNode
  type: 'secondary' | 'default'
}
const Badge: FC<BadgeType> = ({ children, type }) => {
  const Styles = {
    secondary: {
      bg: 'bg-secondary',
      color: 'text-white',
      border: 'border-transparent',
    },
    default: {
      bg: 'bg-transparent',
      color: 'text-black',
      border: 'border-black/[0.3]',
    },
  }
  return (
    <span
      className={
        Styles[type].bg +
        ' ' +
        Styles[type].color +
        ' ' +
        Styles[type].border +
        ' border text-[11px] font-[CodecPro-News]  rounded-full py-1 px-3'
      }>
      {children}
    </span>
  )
}

export default Badge
