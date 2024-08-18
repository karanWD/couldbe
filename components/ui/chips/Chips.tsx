import React, { FC } from 'react'

type ChipsType = {
  children: string
  clickHandler: () => void
  checked?: boolean
}
const Chips: FC<ChipsType> = ({ children, checked = false, clickHandler }) => {
  const defaultStyle = 'border rounded-full py-1 px-3 cursor-pointer min-w-[80px] text-center'
  const notCheckedStyle = 'border-black/[0.3] text-black'
  const checkedStyle = 'border-transparent text-white bg-secondary'
  return (
    <span className={defaultStyle + ' ' + (checked ? checkedStyle : notCheckedStyle)} onClick={clickHandler}>
      {children}
    </span>
  )
}

export default Chips
