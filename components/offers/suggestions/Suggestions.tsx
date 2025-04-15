import React, { FC, ReactNode, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import ArrowLeft from '@/components/icons/arrowLeft'
import ArrowRight from '@/components/icons/arrowRight'
import SwiperType from 'swiper'

type Props = {
  data: any[]
  renderCards: (item: any) => ReactNode
  title: string
}
const Suggestions: FC<Props> = ({ data, renderCards, title }) => {
  const [SwiperInstance, setSwiperInstance] = useState<SwiperType>()
  const swiperParams = {
    slidesPerView: 1.1,
    spaceBetween: 10,
    breakpoints: {
      1024: {
        slidesPerView: 1.2,
      },
      1280: {
        slidesPerView: 1.5,
      },
      1600: {
        slidesPerView: 2.3,
      },
    },
  }

  if (data?.length < 1) {
    return null
  }
  return (
    <div className="w-full relative">
      <div className="flex items-center gap-2 justify-between mb-4">
        <h4 className="text-[24px] font-[CodecPro-ExtraBold] bg-white  flex text-primary z-20 ">{title}</h4>
        {data?.length > 1 && (
          <div className="flex gap-2">
            <div
              onClick={() => SwiperInstance?.slidePrev?.()}
              className="flex items-center justify-center cursor-pointer w-[32px] h-[32px] p-2 xl:w-[36px] xl:h-[36px] rounded-md border border-[rgba(0, 0, 0, 0.2)] border-solid bg-white ">
              <ArrowLeft />
            </div>
            <div
              onClick={() => SwiperInstance?.slideNext?.()}
              className="flex items-center justify-center cursor-pointer w-[32px] h-[32px] p-2 xl:w-[36px] xl:h-[36px] rounded-md border border-[rgba(0, 0, 0, 0.2)] border-solid bg-white ">
              <ArrowRight />
            </div>
          </div>
        )}
      </div>
      <Swiper
        onInit={(swiper) => {
          setSwiperInstance(swiper)
        }}
        modules={[Navigation]}
        {...swiperParams}
        className="mySwiper flex w-full after:content-[''] after:w-[20%] after:h-[100%] after:bg-gradient-to-l after:from-white after:opacity-75 after:absolute after:top-0 after:right-0 after:z-20">
        {data?.map((item, index) => <SwiperSlide key={index}>{renderCards(item)}</SwiperSlide>)}
      </Swiper>
    </div>
  )
}

export default Suggestions
