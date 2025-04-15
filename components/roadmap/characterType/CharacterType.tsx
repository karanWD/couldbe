'use client'
import Image from 'next/image'
import { FC } from 'react'
import { UseIsMobile } from '@/hooks/useIsMobile'

interface Props {
  characterInfo: any
}

const CharacterType: FC<Props> = ({ characterInfo }) => {
  const isMobile = UseIsMobile()
  return (
    <div className="flex flex-row lg:flex-col gap-6 items-center">
      <div className="flex border border-neutral-200 rounded-xl w-[130px] h-[130px] lg:w-[300px] lg:h-[300px]">
        <Image
          src={characterInfo?.profile_image ?? '/images/character-type.svg'}
          alt="character type"
          width={isMobile ? 130 : 300}
          height={isMobile ? 130 : 300}
        />
      </div>
      <div className="flex flex-col gap-4">
        <div className="text-[16px] lg:text-[18px] font-[CodecPro-Light] text-[#2C2E86] lg:text-center">
          Type of your character
        </div>
        <div className="bg-[#1232F0] rounded-xl text-white text-[12px] lg:text-[18px] py-2 px-3 lg:py-4 lg:px-6 font-[CodecPro-Bold] uppercase">
          {characterInfo.title}
        </div>
      </div>
    </div>
  )
}
export default CharacterType
