import SearchIcon from '@/components/icons/SearchIcon'
import Button from '@/components/ui/button/Button'
import { ApiRoutes } from '@/constants/routes'
import UseFetch from '@/hooks/useFetch'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { FC, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
type careerItemType = { id: number; title: string; category: string }
type careerType = { data: careerItemType[] }
const Hero: FC = () => {
  const [career, setCareer] = useState('')
  const [response, setResponse] = useState()
  const router = useRouter()
  const suggestions: careerItemType[] =
    career.length > 0 && response
      ? (response as careerType)?.data?.filter((item) => item.title.toLocaleLowerCase().includes(career))
      : []
  useEffect(() => {
    axios
      .get(ApiRoutes.BASE + ApiRoutes.CAREERS)
      .then((res) => {
        setResponse(res?.data)
      })
      .catch((e) => {
        // toast.error(e?.response?.data?.errors[0])
      })
      .finally(() => {})
  }, [])
  const careerHandler = (value: number) => {
    sessionStorage.setItem('preferences', JSON.stringify({ career: value }))
    router.push('/preferences/budget')
  }
  return (
    <div className="lg:max-w-[80%] xs:max-w-full flex justify-center items-center text-center">
      <div className="flex flex-col justify-center items-center 2xl:max-w-[80%] xs:max-w-[90%] mb-12">
        <span className="xs:text-[35px] sm:text-[75px] xl:text-[64px] font-[CodecPro-Heavy]">What you couldbe?</span>
        <span className="xs:text-[20px] sm:text-[35px] xl:text-[24px] font-[codecPro-Light] text-center lg:px-12 xl:px-20">
          Envision Your Success with AI-Powered Paths toward Your Future Success
        </span>

        <form className=" mx-auto w-full mt-[56px] relative">
          <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center  pointer-events-none xs:w-4 md:w-7 xs:m-[16px] md:m-[28px]">
              <SearchIcon />
            </div>
            <input
              type="search"
              id="default-search"
              value={career}
              onChange={(e) => setCareer(e.target.value.toLocaleLowerCase())}
              className="block w-full xs:h-[60px] md:h-[91px] py-5 px-8 xs:ps-10 md:ps-16 font-[CodecPro-Light] xs:text-[12px] md:text-[20px] text-[rgba(0, 0, 0, 0.2)] shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)] rounded-[119px] bg-white focus:outline-none"
              placeholder="Get Your Roadmap in 1 minute"
              required
            />
            <Button
              type="submit"
              format="fill"
              variant="primary"
              size="lg"
              className=" absolute xs:end-[16px] md:end-[28px] xs:bottom-[10px] md:bottom-[17px] xs:h-[38px] md:h-[57px] xs:text-[12px] md:text-xl ">
              Search
            </Button>
          </div>
          {suggestions?.length > 0 && (
            <div className="max-h-60 overflow-auto shadow-[0_4px_18px_rgba(0,0,0,0.1)] rounded-[16px] absolute  transform translate-y-[10px] z-10 border-t border-gray-600 w-full bg-white">
              <ul className="py-2  text-sm text-gray-700 divide-y divide-gray-100">
                {suggestions.map((item, index) => (
                  <li
                    key={'SUGGESTION_ITEM_' + index}
                    className=" py-2 px-4"
                    onClick={() => {
                      careerHandler(item.id)
                    }}>
                    {item.title}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </form>
      </div>
    </div>
  )
}
export default Hero
