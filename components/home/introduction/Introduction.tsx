import Button from '@/components/ui/button/Button'
import { FC } from 'react'

const Introduction: FC = () => {
  return (
    <div className="flex flex-col justify-center items-center max-w-[1526px] lg:max-w-[90%] w-full gap-y-24">
      <div className="bg-[url('/images/introduction.svg')] bg-contain bg-no-repeat bg-center w-full h-[682px] flex  items-center">
        <div className="flex flex-col w-[50%] pl-[104px] ">
          <span className="font-[CodecPro-Heavy] text-[50px] text-white ">
            Build your future development plan in minutes with AI
          </span>
          <span className="font-[CodecPro-Light] text-[25px] text-white mt-2 mb-8">
            Unlock your potential with an AI-powered personalized development plan, tailored to your unique background
            and aspirations, and assess your future skills to stay future-proof
          </span>
          <Button format="fill" variant="primary" size="md" className="w-[200px] font-[CodecPro-News] text-[20px]">
            {` Let's get started`}
          </Button>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center text-center gap-y-3 max-w-[65%] md:max-w-[69%]">
        <span className="font-[CodecPro-Bold] text-[20px] text-[#1232F0] uppercase">Imagine what it couldbe</span>
        <span className="font-[CodecPro-ExtraBold] text-[70px]">
          {' '}
          Start your journey towards a brighter future today.
        </span>
        <span className="font-[CodecPro-Light] text-[35px] px-32">
          We combine AI technology with expert guidance to create a roadmap just for you.
        </span>
      </div>
    </div>
  )
}
export default Introduction
