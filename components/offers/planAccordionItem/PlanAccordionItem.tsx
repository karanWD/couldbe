import Accordion from '@/components/ui/accordion/Accordion'
import { FC, useState } from 'react'
import PlanItem from '../shortTermPlan/planItem/PlanItem'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import ArrowLeft from '@/components/icons/arrowLeft'
import ArrowRight from '@/components/icons/arrowRight'
import SwiperType from 'swiper'
interface Props {
  index: number
  activeIndex: number
  handleActiveIndex: (index: number) => void
  data: any
  finalIndex: number
}
const PlanAccordionItem: FC<Props> = ({ index, activeIndex, handleActiveIndex, data, finalIndex }) => {
  const [SwiperInstance, setSwiperInstance] = useState<SwiperType>()
  const swiperParams = {
    spaceBetween: 32,
    slidesPerView: 2,
    rewind: true,
    breakpoints: {
      1024: {
        slidesPerView: 1.15,
        spaceBetween: 50,
      },
    },
  }
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
          className="h-[124px] relative">
          <div className="flex flex-col gap-y-[62px]">
            {data.notice && <span className="text-[20px] font-[CodecPro-News] text-[#4D67F0] ">{data.notice}</span>}
            <Swiper
              onInit={(swiper) => {
                setSwiperInstance(swiper)
              }}
              modules={[Navigation]}
              {...swiperParams}
              className="mySwiper flex w-full after:content-[''] after:w-[20%] after:h-[100%] after:bg-gradient-to-l after:from-white after:opacity-75 after:absolute after:top-0 after:right-0 after:z-20">
              {data.slideItems.map((item: any, index: number) => (
                <SwiperSlide key={index} className="!w-[90%]">
                  <PlanItem
                    image={item.image}
                    title={item.title}
                    badge={item.badge}
                    details={item.details}
                    level={item.level}
                    description={item.description}
                    price={item.price}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="flex items-center z-10 justify-between absolute top-[calc(100%-50%)] left-[5%] w-[95%]">
              <div
                onClick={() => SwiperInstance?.slidePrev?.()}
                className="flex items-center justify-center cursor-pointer w-[90px] h-[90px] rounded-[100%] border-[1px] border-[rgba(0, 0, 0, 0.2)] border-solid bg-white">
                <div className="w-[20px]">
                  <ArrowLeft />
                </div>
              </div>
              <div
                onClick={() => SwiperInstance?.slideNext?.()}
                className="flex items-center justify-center cursor-pointer w-[90px] h-[90px] rounded-[100%] border-[1px] border-[rgba(0, 0, 0, 0.2)] border-solid bg-white">
                <div className="w-[20px]">
                  <ArrowRight />
                </div>
              </div>
            </div>
          </div>
        </Accordion>
      </div>
    </div>
  )
}
export default PlanAccordionItem
