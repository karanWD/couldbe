'use client'
import { FC } from 'react'
import PlanItemsContainer from '../planItemsContainer/PlanItemsContainer'
import { dataType, DataTypeKey } from '../types'
interface Props {
  data: dataType
  startIndex: number
}
const LongTimePlan: FC<Props> = ({ data, startIndex }) => {
  return (
    <div className="flex flex-col w-full ">
      <div className=" w-[90%] pl-[calc(100%-80%)] h-[100px] text-[40px] font-[CodecPro-ExtraBold] relative bg-white  flex justify-center  before:ontent-[''] before:flex before:w-[100%] before:h-[2px] before:bg-[#F25D1B] before:bottom-[4.5rem] before:absolute before:z-0  border-[#1232F0] border-l-[9px] border-solid ">
        <span className="xs:text-[30px] xl:text-[40px]font-[CodecPro-ExtraBold]  bg-white  flex text-[#F25D1B] z-20 px-6">
          Long term plan
        </span>
      </div>
      {data &&
        Object.keys(data)?.map((item, index) => (
          <PlanItemsContainer
            index={startIndex + index + 1}
            data={data[item as DataTypeKey]}
            key={index}
            title={item as DataTypeKey}
          />
        ))}
    </div>
  )
}
export default LongTimePlan
