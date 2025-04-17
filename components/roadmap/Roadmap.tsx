'use client'
import React, { FC, useEffect } from 'react'
import DescriptionSection from './descriptionSection/DescriptionSection'
import CharacterType from './characterType/CharacterType'
import UseFetch from '@/hooks/useFetch'
import { ApiRoutes } from '@/constants/routes'
import { dataType, GraphDataType } from './types'
import Chart from './chart/Chart'
import 'swiper/css/pagination'
import Suggestions from '@/components/offers/suggestions/Suggestions'
import PlanItem from '@/components/roadmap/planItem/PlanItem'

interface ResponseType {
  courses: dataType
  character_type: any
  scores: GraphDataType
}
const Roadmap: FC = () => {
  const { request, loading, response } = UseFetch()

  useEffect(() => {
    request({
      url: ApiRoutes.ROADMAP,
      method: 'get',
    })
  }, [])

  return (
    response && (
      <div className="max-w-[90%] flex flex-col items-center mx-auto py-10 lg:py-[95px] gap-y-[88px]">
        <div className="w-full flex flex-col-reverse lg:flex-row justify-between items-start gap-8 lg:gap-0">
          <div className="w-full lg:w-[50%] flex flex-col items-end">
            <DescriptionSection data={(response as ResponseType)?.character_type} />
          </div>
          <div className="w-full lg:w-[50%] max-w-[600px] flex flex-col justify-center items-center gap-y-10 ">
            <CharacterType characterInfo={(response as ResponseType)?.character_type} />
          </div>
        </div>
        <div className="w-full flex flex-col-reverse lg:flex-row justify-between items-start gap-8 lg:gap-0">
          <div className="w-full lg:w-[50%] flex flex-col items-end">
            <div className="w-full flex flex-col gap-12 mt-6">
              <Suggestions
                title={'Books'}
                data={(response as any).courses.books}
                renderCards={(item) => {
                  return (
                    <PlanItem
                      image={'/'}
                      title={item.title}
                      skills={item.skill}
                      level={item.level}
                      price={parseFloat(item.price.replace(/[^0-9.]/g, ''))}
                    />
                  )
                }}
              />
              <Suggestions
                title={'Videos'}
                data={(response as any).courses.videos}
                renderCards={(item) => (
                  <PlanItem image={'/'} title={item.title} level={item.level} price={item.price} skills={item.skill} />
                )}
              />
              <Suggestions
                title={'Articles'}
                data={(response as any).courses.articles}
                renderCards={(item) => (
                  <PlanItem image={'/'} title={item.title} level={item.level} price={item.price} skills={item.skill} />
                )}
              />
            </div>
          </div>
          <div className="w-full lg:w-[40%] flex flex-col items-end">
            <Chart data={(response as ResponseType).scores} />
          </div>
        </div>
        <div className="flex flex-col w-[90%] gap-y-[88px]">
          <div className="w-full h-[3px] bg-[#FEE7E0]" />
          <p className="xs:text-[24px] 2xl:text-[26px] font-[CodecPro-News]">
            Every great journey starts with a single step. Focus on those small steps, but never lose sight of your
            long-term vision. Your plans today will pave the way for your future success
          </p>
        </div>
      </div>
    )
  )
}
export default Roadmap
