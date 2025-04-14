'use client'
import ArrowDown from '@/components/icons/arrowDown'
import ArrowUp from '@/components/icons/ArrowUp'
import { FC, useState } from 'react'
interface Props {
  text: string
}
const LongText: FC<Props> = ({ text }) => {
  const [isShowMore, setShowMore] = useState(false)
  return (
    <div>
      <p className={`text-[14px] font-[CodecPro-News] min-h-[42px] line-clamp-2`}>{text}</p>
      {text.length > 90 && (
        <button
          onClick={() => setShowMore(!isShowMore)}
          className="flex items-center gap-x-1 underline text-[10px] font-[CodecPro-News] mt-[12px]">
          {isShowMore ? 'Read less' : 'Read more'}
          <div className="w-[6px]">{isShowMore ? <ArrowUp color="#000000" /> : <ArrowDown color="#000000" />}</div>
        </button>
      )}
    </div>
  )
}
export default LongText
