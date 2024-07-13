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
      className={`cursor-pointer flex items-center gap-9 rounded-lg border py-6 px-5 ${checked ? 'bg-secondary border-secondary text-white' : ' transparent'}`}>
      <div
        className={`font-[CodecPro-News] w-10 h-10 text-center text-[30px] font-bold px-3 rounded-lg ${checked ? 'text-secondary bg-white' : 'bg-secondary text-white'}`}>
        {number}
      </div>
      <div>{title}</div>
    </div>
  )
}

export default AnswerItem
