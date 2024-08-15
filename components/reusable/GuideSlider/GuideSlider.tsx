import React, { FC, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import SwiperType from 'swiper'
import Image from 'next/image'
import Button from '@/components/ui/button/Button'

type SlidesType = {
  img: string
  title: string
  description: string
}
type Props = {
  slides: SlidesType[]
  closeHandler: () => void
}

const GuideSlider: FC<Props> = ({ slides, closeHandler }) => {
  const [SwiperInstance, setSwiperInstance] = useState<SwiperType>()
  const swiperParams: any = {
    slidesPerView: 1,
    pagination: {
      el: '.pagination-number',
      type: 'fraction',
    },
  }

  return (
    <div className="bg-white px-5 py-10 rounded-t-2xl lg:rounded-2xl flex flex-col gap-6 items-center  relative">
      <Swiper
        onInit={(swiper) => {
          setSwiperInstance(swiper)
        }}
        modules={[Navigation, Pagination]}
        {...swiperParams}
        className="mySwiper w-full">
        {slides?.map((item, index: number) => (
          <SwiperSlide key={index}>
            <div className="w-full flex flex-col gap-6 relative p-5">
              <Image src={item.img} alt={item.title} layout="fill" />
              <h6 className="font-[CodecPro-Bold] text-[16px]">{item.title}</h6>
              <p className="font-[CodecPro-News] text-[14px] text-neutral-500">{item.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="w-full flex gap-4 justify-between">
        <Button className="w-full max-w-[200px]" format={'outline'} variant={'light'} onClick={closeHandler}>
          Skip
        </Button>
        <Button
          className="w-full  max-w-[200px]"
          format={'fill'}
          variant={'primary'}
          onClick={() => {
            if (SwiperInstance?.isEnd) {
              closeHandler()
            } else {
              SwiperInstance?.slideNext?.()
            }
          }}>
          Next <span className="pagination-number text-sm !w-fit ml-4"></span>
        </Button>
      </div>
    </div>
  )
}

export default GuideSlider
