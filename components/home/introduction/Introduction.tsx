'use client'
import Button from '@/components/ui/button/Button'
import { FC } from 'react'
import { useRouter } from 'next/navigation'

const Introduction: FC = () => {
  const router = useRouter()
  return (
    <div className="flex flex-col justify-center items-center  lg:max-w-[90%] 2xl:max-w-[80%]  w-full gap-y-24">
      <div className="bg-[url('/images/introduction.svg')] bg-cover bg-no-repeat bg-center w-full lg:h-[480px] xl:h-[580px] rounded-[45px] flex  items-center">
        <div className="flex flex-col lg:w-[55%] 2xl:w-[46%] lg:pl-[58px] xl:pl-[90px] ">
          <span className="font-[CodecPro-Heavy] lg:text-[32px] 2xl:text-[44px] text-white ">
            Build your future development plan in minutes with AI
          </span>
          <span className="font-[CodecPro-Light] lg:text-[16px] 2xl:text-[18px] text-white mt-2 mb-8">
            Unlock your potential with an AI-powered personalized development plan, tailored to your unique background
            and aspirations, and assess your future skills to stay future-proof
          </span>
          <Button
            format="fill"
            variant="primary"
            size="md"
            className="w-[200px] font-[CodecPro-News] text-[20px]"
            onClick={() => {
              router.push('/preferences/career')
            }}>
            {` Let's get started`}
          </Button>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center text-center gap-y-3 lg:max-w-[64%] 2xl:max-w-[72%]">
        <span className="font-[CodecPro-Bold] text-[16px] text-[#1232F0] uppercase">Imagine what it couldbe</span>
        <span className="font-[CodecPro-ExtraBold] lg:text-[24px] xl:text-[32px] 2xl:text-[44px]">
          {' '}
          Start your journey towards a brighter future today.
        </span>
        <span className="font-[CodecPro-Light] lg:text-[16px] xl:text-[20px] 2xl:text-[24px] lg:px-24 xl:px-32">
          We combine AI technology with expert guidance to create a roadmap just for you.
        </span>
      </div>
    </div>
  )
}
export default Introduction
