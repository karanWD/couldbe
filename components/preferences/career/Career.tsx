'use client'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import useFetch from '@/hooks/useFetch'
import { ApiRoutes } from '@/constants/routes'
import { popularCareers } from '@/constants/CareerSuggestions'

type careerItemType = { id: number; title: string; category: string }
type careerType = { data: careerItemType[] }

const Career = () => {
  const router = useRouter()
  const { request, response } = useFetch()
  const [career, setCareer] = useState('')
  const suggestions: careerItemType[] =
    career.length > 0 && response
      ? (response as careerType)?.data?.filter((item) => item.title.toLocaleLowerCase().includes(career))
      : []

  useEffect(() => {
    request({
      url: ApiRoutes.CAREERS,
      method: 'get',
    })
  }, [])

  const careerHandler = (value: number) => {
    sessionStorage.setItem('preferences', JSON.stringify({ intrested_career: value }))
    router.push('/preferences/budget')
  }
  return (
    <article className="w-full max-w-screen-xl mx-auto">
      <h1 className="font-[CodecPro-Heavy] text-[50px] text-center py-8">What it couldbe?</h1>
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
                  <li key={'SUGGESTION_ITEM_' + index} className=" py-2 px-4" onClick={() => careerHandler(item.id)}>
                    {item.title}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </form>
      </div>

      <div className={'mt-32 max-w-6xl mx-auto'}>
        <span className="font-[CodecPro-Bold] text-2xl ">Popular Careers</span>
        <div className="flex items-center justify-between gap-1 mt-4">
          {popularCareers.map((item, index) => (
            <div
              onClick={() => careerHandler(item.id)}
              key={index}
              className="w-[200px] h-[200px] flex items-center justify-center bg-gray-200 rounded-md">
              {item.title}
            </div>
          ))}
        </div>
      </div>
    </article>
  )
}

export default Career
