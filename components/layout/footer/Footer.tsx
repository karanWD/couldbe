import Button from '@/components/ui/button/Button'
import Link from 'next/link'
import { FC } from 'react'

const Footer: FC = () => {
  return (
    <div className="flex w-full h-[800px] bg-black ">
      <div className="bg-[url('/images/footer.svg')] bg-cover bg-no-repeat bg-center w-full h-[800px] flex  ">
        <div className="w-[80%] flex mx-auto justify-between mt-44">
          <div className="flex flex-col gap-y-16">
            <span className="text-[29px] font-[CodecPro-Heavy] text-white">Social Media</span>
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
            <span className="text-[29px] font-[CodecPro-Heavy] text-white">Contact us</span>
            <div className="flex flex-col">
              <span className="text-[20px] font-[CodecPro-Pro] text-white">+98 912 111 1111</span>
              <span className="text-[20px] font-[CodecPro-Pro] text-white">info@couldbe.io</span>
            </div>
          </div>
          <div className="flex flex-col gap-y-9">
            <span className="text-[29px] font-[CodecPro-Heavy] text-white">Subscribe for Existential updates</span>
            <form className=" mx-auto w-full">
              <div className="relative">
                <input
                  type="search"
                  id="default-search"
                  className="block w-full h-[93px] p-[18px] ps-8 font-[CodecPro-Light] text-[20px] text-[rgba(0, 0, 0, 0.2)]  rounded-[100px] bg-white focus:outline-none"
                  placeholder="Your email address..."
                  required
                />
                <Button
                  type="submit"
                  format="fill"
                  variant="primary"
                  size="lg"
                  className=" absolute end-[18px] bottom-[19px]">
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
