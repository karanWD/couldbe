import Button from '@/components/ui/button/Button'
import { FC } from 'react'

const Guide: FC = () => {
  return (
    // <div className="flex flex-col justify-center items-center max-w-full w-full gap-y-24">
    <div className="bg-[url('/images/guide.svg')] bg-contain bg-no-repeat bg-center max-w-full w-full h-[1360px] flex justify-center items-start">
      <div className="flex flex-col justify-center items-center text-center gap-y-3 max-w-[50%] lg:max-w-[70%] mt-24 lg:mt-44">
        <span className="font-[CodecPro-Bold] text-[20px] text-[#1232F0] uppercase">Imagine what it couldbe?</span>
        <span className="font-[CodecPro-ExtraBold] text-[70px]">Let Us Help You With Personalized Guidance</span>
        <span className="font-[CodecPro-Light] text-[35px] px-32">Get your own AI-Driven Guide to Future Success</span>
        <Button format="fill" variant="primary" size="lg">
          {` Let's get started`}
        </Button>
      </div>
      {/* </div> */}
    </div>
  )
}
export default Guide
