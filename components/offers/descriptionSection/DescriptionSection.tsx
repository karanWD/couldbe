import Like from '@/components/icons/Like'
import Image from 'next/image'
import { FC } from 'react'

const DescriptionSection: FC = () => {
  return (
    <div className="flex flex-col gap-y-[36px]">
      <div className="flex justify-between items-center mb-[36px]">
        <div className="flex items-center gap-x-[14px]">
          <div className="flex justify-center items-center rounded-[100%] bg-[#CAD1FB] w-[55px] h-[55px]">
            <Image src="/images/online-education.svg" alt="online education" width={32} height={32} />
          </div>
          <span className="text-[15px] font-[CodecPro-Bold] text-[#AAAAAA]">powered by AI</span>
        </div>
        <button className="rounded-[100px] bg-[#CAD1FB] flex items-center h-[65px] px-[32px] gap-x-2 text-[18px] font-[CodecPro-News]">
          <div className="w-[17px] h-[17px] ">
            <Like />
          </div>
          Save roadmap
        </button>
      </div>
      <span className="text-[50px] font-[CodecPro-Heavy]">Lorem Ipsum</span>
      <p className="text-[20px] font-[CodecPro-Regular]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      </p>
    </div>
  )
}
export default DescriptionSection
