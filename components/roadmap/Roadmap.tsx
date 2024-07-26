'use client'
import { FC, useEffect } from 'react'
import DescriptionSection from './descriptionSection/DescriptionSection'
import ShortTermPlan from './shortTermPlan/ShortTermPlan'
import LongTimePlan from './longTermPlan/LongTermPlan'
import CharacterType from './characterType/CharacterType'
import UseFetch from '@/hooks/useFetch'
import { ApiRoutes } from '@/constants/routes'
import { dataType } from './types'
interface ResponseType {
  data: {
    courses: {
      long: dataType
      short: dataType
    }
  }
}
const Roadmap: FC = () => {
  const { request, response } = UseFetch()

  useEffect(() => {
    request({
      url: ApiRoutes.PROFILES,
      method: 'get',
    })
  }, [])
  return (
    <div className="max-w-[90%] flex flex-col items-center mx-auto py-[95px] gap-y-[88px]">
      <div className="w-full flex justify-center items-start">
        <div className="w-[50%] flex flex-col items-end">
          <DescriptionSection />
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
        <div className="w-[50%] flex flex-col justify-center items-center gap-y-10">
          <CharacterType />
          <div className="w-[80%] h-[300px] shadow-[0_4px_24.3px_rgba(0,0,0,0.05)] rounded-[40px] border border-black/[0.2]"></div>
        </div>
      </div>
      <div className="flex flex-col w-[90%] gap-y-[88px]">
        <div className="w-full h-[3px] bg-[#FEE7E0]" />
        <p className="text-[30px] font-[CodecPro-News]">
          Every great journey starts with a single step. Focus on those small steps, but never lose sight of your
          long-term vision. Your plans today will pave the way for your future success
        </p>
      </div>
    </div>
  )
}
export default Roadmap
