import React, { FC, ReactNode } from 'react'

type BadgeType = {
  children: ReactNode
  size?: 'small' | 'base' | 'large'
  type: 'secondary' | 'default'
}
const Badge: FC<BadgeType> = ({ children, type, size = 'small' }) => {
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
  const Sizes = {
    small: 'text-[12px]',
    base: 'text-[14px]',
    large: 'text-[16px]',
  }
  return (
    <span
      className={
        Styles[type].bg +
        ' ' +
        Styles[type].color +
        ' ' +
        Styles[type].border +
        ' ' +
        Sizes[size] +
        ' border font-[CodecPro-News]  rounded-full py-1 px-3'
      }>
      {children}
    </span>
  )
}

export default Badge
