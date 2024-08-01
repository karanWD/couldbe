'use client'
import { FC, useEffect, useState } from 'react'
import DescriptionSection from './descriptionSection/DescriptionSection'
import ShortTermPlan from './shortTermPlan/ShortTermPlan'
import LongTimePlan from './longTermPlan/LongTermPlan'
import UseFetch from '@/hooks/useFetch'
import { ApiRoutes } from '@/constants/routes'
import { dataType, GraphDataType } from './types'
import Chart from './chart/Chart'
import { toast } from 'react-toastify'
import Spinner from '../ui/spinner/Spinner'
interface ResponseType {
  courses: {
    long: dataType
    short: dataType
  }
  graph: GraphDataType
}
interface ChartDataType {
  graph: GraphDataType
}
const Offers: FC = () => {
  const { request, response } = UseFetch()
  const { request: addCourseRequest, response: ChartData } = UseFetch()

  useEffect(() => {
    request({
      url: ApiRoutes.SUGGESTION,
      method: 'get',
    })
  }, [])
  const [loading, setLoading] = useState(false)
  const handleAddCourses = (id: number) => {
    if (id) {
      setLoading(true)
      addCourseRequest({
        url: ApiRoutes.COURSES,
        method: 'POST',
        data: { course_id: id },
      })
        .then(() => {
          toast.success('Your course is added successfully.')
        })
        .catch((e) => {
          toast.error(e.message)
        })
        .finally(() => {
          setLoading(false)
        })
    }
  }

  return (
    <div className="xs:max-w-[95%] xl:max-w-[80%] flex flex-col items-center mx-auto py-[95px] gap-y-[88px] ">
      <div className="w-full flex justify-center items-start">
        <div className="w-[50%] flex flex-col items-end">
          <DescriptionSection />
          {response && (
            <>
              {(response as ResponseType)?.courses?.short && (
                <ShortTermPlan
                  data={(response as ResponseType)?.courses?.short}
                  handleAddCourses={handleAddCourses}
                  loading={loading}
                />
              )}
              {(response as ResponseType)?.courses?.long && (
                <LongTimePlan
                  data={(response as ResponseType)?.courses?.long}
                  handleAddCourses={handleAddCourses}
                  loading={loading}
                />
              )}
            </>
          )}
        </div>

        <div className="w-[50%] flex justify-center sticky top-4 h-full">
          <div className="w-[80%] h-fit shadow-[0_4px_24.3px_rgba(0,0,0,0.05)] rounded-[40px] border border-neutral-200">
            {ChartData ? (
              <Chart data={(ChartData as ChartDataType).graph} />
            ) : !loading ? (
              response && <Chart data={(response as ResponseType).graph} />
            ) : (
              <div className="w-full px-5 py-8 flex flex-col items-center gap-y-8 min-h-[620px]">
                <div>
                  <div className="text-center text-[24px] font-[CodecPro-Bold] text-[#1232F0]">
                    Discovery phase result
                  </div>
                  <div className="text-center text-[18px] font-[CodecPro-Thin] text-[#000000]">
                    Make your skills wider
                  </div>
                </div>
                <div className="flex items-center justify-center w-[50px] h-full absolute">
                  <Spinner />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-col w-[90%] gap-y-[88px] ">
        <div className="w-full h-[3px] bg-[#FEE7E0]" />
        <p className="xs:text-[24px] 2xl:text-[26px] font-[CodecPro-News]">
          Every great journey starts with a single step. Focus on those small steps, but never lose sight of your
          long-term vision. Your plans today will pave the way for your future success
        </p>
      </div>
    </div>
  )
}
export default Offers
