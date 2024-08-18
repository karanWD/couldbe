'use client'
import React from 'react'
import Button from '@/components/ui/button/Button'
import { useRouter } from 'next/navigation'

const FutureBanner = () => {
  const router = useRouter()
  return (
    <div className="bg-[url('/images/introduction.svg')] bg-cover bg-no-repeat bg-center w-full lg:h-[480px] xl:h-[580px] rounded-[45px] flex  items-center">
      <div className="flex flex-col lg:w-[55%] 2xl:w-[46%] lg:pl-[58px] xl:pl-[90px] ">
        <span className="font-[CodecPro-Heavy] lg:text-[32px] 2xl:text-[44px] text-white">
          Build your future development plan in minutes with AI
        </span>
        <span className="font-[CodecPro-Light] lg:text-[16px] 2xl:text-[18px] text-white mt-2 mb-8">
          Unlock your potential with an AI-powered personalized development plan, tailored to your unique background and
          aspirations, and assess your future skills to stay future-proof
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
  )
}

export default FutureBanner
