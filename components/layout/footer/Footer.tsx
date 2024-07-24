import { FC } from 'react'
import Link from 'next/link'
import Button from '@/components/ui/button/Button'

const Footer: FC = () => {
  return (
    <div className="flex w-full lg:h-[480px] xl:h-[560px] 2xl:h-[700px] bg-black ">
      <div className="bg-[url('/images/footer.svg')] bg-cover bg-no-repeat bg-center w-full h-[100%] flex  ">
        <div className="lg:w-[90%] xl:w-[80%] flex mx-auto justify-between lg:mt-32 xl:mt-36 2xl:mt-44">
          <div className="flex flex-col gap-y-16">
            <span className="lg:text-[22px] xl:text-[24px] font-[CodecPro-Heavy] text-white">Social Media</span>
            <div className="flex gap-x-2 ">
              <Link href={''}>
                <img src="/images/instagram.svg" />
              </Link>
              <Link href={''}>
                <img src="/images/linkedin.svg" />
              </Link>
              <Link href={''}>
                <img src="/images/youtube.svg" />
              </Link>
              <Link href={''}>
                <img src="/images/facebook.svg" />
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-y-16">
            <span className="lg:text-[22px] xl:text-[24px] font-[CodecPro-Heavy] text-white">Contact us</span>
            <div className="flex flex-col">
              <span className="lg:text-[16px] xl:text-[20px] font-[CodecPro-Pro] text-white">+98 912 111 1111</span>
              <span className="text-[20px] font-[CodecPro-Pro] text-white">info@couldbe.io</span>
            </div>
          </div>
          <div className="flex flex-col gap-y-9">
            <span className="lg:text-[22px] xl:text-[24px] font-[CodecPro-Heavy] text-white">
              Subscribe for Existential updates
            </span>
            <form className=" mx-auto w-full">
              <div className="relative bg-white flex items-center justify-between rounded-full overflow-hidden p-2">
                <input
                  type="search"
                  id="default-search"
                  className="block w-full  ps-8 font-[CodecPro-Light] lg:text-[16px] xl:text-[20px] text-[rgba(0, 0, 0, 0.2)] bg-white focus:outline-none"
                  placeholder="Your email address..."
                  required
                />
                <Button type="submit" format="fill" variant="primary" size="md">
                  Submit
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Footer
