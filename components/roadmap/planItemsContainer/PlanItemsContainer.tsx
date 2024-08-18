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
    slidesPerView: 1.1,
    spaceBetween: 10,
    breakpoints: {
      1024: {
        slidesPerView: 1.4,
      },
      1536: {
        slidesPerView: 2,
      },
    },
  }
  return (
    <div className={`w-full flex flex-col relative border-[#1232F0] border-l-[9px] border-solid items-end `}>
      <div className=""></div>
      <div className="flex items-center justify-center bg-white border-[#1232F0] border-[6px] border-solid rounded-[100%] w-[36px] h-[36px] lg:w-[42px] lg:h-[42px] absolute top-0 left-[-22px] lg:left-[-24px]">
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
          </Swiper>
          <div className="flex items-center z-10 justify-between absolute top-[calc(100%-50%)] xs:left-[4%] xl:left-[5%] w-[100%]">
            <div
              onClick={() => SwiperInstance?.slidePrev?.()}
              className="flex items-center justify-center cursor-pointer w-[32px] h-[32px] p-2 lg:p-4 xl:w-[50px] xl:h-[50px] rounded-full border border-[rgba(0, 0, 0, 0.2)] border-solid bg-white ">
              <ArrowLeft />
            </div>
            <div
              onClick={() => SwiperInstance?.slideNext?.()}
              className="flex items-center justify-center cursor-pointer w-[32px] h-[32px] p-2 lg:p-4 xl:w-[50px] xl:h-[50px] rounded-full border border-[rgba(0, 0, 0, 0.2)] border-solid bg-white ">
              <ArrowRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default PlanItemsContainer
