'use client'

import { FC } from 'react'
import PlanItemsContainer from '../planItemsContainer/PlanItemsContainer'
import { dataType, DataTypeKey } from '../types'
interface Props {
  data: dataType
}
const ShortTermPlan: FC<Props> = ({ data }) => {
  return (
    <div className="flex flex-col w-full ">
      <div className="w-full flex justify-start lg:justify-center lg:w-[90%] font-[CodecPro-ExtraBold] relative  bg-white mb-[68px] lg:before:content-[''] lg:before:flex lg:before:w-[100%] before:h-[2px] before:bg-[#F25D1B] lg:before:bottom-5 lg:before:absolute lg:before:z-0">
        <span className="w-full text-[24px] font-[CodecPro-ExtraBold]  bg-white  flex text-[#F25D1B] z-20 px-6">
          Short Term Plan
        </span>
      </div>
      {data &&
        Object.keys(data)?.map((item, index) => (
          <PlanItemsContainer
            index={index + 1}
            data={data[item as DataTypeKey]}
            key={index}
            title={item as DataTypeKey}
          />
        ))}
    </div>
  )
}
export default ShortTermPlan
