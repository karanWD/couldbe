import { FC } from 'react'
import Image from 'next/image'

type Props = {
  isAuthorized: boolean
}
const Header: FC<Props> = ({ isAuthorized }) => {
  return (
    <div className="flex items-center justify-between max-w-full lg:w-[90%] 2xl:w-[80%] py-6 2xl:py-16 mx-auto">
      <Image src="/images/logo.svg" alt="couldbe logo" width={150} height={50} />
      <div className="flex items-center gap-x-2">
        <a
          className="rounded-[37px] text-[16px] 2xl:text-[20px] font-[CodecPro-News] border border-[rgba(0, 0, 0, 0.3)] bg-white px-8 py-1.5"
          href={isAuthorized ? '/roadmap' : '/login'}>
          {isAuthorized ? 'Show roadmap' : 'Login'}
        </a>
        <a
          className="rounded-[37px] text-[16px] 2xl:text-[20px] font-[CodecPro-News] text-white bg-[#2C2E86] py-1.5 px-8"
          href={'/preferences/career'}>
          {isAuthorized ? 'New roadmap' : 'Get started'}
        </a>
      </div>
    </div>
  )
}
export default Header
