import Image from 'next/image'
import { FC } from 'react'
import Like from '@/components/icons/Like'
import { useRouter } from 'next/navigation'

const DescriptionSection: FC = () => {
  const router = useRouter()
  return (
    <div className="flex flex-col gap-y-[24px] w-[90%]">
      <div className="flex justify-between items-center mb-[36px]">
        <div className="flex items-center gap-x-[14px]">
          <div className="flex justify-center items-center rounded-[100%] bg-[#CAD1FB] w-[55px] h-[55px]">
            <Image src="/images/online-education.svg" alt="online education" width={32} height={32} />
          </div>
          <span className="text-[15px] font-[CodecPro-Bold] text-[#AAAAAA]">powered by AI</span>
        </div>
        <button
          className="rounded-[100px] bg-[#CAD1FB] flex items-center py-4 px-[32px] gap-x-2 text-[16px] font-[CodecPro-News]"
          onClick={() => {
            router.push('/roadmap')
          }}>
          <div className="w-[17px] h-[17px] ">
            <Like />
          </div>
          Save roadmap
        </button>
      </div>
      <span className="text-[28px] font-[CodecPro-Heavy]">Design Your Success Pathway with Could Be</span>
      <p className="text-[18px] font-[CodecPro-Regular]">
        Based on your personal preferences and the results of your skill test, we have generated your personalized
        roadmap for development. Now, its time to choose the resources that best suit your learning style and goals.
        Please select one or two resources from each category below to ensure a comprehensive and well-rounded growth
        experience.
      </p>
    </div>
  )
}
export default DescriptionSection
