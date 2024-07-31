import Button from '@/components/ui/button/Button'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
interface Props {
  character: string
}
const CharacterType: FC<Props> = ({ character }) => {
  return (
    <div className="flex flex-col gap-y-2 items-center">
      <div className="flex shrink w-[300px] h-[300px]">
        <Image src="/images/character-type.svg" alt="character type" width={300} height={300} />
      </div>
      <span className="text-[22px] font-[CodecPro-Light] text-[#2C2E86]">Type of your character</span>
      <span className="bg-[#1232F0] rounded-[19px] text-white text-[18px] py-4 px-6 font-[CodecPro-Bold] uppercase">
        {character}
      </span>
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
