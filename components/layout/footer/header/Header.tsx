import Image from 'next/image'
import { FC } from 'react'

const Header: FC = () => {
  return (
    <div className="flex items-center justify-between max-w-full lg:w-[90%] 2xl:w-[80%] py-16 mx-auto">
      <Image src="/images/logo.svg" alt="couldbe logo" width={198} height={60} />
      <div className="flex items-center gap-x-2">
        <button className="rounded-[37px] text-[20px] font-[CodecPro-News] border border-[rgba(0, 0, 0, 0.3)] bg-white px-4 h-[45px] w-[130px]">
          Login
        </button>
        <button className="rounded-[37px] text-[20px] font-[CodecPro-News] text-white bg-[#2C2E86] px-4 h-[45px] ">
          Get started
        </button>
      </div>
    </div>
  )
}
export default Header
