'use client'

import { FC, useState } from 'react'
import PlanAccordionItem from '../planAccordionItem/PlanAccordionItem'
import { dataType, DataTypeKey } from '../types'

interface Props {
  data: dataType
  handleAddCourses: (id: number) => void
  loading: boolean
}

const ShortTermPlan: FC<Props> = ({ data, handleAddCourses, loading }) => {
  const [activeIndex, setActiveIndex] = useState(1)
  return (
    <div className="flex flex-col w-full ">
      <div className="w-[90%] ml-auto text-[40px] font-[CodecPro-ExtraBold] relative  bg-white  flex justify-center my-[68px] before:content-[''] before:flex before:w-[100%] before:h-[2px] before:bg-[#F25D1B] before:bottom-5 before:absolute before:z-0">
        <span className="text-[24px] font-[CodecPro-ExtraBold]  bg-white  flex text-[#F25D1B] z-20 px-4">
          Short Term Plan
        </span>
      </div>
      {data &&
        Object.keys(data)?.map((key, index: number) => (
          <PlanAccordionItem
            index={index + 1}
            activeIndex={activeIndex}
            handleActiveIndex={setActiveIndex}
            data={data[key as DataTypeKey]}
            title={key as DataTypeKey}
            key={index}
            finalIndex={Object.keys(data).length}
            handleAddCourses={handleAddCourses}
            loading={loading}
          />
        ))}
    </div>
  )
}
export default ShortTermPlan
