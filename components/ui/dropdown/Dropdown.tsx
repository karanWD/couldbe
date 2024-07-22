import React, { FC, useState } from 'react'

type Props = {
  title: any
  options: { title: any; value: any }[]
  onClick: (value: any) => void
}
const Dropdown: FC<Props> = ({ title, options, onClick }) => {
  const [open, setOpen] = useState(false)
  return (
    <div className="relative">
      <button
        data-dropdown-toggle="dropdownRadioBgHover"
        className="justify-between w-full border border-gray-400 text-neutral-800 bg-transparent hover:bg-neutral-100 font-medium rounded-lg text-sm px-5 py-3.5 text-center inline-flex items-center"
        onClick={() => setOpen((prev) => !prev)}
        type="button">
        {title}
        <svg
          className="w-2.5 h-2.5 ms-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
        </svg>
      </button>

      <div
        id="dropdownRadioBgHover"
        className={`z-10 ${open ? 'block' : 'hidden'} w-full bg-white divide-y divide-gray-200 rounded-lg shadow absolute top-full max-h-64 overflow-auto`}>
        <ul className="p-3 space-y-1 text-sm text-gray-800" aria-labelledby="dropdownRadioBgHoverButton">
          {options?.map((item, index) => {
            return (
              <li
                key={'OPTION_ITEM_' + index}
                onClick={() => {
                  setOpen(false)
                  onClick(item)
                }}>
                <div className="flex items-center p-2 rounded hover:bg-gray-100 ">
                  <input
                    id={`radio-input-${item.title + item.value}`}
                    type="radio"
                    value=""
                    name="default-radio"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 "
                  />
                  <label
                    htmlFor={`radio-input-${item.title + item.value}`}
                    className="w-full ms-2 text-sm font-medium text-gray-900 rounded ">
                    {item.title}
                  </label>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default Dropdown
