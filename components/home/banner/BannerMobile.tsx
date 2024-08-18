'use client'
import React from 'react'
import Button from '@/components/ui/button/Button'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

const BannerMobile = () => {
  const router = useRouter()
  return (
    <div className="bg-[#262772] rounded-xl w-[90%] mx-auto lg:hidden flex flex-col gap-4 p-8 pb-0 relative">
      <span className="font-[CodecPro-Heavy] text-[28px] text-white">Get started for free in 1 minute or less</span>
      <span className="font-[CodecPro-Light] text-[14px] text-neutral-200">
        A step-by-step guide to creating and sustaining your own career path
      </span>
      <Button
        format="fill"
        variant="primary"
        size="md"
        className="font-[CodecPro-News] w-fit text-[10px]"
        onClick={() => {
          router.push('/preferences/career')
        }}>
        {` Let's get started`}
      </Button>
      <Image src={'/images/banner-mobile.png'} alt={'CouldBe'} width={270} height={300} className="mx-auto" />
    </div>
  )
}

export default BannerMobile
