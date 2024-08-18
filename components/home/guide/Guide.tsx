'use client'
import { FC } from 'react'
import { useRouter } from 'next/navigation'
import Button from '@/components/ui/button/Button'

const Guide: FC = () => {
  const router = useRouter()
  return (
    <div className="hidden lg:flex bg-[url('/images/guide.svg')] bg-contain bg-no-repeat bg-center max-w-full w-full lg:h-[980px] xl:h-[1100px] 2xl:h-[1360px] flex justify-center items-start">
      <div className="flex flex-col justify-center items-center text-center lg:gap-y-2 xl:gap-y-3 lg:max-w-[60%] xl:max-w-[53%] 2xl:max-w-[55%] lg:mt-36 xl:mt-40 2xl:mt-48 ">
        <span className="font-[CodecPro-Bold] text-[16px] text-[#1232F0] uppercase">Imagine what it couldbe?</span>
        <span className="font-[CodecPro-ExtraBold] lg:text-[24px] xl:text-[32px] 2xl:text-[44px]">
          Let Us Help You With Personalized Guidance
        </span>
        <span className="font-[CodecPro-Light] lg:text-[16px] xl:text-[20px] 2xl:text-[24px] lg:px-20 2xl:px-32">
          Get your own AI-Driven Guide to Future Success
        </span>
        <Button
          format="fill"
          variant="primary"
          size="lg"
          onClick={() => {
            router.push('/preferences/career')
          }}>
          {` Let's get started`}
        </Button>
      </div>
    </div>
  )
}
export default Guide
