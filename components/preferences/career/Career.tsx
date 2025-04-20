'use client'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import useFetch from '@/hooks/useFetch'
import { ApiRoutes } from '@/constants/routes'
import { popularCareers } from '@/constants/CareerSuggestions'
import DrawerHandler from '@/components/reusable/drawerHandler/DrawerHandler'
import Guide from '@/components/reusable/guide/Guide'

type careerItemType = { _id: number; title: string; category: string }
type careerType = { data: careerItemType[] }

const Career = () => {
  const router = useRouter()
  const { request, response } = useFetch()
  const [career, setCareer] = useState('')
  const [showGuide, setGuide] = useState(false)

  const suggestions: careerItemType[] =
    career.length > 0 && response
      ? (response as careerType)?.data?.filter((item) => item.title.toLocaleLowerCase().includes(career))
      : []

  useEffect(() => {
    request({
      url: ApiRoutes.CAREERS,
      method: 'get',
    })
    const timeout = setTimeout(() => {
      setGuide(true)
    }, 500)

    return () => clearTimeout(timeout)
  }, [])

  const careerHandler = (value: number) => {
    sessionStorage.setItem('preferences', JSON.stringify({ interested_career: value }))
    router.push('/preferences/budget')
  }

  return (
    <article className="w-[90%] lg:w-full  lg:max-w-screen-xl mx-auto">
      <h1 className="font-[CodecPro-Heavy] text-[32px] lg:text-[50px] text-center py-8">What it couldbe?</h1>
      <div className="max-w-2xl mx-auto relative bg-white shadow-[0_4px_18px_rgba(0,0,0,0.1)] rounded-xl">
        <form>
          <div className="relative flex items-center  ">
            <div className=" flex items-center pointer-events-none px-5">
              <svg
                className="w-7 h-7 text-gray-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20">
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              value={career}
              onChange={(e) => setCareer(e.target.value.toLocaleLowerCase())}
              type="search"
              id="default-search"
              className="block w-full text-sm text-gray-900 p-5 bg-white focus:ring-transparent rounded-full"
              placeholder="Marketing, HR, Finance...."
              required
            />
          </div>
          {suggestions?.length > 0 && (
            <div className="max-h-60 overflow-auto shadow-[0_4px_18px_rgba(0,0,0,0.1)] absolute transform -translate-y-2 z-10 border-t border-gray-800 w-full bg-white">
              <ul className="py-2  text-sm text-gray-700 divide-y divide-gray-100">
                {suggestions.map((item, index) => (
                  <li key={'SUGGESTION_ITEM_' + index} className=" py-2 px-4" onClick={() => careerHandler(item._id)}>
                    {item.title}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </form>
      </div>

      <div className={'mt-16 lg:mt-32 max-w-6xl mx-auto pb-32 lg:pb-0'}>
        <span className="font-[CodecPro-Bold] text-2xl ">Popular functions</span>
        {response && (
          <div className="flex flex-wrap items-center justify-between gap-1 mt-4">
            {(response as careerType)?.data.slice(0, 6).map((item, index) => (
              <div
                onClick={() => careerHandler(item._id)}
                key={index}
                className="w-[calc(50%-0.25rem)] lg:w-[180px] h-[180px] flex  items-center justify-center bg-gray-200 rounded-md">
                {item.title}
              </div>
            ))}
          </div>
        )}
      </div>
      <DrawerHandler open={showGuide} closeHandler={() => setGuide(false)}>
        <Guide title={"Let's Personalize Your Development Journey!"} clickHandler={() => setGuide(false)}>
          <p className="">
            Before we start, we need a bit of information to tailor the best learning experience for you.
            <br />
            <br />
            Here’s what we’ll ask:
            <br />
            • Budget: Your preferred investment range.
            <br />
            • Course Length: Short-term or long-term.
            <br />
            • Learning Mode: Online, offline, or both.
            <br />
            • Industry of Interest: Your areas of focus.
            <br />
            • Job Category: The roles you are targeting.
            <br />
            <br />
            Study Abroad Preferences: Whether you’re interested in opportunities to study abroad. This quick step
            ensures your roadmap is perfectly suited to your needs. Ready to begin? Click ‘Next’!
          </p>
        </Guide>
      </DrawerHandler>
    </article>
  )
}

export default Career
