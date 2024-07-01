import Button from '@/components/ui/button/Button'
import { FC } from 'react'

const Banner: FC = () => {
  return (
    <div className="flex flex-col justify-center items-center max-w-[1526px] lg:max-w-[90%] w-full gap-y-24 mb-28">
      <div className="bg-[url('/images/banner.svg')] bg-contain bg-no-repeat bg-center w-full h-[682px] flex  items-center">
        <div className="flex flex-col w-[40%] pl-[104px] ">
          <span className="font-[CodecPro-Heavy] text-[50px] text-white ">
            Get started for free in 1 minute or less
          </span>
          <span className="font-[CodecPro-Light] text-[25px] text-white mt-2 mb-8 ">
            A step-by-step guide to creating and sustaining your own career path
          </span>
          <Button format="fill" variant="primary" size="md" className="w-[200px] font-[CodecPro-News] text-[20px]">
            {` Let's get started`}
          </Button>
        </div>
      </div>
    </div>
  )
}
export default Banner
