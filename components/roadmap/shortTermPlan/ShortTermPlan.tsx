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
      <div className=" w-[90%] ml-auto text-[40px] font-[CodecPro-ExtraBold] relative mb- bg-white mb-[68px] flex justify-center  before:ontent-[''] before:flex before:w-[100%] before:h-[2px] before:bg-[#F25D1B] before:bottom-5 before:absolute before:z-0">
        <span className="xs:text-[30px] xl:text-[24px] font-[CodecPro-ExtraBold]  bg-white  flex text-[#F25D1B] z-20 px-6">
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
