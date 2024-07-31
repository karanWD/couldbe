import { FC, useState } from 'react'
import PlanItem from '../planItem/PlanItem'
import { dataItemType, DataTypeKey } from '../types'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import ArrowLeft from '@/components/icons/arrowLeft'
import ArrowRight from '@/components/icons/arrowRight'
import SwiperType from 'swiper'
interface Props {
  index: number
  data: dataItemType[]
  title: DataTypeKey
}
const PlanItemsContainer: FC<Props> = ({ index, data, title }) => {
  const [SwiperInstance, setSwiperInstance] = useState<SwiperType>()
  const swiperParams = {
    slidesPerView: 2,
    rewind: true,
    breakpoints: {
      1024: {
        slidesPerView: 1.2,
        spaceBetween: 16,
      },
      1536: {
        slidesPerView: 1.3,
        spaceBetween: 16,
      },
    },
  }
  return (
    <div className={`flex flex-col relative border-[#1232F0] border-l-[9px] border-solid items-end `}>
      <div className="flex items-center justify-center bg-white border-[#1232F0] border-[6px] border-solid rounded-[100%] w-[42px] h-[42px] absolute top-0 left-[-26px]">
        {index}
      </div>
      <div className="w-[90%] flex flex-col">
        <span className="xs:text-[25px] xl:text-[30px] font-[CodecPro-ExtraBold] text-[#4D67F0]">{title}</span>
        <div className="flex flex-col gap-y-[62px]">
          <Swiper
            onInit={(swiper) => {
              setSwiperInstance(swiper)
            }}
            modules={[Navigation]}
            {...swiperParams}
            className="mySwiper flex w-full my-[40px]  after:content-[''] after:w-[20%] after:h-[100%] after:bg-gradient-to-l after:from-white after:opacity-75 after:absolute after:top-0 after:right-0 after:z-20">
            {data?.map((item: dataItemType, index: number) => (
              <SwiperSlide key={index}>
                <PlanItem
                  image={item.picture}
                  title={item.title}
                  skills={item.skills}
                  level={item.level}
                  price={item.price}
                />
              </SwiperSlide>
            ))}
            <SwiperSlide key={index} className="!w-[100%] ">
              <div className="w-[20px]" />
            </SwiperSlide>
          </Swiper>
          <div className="flex items-center z-10 justify-between absolute top-[calc(100%-50%)] xs:left-[4%] xl:left-[5%] w-[100%]">
            <div
              onClick={() => SwiperInstance?.slidePrev?.()}
              className="flex items-center justify-center cursor-pointer xs:w-[40px] xs:h-[40px] xl:w-[50px] xl:h-[50px] rounded-[100%] border-[1px] border-[rgba(0, 0, 0, 0.2)] border-solid bg-white">
              <div className="xs:w-[12px] xl:w-[16px]">
                <ArrowLeft />
              </div>
            </div>
            <div
              onClick={() => SwiperInstance?.slideNext?.()}
              className="flex items-center justify-center cursor-pointer xs:w-[40px] xs:h-[40px] xl:w-[50px] xl:h-[50px] rounded-[100%] border-[1px] border-[rgba(0, 0, 0, 0.2)] border-solid bg-white">
              <div className="xs:w-[12px] xl:w-[16px]">
                <ArrowRight />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default PlanItemsContainer
