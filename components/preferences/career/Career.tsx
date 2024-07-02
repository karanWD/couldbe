'use client'
import React, { useState } from 'react'

const careers = [
  { title: 'Software Developer' },
  { title: 'Marketing Manager' },
  { title: 'Financial Analyst' },
  { title: 'Graphic Designer' },
  { title: 'Project Manager' },
]

const careersOptions = [
  { title: 'Accountant', category: 'Accounting and Finance' },
  { title: 'Financial Analyst', category: 'Accounting and Finance' },
  { title: 'Auditor', category: 'Accounting and Finance' },
  { title: 'Tax Advisor', category: 'Accounting and Finance' },
  { title: 'Investment Banker', category: 'Accounting and Finance' },
  { title: 'Doctor', category: 'Healthcare and Medicine' },
  { title: 'Nurse', category: 'Healthcare and Medicine' },
  { title: 'Pharmacist', category: 'Healthcare and Medicine' },
  { title: 'Dentist', category: 'Healthcare and Medicine' },
  { title: 'Physical Therapist', category: 'Healthcare and Medicine' },
]

const Career = () => {
  const [career, setCareer] = useState('')
  const suggestions =
    career.length > 0 ? careersOptions.filter((item) => item.title.toLocaleLowerCase().includes(career)) : []

  return (
    <div className="w-full">
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
                  <li key={'SUGGESTION_ITEM_' + index} className=" py-2 px-4">
                    {item.title}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </form>
      </div>

      <div className={'mt-12 max-w-6xl mx-auto'}>
        <span className="font-[CodecPro-Bold] text-2xl ">Popular Careers</span>
        <div className="flex items-center justify-between gap-1 mt-4">
          {careers.map((item, index) => (
            <div key={index} className="w-[200px] h-[200px] flex items-center justify-center bg-gray-200 rounded-md">
              {item.title}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Career
