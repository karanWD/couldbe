import Like from '@/components/icons/Like'
import Image from 'next/image'
import { FC } from 'react'

type Props = {
  data: any
}
const DescriptionSection: FC<Props> = ({ data }) => {
  return (
    <div className="flex flex-col gap-y-[18px]">
      <div className="flex justify-between items-center ">
        <div className="flex items-center gap-x-[14px]">
          <div className="flex justify-center items-center rounded-[100%] bg-[#CAD1FB] w-[55px] h-[55px]">
            <Image src="/images/online-education.svg" alt="online education" width={32} height={32} />
          </div>
          <span className="text-[15px] font-[CodecPro-Bold] text-[#AAAAAA]">powered by AI</span>
        </div>
      </div>
      <span className="text-[28px] font-[CodecPro-Heavy]">The roadmap powered by AI</span>
      <p className="text-[18px] font-[CodecPro-News] text-justify">{data.Description}</p>
    </div>
  )
}
export default DescriptionSection
