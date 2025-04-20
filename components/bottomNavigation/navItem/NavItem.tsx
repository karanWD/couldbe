import React, { FC, ReactNode } from 'react'

type Props = {
  text: string
  icon: ReactNode
  isActive: boolean
  onClick: () => void
}
const NavItem: FC<Props> = ({ text, icon, isActive, onClick }) => {
  return (
    <div
      className={`flex flex-col gap-2 flex-1 items-center ${isActive ? 'text-secondary' : 'text-neutral-700'}`}
      onClick={onClick}>
      <span className="w-6 h-6 ">{icon}</span>
      <span className="text-sm">{text}</span>
    </div>
  )
}

export default NavItem
