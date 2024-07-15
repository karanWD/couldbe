import Accordion from '@/components/ui/accordion/Accordion'
import { FC } from 'react'
import PlanItem from '../shortTermPlan/planItem/PlanItem'
interface Props {
  index: number
  activeIndex: number
  handleActiveIndex: (index: number) => void
  data: any
  finalIndex: number
}
const PlanAccordionItem: FC<Props> = ({ index, activeIndex, handleActiveIndex, data, finalIndex }) => {
  return (
    <div
      className={`flex flex-col w-full items-end relative border-[#1232F0] border-l-[9px] border-solid ${index === finalIndex && activeIndex !== finalIndex && 'border-white'}`}>
      <div className="flex items-center justify-center bg-white border-[#1232F0] border-[6px] border-solid rounded-[100%] w-[42px] h-[42px] absolute top-0 left-[-26px]">
        {index}
      </div>
      <div
        className={`flex flex-col items-end w-[90%] ${index !== activeIndex && index !== finalIndex && activeIndex !== finalIndex && 'border-b-[rgba(0, 0, 0, 0.1)] border-b-[3px] border-b-solid'}`}>
        <Accordion
          title={data.accordionTitle}
          index={index}
          activeIndex={activeIndex}
          setActiveIndex={handleActiveIndex}
          variant="text"
          className="h-[124px]">
          {data.notice && <span className="text-[20px] font-[CodecPro-News] text-[#4D67F0] ">{data.notice}</span>}
          <PlanItem
            image={data.image}
            title={data.title}
            badge={data.badge}
            details={data.details}
            level={data.level}
            description={data.description}
            price={data.price}
          />
        </Accordion>
      </div>
    </div>
  )
}
export default PlanAccordionItem
