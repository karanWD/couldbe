import React, { FC } from 'react'

type Props = {
  title: string
  checked: boolean
  number: number
  onClick: () => void
}
const AnswerItem: FC<Props> = ({ number, title, checked, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`cursor-pointer flex items-center gap-4 rounded-lg border py-4 px-5 ${checked ? 'bg-secondary border-secondary text-white' : ' transparent'}`}>
      <div
        className={`font-[CodecPro-News] w-8 h-8 min-w-8 text-center text-[24px] font-bold rounded-lg ${checked ? 'text-secondary bg-white' : 'bg-secondary text-white'}`}>
        {number}
      </div>
      <div>{title}</div>
    </div>
  )
}

export default AnswerItem
