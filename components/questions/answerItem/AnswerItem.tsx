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
        className={`flex items-center justify-center font-[CodecPro-News] w-6 h-6 min-w-6  lg:w-8 lg:h-8 lg:min-w-8 text-[14px] lg:text-[24px] font-bold rounded-lg ${checked ? 'text-secondary bg-white' : 'bg-secondary text-white'}`}>
        {number}
      </div>
      <div className="text-[14px] lg:text-[20px]">{title}</div>
    </div>
  )
}

export default AnswerItem
