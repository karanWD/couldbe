import React from 'react'

const Career = () => {
  return (
    <div className="w-full">
      <h1 className="font-[CodecPro-Heavy] text-[50px] text-center py-8">What it couldbe?</h1>
      <div className="max-w-2xl mx-auto">
        <form>
          <div className="relative shadow-[0_4px_18px_rgba(0,0,0,0.1)] flex items-center rounded-full">
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
              type="search"
              id="default-search"
              className="block w-full text-sm text-gray-900 p-5 bg-white focus:ring-transparent rounded-full"
              placeholder="Marketing, HR, Finance...."
              required
            />
          </div>
        </form>
      </div>
      <div className={'mt-12 max-w-6xl mx-auto'}>
        <span className="font-[CodecPro-Bold] text-2xl ">Popular functions</span>
        <div className="flex items-center justify-between gap-1 mt-4">
          {[null, null, null, null, null].map((item, index) => (
            <div key={index} className="w-[200px] h-[200px] bg-gray-200 rounded-md"></div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Career
