'use client'

import { FC } from 'react'
import PlanItemsContainer from '../planItemsContainer/PlanItemsContainer'
const Data = [
  {
    accordionTitle: 'Books',
    image: '/images/book.png',
    title: 'Bulletproof Problem Solving',
    badge: ['Probiem Salving', 'Working with people'],
    details: {
      author: 'Charles Conn, and Robert McLean',
      publisher: 'John Wiley Sons Inc',
      language: 'English',
      numberOfPage: '320',
    },
    level: 'Level 2',
    description:
      'Complex problem solving is the core skill for 21st Century Teams Complex problem solving is at the very top of the list of essential skills for career progression in the modern world. But how problem  is at the very top of the list of essential skills for career progression in the modern world. But how problem',
    price: '23.5',
    notice: 'Attention: To reach the next level, you must choose two items from the list of books provided below.',
  },
  {
    accordionTitle: 'Books',
    image: '/images/book.png',
    title: 'Bulletproof Problem Solving',
    badge: ['Probiem Salving', 'Working with people'],
    details: {
      author: 'Charles Conn, and Robert McLean',
      publisher: 'John Wiley Sons Inc',
      language: 'English',
      numberOfPage: '320',
    },
    level: 'Level 2',
    description:
      'Complex problem solving is the core skill for 21st Century Teams Complex problem solving is at the very top of the list of essential skills for career progression in the modern world. But how problem  is at the very top of the list of essential skills for career progression in the modern world. But how problem',
    price: '23.5',
  },
]
const ShortTermPlan: FC = () => {
  return (
    <div className="flex flex-col w-full ">
      <div className=" w-[90%] ml-auto text-[40px] font-[CodecPro-ExtraBold] relative mb- bg-white mb-[68px] flex justify-center  before:ontent-[''] before:flex before:w-[100%] before:h-[2px] before:bg-[#F25D1B] before:bottom-7 before:absolute before:z-0">
        <span className="text-[40px] font-[CodecPro-ExtraBold]  bg-white  flex text-[#F25D1B] z-20 px-6">
          Short Term Plan
        </span>
      </div>
      {Data.map((item, index) => (
        <PlanItemsContainer index={index + 1} data={item} key={index} />
      ))}
    </div>
  )
}
export default ShortTermPlan