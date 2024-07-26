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
import { dataItemType, DataTypeKey } from '../types'
interface Props {
  index: number
  activeIndex: number
  handleActiveIndex: (index: number) => void
  data: dataItemType[]
  finalIndex: number
  title: DataTypeKey
}
const PlanAccordionItem: FC<Props> = ({ index, activeIndex, handleActiveIndex, data, finalIndex, title }) => {
  const [SwiperInstance, setSwiperInstance] = useState<SwiperType>()
  const swiperParams = {
    spaceBetween: 32,
    slidesPerView: 2,
    rewind: true,
    breakpoints: {
      1024: {
        slidesPerView: 1.5,
        spaceBetween: 30,
      },
      1536: {
        slidesPerView: 1.5,
        spaceBetween: 50,
      },
    },
  }
  const handleDetails = (type: DataTypeKey, index: number) => {
    switch (type) {
      case 'articles': {
        return [
          {
            title: 'Author',
            description: data[index].authors,
          },
          {
            title: 'Publisher',
            description: data[index].publication,
          },
        ]
      }
      case 'books': {
        return [
          {
            title: 'Author',
            description: data[index].authors,
          },
          {
            title: 'Publisher',
            description: data[index].publisher,
          },
          {
            title: 'Language',
            description: data[index].Language,
          },
          {
            title: 'Number of pages',
            description: String(data[index].number_of_pages),
          },
        ]
      }
      case 'online courses': {
        return [
          {
            title: 'Channel',
            description: data[index].channel,
          },
          {
            title: 'Duration',
            description: String(data[index].duration),
          },
        ]
      }
      case 'youtube videos': {
        return [
          {
            title: 'Channel',
            description: data[index].channel,
          },
          {
            title: 'Duration',
            description: String(data[index].duration),
          },
        ]
      }
    }
  }

  return (
    <div
      className={`flex flex-col w-full items-end relative border-[#1232F0] border-l-[9px] border-solid ${index === finalIndex && activeIndex !== finalIndex && 'border-white'}`}>
      <div className="flex items-center justify-center bg-white border-[#1232F0] border-[6px] border-solid rounded-[100%] w-[42px] h-[42px] absolute top-0 left-[-26px]">
        {index}
      </div>
      <div
        className={`flex flex-col items-end xs:w-[95%] xl:w-[90%] ${index !== activeIndex && index !== finalIndex && activeIndex !== finalIndex && 'border-b-[rgba(0, 0, 0, 0.1)] border-b-[3px] border-b-solid'}`}>
        <Accordion
          title={title}
          index={index}
          activeIndex={activeIndex}
          setActiveIndex={handleActiveIndex}
          variant="text"
          className="h-[124px] relative">
          <div className="flex flex-col gap-y-[62px]">
            <Swiper
              onInit={(swiper) => {
                setSwiperInstance(swiper)
              }}
              modules={[Navigation]}
              {...swiperParams}
              className="mySwiper flex w-full after:content-[''] after:w-[20%] after:h-[100%] after:bg-gradient-to-l after:from-white after:opacity-75 after:absolute after:top-0 after:right-0 after:z-20">
              {data?.map((item: dataItemType, index: number) => (
                <SwiperSlide key={index} className="!w-[100%] ">
                  <PlanItem
                    image={item.picture}
                    title={item.title}
                    badge={item.skills}
                    details={handleDetails(title, index)}
                    level={item.level}
                    description={item.description}
                    price={item.price}
                    id={item.id}
                  />
                </SwiperSlide>
              ))}
              <SwiperSlide key={index} className="!w-[100%] ">
                <div className="w-[20px]" />
              </SwiperSlide>
            </Swiper>
            <div className="flex items-center z-10 justify-between absolute top-[calc(100%-50%)] xs:left-[2%] xl:left-[5%] w-[100%]">
              <div
                onClick={() => SwiperInstance?.slidePrev?.()}
                className="flex items-center justify-center cursor-pointer xs:w-[70px] xs:h-[70px] xl:w-[90px] xl:h-[90px] rounded-[100%] border-[1px] border-[rgba(0, 0, 0, 0.2)] border-solid bg-white">
                <div className="xs:w-[16px] xl:w-[20px]">
                  <ArrowLeft />
                </div>
              </div>
              <div
                onClick={() => SwiperInstance?.slideNext?.()}
                className="flex items-center justify-center cursor-pointer xs:w-[70px] xs:h-[70px] xl:w-[90px] xl:h-[90px] rounded-[100%] border-[1px] border-[rgba(0, 0, 0, 0.2)] border-solid bg-white">
                <div className="xs:w-[16px] xl:w-[20px]">
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
