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
        ' border text-xs rounded-full py-1.5 px-4'
      }>
      {children}
    </span>
  )
}

export default Badge
