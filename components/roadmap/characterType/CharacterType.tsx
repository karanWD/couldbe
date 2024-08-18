'use client'
import Image from 'next/image'
import { FC } from 'react'
import { UseIsMobile } from '@/hooks/useIsMobile'

interface Props {
  userType: { profile_image: string; character: string }
}

const CharacterType: FC<Props> = ({ userType }) => {
  const isMobile = UseIsMobile()
  return (
    <div className="flex flex-row lg:flex-col gap-2 items-center">
      <div className="flex border border-neutral-200 rounded-xl w-[130px] h-[130px] lg:w-[300px] lg:h-[300px]">
        <Image
          src={userType.profile_image ?? '/images/character-type.svg'}
          alt="character type"
          width={isMobile ? 130 : 300}
          height={isMobile ? 130 : 300}
        />
      </div>
      <div className="flex flex-col gap-2">
        <div className="text-[18px] lg:text-[22px] font-[CodecPro-Light] text-[#2C2E86] lg:text-center">
          Type of your character
        </div>
        <div className="bg-[#1232F0] rounded-xl text-white text-[12px] lg:text-[18px] py-2 px-3 lg:py-4 lg:px-6 font-[CodecPro-Bold] uppercase">
          {userType.character}
        </div>
      </div>
      {/* <ddn className="text-[20px] font-[CodecPro-News]">Share your result:</span>
        <div className="flex gap-x-2 ">
          <Link href={''}>
            <img src="/images/instagram-gray.svg" />
          </Link>
          <Link href={''}>
            <img src="/images/linkedin-gray.svg" />
          </Link>
          <Link href={''}>
            <img src="/images/youtube-gray.svg" />
          </Link>
          <Link href={''}>
            <img src="/images/facebook-gray.svg" />
          </Link>
        </div>
      </div> */}
    </div>
  )
}
export default CharacterType
