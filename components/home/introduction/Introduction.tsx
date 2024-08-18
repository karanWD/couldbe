'use client'
import { FC } from 'react'
import { UseIsMobile } from '@/hooks/useIsMobile'
import FutureBannerMobile from '@/components/home/banner/FutureBannerMobile'
import FutureBanner from '@/components/home/banner/FutureBanner'

const Introduction: FC = () => {
  const isMobile = UseIsMobile()
  return (
    <div className="flex flex-col justify-center items-center  lg:max-w-[90%] 2xl:max-w-[80%]  w-full gap-y-24">
      {isMobile ? <FutureBannerMobile /> : <FutureBanner />}
      <div className="flex flex-col justify-center items-center text-center gap-y-3 max-w-[90%] lg:max-w-[64%] 2xl:max-w-[72%]">
        <span className="font-[CodecPro-Bold] text-[16px] text-[#1232F0] uppercase">Imagine what it couldbe</span>
        <span className="font-[CodecPro-ExtraBold] text-[32px] lg:text-[24px] xl:text-[32px] 2xl:text-[44px]">
          Start your journey towards a brighter future today.
        </span>
        <span className="font-[CodecPro-Light] text-[20px] lg:text-[16px] xl:text-[20px] 2xl:text-[24px] lg:px-24 xl:px-32">
          We combine AI technology with expert guidance to create a roadmap just for you.
        </span>
      </div>
    </div>
  )
}
export default Introduction
