import Button from '@/components/ui/button/Button'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

const CharacterType: FC = () => {
  return (
    <div className="flex flex-col gap-y-2 items-center">
      <Image src="/images/character-type.svg" alt="character type" width={350} height={350} />
      <span className="text-[24px] font-[CodecPro-Light] text-[#2C2E86]">Type of your character</span>
      <button className="bg-[#1232F0] rounded-[19px] text-white text-[20px] py-4 px-6 font-[CodecPro-Bold] uppercase">
        Problem solver
      </button>
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
