import { FC } from 'react'
import Button from '@/components/ui/button/Button'
import { useRouter } from 'next/navigation'

const Banner: FC = () => {
  const router = useRouter()
  return (
    <div className="flex flex-col justify-center items-center lg:max-w-[90%] 2xl:max-w-[80%] w-full gap-y-24 mb-28">
      <div className="bg-[url('/images/banner.svg')] bg-cover bg-no-repeat bg-center w-full lg:h-[430px] xl:h-[520px] 2xl:h-[550px] rounded-[45px] flex  items-center">
        <div className="flex flex-col lg:w-[50%] 2xl:w-[46%] lg:pl-[64px] xl:pl-[104px] ">
          <span className="font-[CodecPro-Heavy] lg:text-[32px] xl:text-[40px] text-white ">
            Get started for free in 1 minute or less
          </span>
          <span className="font-[CodecPro-Light] lg:text-[16px] xl:text-[20px] text-white mt-2 mb-8 ">
            A step-by-step guide to creating and sustaining your own career path
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
    </div>
  )
}
export default Banner
