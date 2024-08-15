'use client'
import React, { FC, useEffect, useState } from 'react'
import DescriptionSection from './descriptionSection/DescriptionSection'
import ShortTermPlan from './shortTermPlan/ShortTermPlan'
import LongTimePlan from './longTermPlan/LongTermPlan'
import CharacterType from './characterType/CharacterType'
import UseFetch from '@/hooks/useFetch'
import { ApiRoutes } from '@/constants/routes'
import { dataType, GraphDataType } from './types'
import Chart from './chart/Chart'
import DrawerHandler from '@/components/reusable/drawerHandler/DrawerHandler'
import 'swiper/css/pagination'
import GuideSlider from '@/components/reusable/GuideSlider/GuideSlider'

const GuideSlides = [
  {
    img: '/',
    title: 'Complete your preferences',
    description:
      'Complex problem solving is the core skill for 21st Century Teams Complex problem solving is at the very top of the list of essential skills for career progression in the modern world. But how problem.....Complex problem solving is the core skill for 21st Century Teams Complex problem solving is at the very top of the list of essential skills for career progression in the modern world. But how problem.....',
  },
  {
    img: '/',
    title: 'Complete your preferences2',
    description:
      'Complex problem solving is the core skill for 21st Century Teams Complex problem solving is at the very top of the list of essential skills for career progression in the modern world. But how problem.....Complex problem solving is the core skill for 21st Century Teams Complex problem solving is at the very top of the list of essential skills for career progression in the modern world. But how problem.....',
  },
  {
    img: '/',
    title: 'Complete your preferences3',
    description:
      'Complex problem solving is the core skill for 21st Century Teams Complex problem solving is at the very top of the list of essential skills for career progression in the modern world. But how problem.....Complex problem solving is the core skill for 21st Century Teams Complex problem solving is at the very top of the list of essential skills for career progression in the modern world. But how problem.....',
  },
  {
    img: '/',
    title: 'Complete your preferences',
    description:
      'Complex problem solving is the core skill for 21st Century Teams Complex problem solving is at the very top of the list of essential skills for career progression in the modern world. But how problem.....Complex problem solving is the core skill for 21st Century Teams Complex problem solving is at the very top of the list of essential skills for career progression in the modern world. But how problem.....',
  },
  {
    img: '/',
    title: 'Complete your preferences2',
    description:
      'Complex problem solving is the core skill for 21st Century Teams Complex problem solving is at the very top of the list of essential skills for career progression in the modern world. But how problem.....Complex problem solving is the core skill for 21st Century Teams Complex problem solving is at the very top of the list of essential skills for career progression in the modern world. But how problem.....',
  },
  {
    img: '/',
    title: 'Complete your preferences3',
    description:
      'Complex problem solving is the core skill for 21st Century Teams Complex problem solving is at the very top of the list of essential skills for career progression in the modern world. But how problem.....Complex problem solving is the core skill for 21st Century Teams Complex problem solving is at the very top of the list of essential skills for career progression in the modern world. But how problem.....',
  },
  {
    img: '/',
    title: 'Complete your preferences',
    description:
      'Complex problem solving is the core skill for 21st Century Teams Complex problem solving is at the very top of the list of essential skills for career progression in the modern world. But how problem.....Complex problem solving is the core skill for 21st Century Teams Complex problem solving is at the very top of the list of essential skills for career progression in the modern world. But how problem.....',
  },
  {
    img: '/',
    title: 'Complete your preferences2',
    description:
      'Complex problem solving is the core skill for 21st Century Teams Complex problem solving is at the very top of the list of essential skills for career progression in the modern world. But how problem.....Complex problem solving is the core skill for 21st Century Teams Complex problem solving is at the very top of the list of essential skills for career progression in the modern world. But how problem.....',
  },
  {
    img: '/',
    title: 'Complete your preferences3',
    description:
      'Complex problem solving is the core skill for 21st Century Teams Complex problem solving is at the very top of the list of essential skills for career progression in the modern world. But how problem.....Complex problem solving is the core skill for 21st Century Teams Complex problem solving is at the very top of the list of essential skills for career progression in the modern world. But how problem.....',
  },
]

interface ResponseType {
  data: {
    courses: {
      long: dataType
      short: dataType
    }
    graph_data: GraphDataType
    user: { character: string; character_statement: string; profile_image: string }
  }
}
const Roadmap: FC = () => {
  const { request, response } = UseFetch()
  const [showGuide, setGuide] = useState(false)

  useEffect(() => {
    request({
      url: ApiRoutes.PROFILES,
      method: 'get',
    })
    const timeout = setTimeout(() => {
      setGuide(true)
    }, 500)

    return () => clearTimeout(timeout)
  }, [])

  return (
    <div className="max-w-[90%] flex flex-col items-center mx-auto py-[95px] gap-y-[88px]">
      <div className="w-full flex flex-col lg:flex-row justify-between items-start">
        <div className="w-[50%] flex flex-col items-end">
          {response && (
            <DescriptionSection characterStatement={(response as ResponseType)?.data?.user?.character_statement} />
          )}
          {response && (
            <>
              {(response as ResponseType)?.data?.courses?.short && (
                <ShortTermPlan data={(response as ResponseType)?.data?.courses?.short} />
              )}
              {(response as ResponseType)?.data?.courses?.long && (
                <LongTimePlan
                  data={(response as ResponseType)?.data?.courses?.long}
                  startIndex={Object.keys((response as ResponseType)?.data?.courses?.short).length}
                />
              )}
            </>
          )}
        </div>
        <div className="w-[50%] max-w-[600px] flex flex-col justify-center items-center gap-y-10 sticky top-0 h-full">
          {response && <CharacterType userType={(response as ResponseType)?.data.user} />}
          {response && (
            <div className="w-[80%] h-fit shadow-[0_4px_24.3px_rgba(0,0,0,0.05)] rounded-[40px] border border-black/[0.2]">
              <Chart data={(response as ResponseType)?.data?.graph_data} />
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col w-[90%] gap-y-[88px]">
        <div className="w-full h-[3px] bg-[#FEE7E0]" />
        <p className="xs:text-[24px] 2xl:text-[26px] font-[CodecPro-News]">
          Every great journey starts with a single step. Focus on those small steps, but never lose sight of your
          long-term vision. Your plans today will pave the way for your future success
        </p>
      </div>
      <DrawerHandler open={showGuide} closeHandler={() => setGuide(false)}>
        <GuideSlider slides={GuideSlides} closeHandler={() => setGuide(false)} />
      </DrawerHandler>
    </div>
  )
}
export default Roadmap
