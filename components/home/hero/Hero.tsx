import SearchIcon from '@/components/icons/SearchIcon'
import Button from '@/components/ui/button/Button'
import { FC } from 'react'

const Hero: FC = () => {
  return (
    <div className="flex flex-col justify-center items-center max-w-[68%] mb-12">
      <span className="text-[100px] font-[CodecPro-Heavy]">What you couldbe?</span>
      <span className="text-[35px] font-[codecPro-Light] text-center px-20">
        Envision Your Success with AI-Powered Paths toward Your Future Success
      </span>

      <form className=" mx-auto w-full mt-[56px] ">
        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center  pointer-events-none w-7 m-[28px]">
            <SearchIcon />
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full h-[91px] py-5 px-8 ps-16 font-[CodecPro-Light] text-[20px] text-[rgba(0, 0, 0, 0.2)] shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)] rounded-[119px] bg-white focus:outline-none"
            placeholder="Get Your Roadmap in 1 minute"
            required
          />
          <Button
            type="submit"
            format="fill"
            variant="primary"
            size="lg"
            className=" absolute end-[28px] bottom-[17px]">
            Search
          </Button>
        </div>
      </form>
    </div>
  )
}
export default Hero
