import { FC } from 'react'
import PlanItem from '../planItem/PlanItem'
interface Props {
  index: number
  data: any
}
const PlanItemsContainer: FC<Props> = ({ index, data }) => {
  return (
    <div className={`flex flex-col relative border-[#1232F0] border-l-[9px] border-solid items-end `}>
      <div className="flex items-center justify-center bg-white border-[#1232F0] border-[6px] border-solid rounded-[100%] w-[42px] h-[42px] absolute top-0 left-[-26px]">
        {index}
      </div>
      <div className="w-[90%] flex flex-col">
        <span className="text-[30px] font-[CodecPro-ExtraBold] text-[#4D67F0]">{data.accordionTitle}</span>
        <PlanItem image={data.image} title={data.title} badge={data.badge} level={data.level} price={data.price} />
      </div>
    </div>
  )
}
export default PlanItemsContainer
