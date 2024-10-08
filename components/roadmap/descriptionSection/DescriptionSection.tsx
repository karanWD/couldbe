import Like from '@/components/icons/Like'
import Image from 'next/image'
import { FC } from 'react'

type Props = {
  characterStatement: string
}
const DescriptionSection: FC<Props> = ({ characterStatement }) => {
  return (
    <div className="flex flex-col gap-y-[18px] mb-20 lg:w-[90%]">
      <div className="flex justify-between items-center ">
        <div className="flex items-center gap-x-[14px]">
          <div className="flex justify-center items-center rounded-[100%] bg-[#CAD1FB] w-[55px] h-[55px]">
            <Image src="/images/online-education.svg" alt="online education" width={32} height={32} />
          </div>
          <span className="text-[15px] font-[CodecPro-Bold] text-[#AAAAAA]">powered by AI</span>
        </div>
        {/*<button className="rounded-[100px] bg-[#CAD1FB] flex items-center h-[65px] px-[32px] gap-x-2 text-[18px] font-[CodecPro-News]">*/}
        {/*  <div className="w-[17px] h-[17px] ">*/}
        {/*    <Like />*/}
        {/*  </div>*/}
        {/*  Save roadmap*/}
        {/*</button>*/}
      </div>
      <span className="text-[28px] font-[CodecPro-Heavy]">The roadmap powered by AI</span>
      <p className="text-[18px] font-[CodecPro-News]">{characterStatement}</p>
    </div>
  )
}
export default DescriptionSection
