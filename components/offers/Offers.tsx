'use client'
import React, { FC, useEffect, useState } from 'react'
import DescriptionSection from './descriptionSection/DescriptionSection'
import ShortTermPlan from './shortTermPlan/ShortTermPlan'
import LongTimePlan from './longTermPlan/LongTermPlan'
import UseFetch from '@/hooks/useFetch'
import { ApiRoutes } from '@/constants/routes'
import { dataType, GraphDataType } from './types'
import Chart from './chart/Chart'
import { toast } from 'react-toastify'
import Spinner from '../ui/spinner/Spinner'
import SaveIcon from '@/components/icons/saveIcon'
import { useRouter } from 'next/navigation'
import Guide from '@/components/reusable/guide/Guide'
import DrawerHandler from '@/components/reusable/drawerHandler/DrawerHandler'
import GuideTour from '@/components/reusable/guideTour/GuideTour'
import { UseIsMobile } from '@/hooks/useIsMobile'

interface ResponseType {
  courses: {
    long: dataType
    short: dataType
  }
  graph_data: GraphDataType
}

interface ChartDataType {
  graph: GraphDataType
}

const Offers: FC = () => {
  const isMobile = UseIsMobile()
  const router = useRouter()
  const { request, response } = UseFetch()
  const { request: addCourseRequest, response: ChartData } = UseFetch()
  // const [showGuide, setGuide] = useState(false)

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
    <>
      <div className=" max-w-[90%] xl:max-w-[80%] flex flex-col items-center mx-auto py-[32px] lg:py-[95px] gap-y-[88px] ">
        <div className="w-full flex flex-col-reverse lg:flex-row justify-between items-start gap-y-12 lg:gap-y-0 lg:gap-x-6">
          <div className="w-full lg:w-[50%] flex flex-col items-end">
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
            {!isMobile && (
              <div className="hidden lg:flex text-left  flex-col lg:flex-row justify-between items-center gap-3 w-full mt-24 bg-blue-50 py-3 px-3 rounded-xl">
                <p className="text-[18px] lg:w-1/2 font-[CodecPro-news]">
                  After choosing your roadmap, save it so you can access it later
                </p>
                <button
                  className="guide-tour-save w-fit rounded-[100px] bg-secondary text-white flex items-center py-4 px-[32px] gap-x-2 text-[16px] font-[CodecPro-News]"
                  onClick={() => {
                    router.push('/roadmap')
                  }}>
                  <div className="w-[19px] h-[19px] text-white">
                    <SaveIcon />
                  </div>
                  Save roadmap
                </button>
              </div>
            )}
          </div>

          <div className="w-full lg:w-[50%] flex justify-center lg:sticky lg:top-4 lg:h-full lg:max-w-[600px]">
            <div className="w-full lg:w-[80%] h-fit shadow-[0_4px_24.3px_rgba(0,0,0,0.05)] rounded-[40px] border border-neutral-200">
              {ChartData ? (
                <Chart data={(ChartData as ChartDataType).graph} />
              ) : !loading ? (
                response && <Chart data={(response as ResponseType).graph_data} />
              ) : (
                <div className="w-full lg:px-5 py-8 flex flex-col items-center lg:gap-y-8 min-h-[620px]">
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
        <div className="flex flex-col gap-y-[88px] ">
          <div className="w-full h-[3px] bg-[#FEE7E0]" />
          <p className="xs:text-[24px] 2xl:text-[26px] font-[CodecPro-News]">
            Every great journey starts with a single step. Focus on those small steps, but never lose sight of your
            long-term vision. Your plans today will pave the way for your future success
          </p>
        </div>
        {/*<DrawerHandler open={showGuide} closeHandler={() => setGuide(false)}>*/}
        {/*  <Guide title={'Complete your preferences'} clickHandler={() => setGuide(false)}>*/}
        {/*    <p>*/}
        {/*      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores cupiditate delectus, ducimus eaque et*/}
        {/*      exercitationem explicabo fugiat magnam nemo nisi non, quae, quis reprehenderit repudiandae sed soluta*/}
        {/*      veniam*/}
        {/*      voluptate voluptatibus.*/}
        {/*    </p>*/}
        {/*  </Guide>*/}
        {/*</DrawerHandler>*/}
        {isMobile && (
          <div className="flex flex-col gap-4 lg:hidden fixed bottom-0 inset-x-0 bg-white px-4 py-2 z-40 shadow-[2px_0_10px_rgba(0,0,0,0.1)]">
            <p className="text-[14px]font-[CodecPro-news] text-neutral-500 text-center">
              Choose your courses then save it
            </p>
            <button
              className="guide-tour-save rounded-[100px] bg-secondary text-white flex justify-center items-center py-4 px-[32px] gap-x-2 text-[16px] font-[CodecPro-News]"
              onClick={() => {
                router.push('/roadmap')
              }}>
              <div className="w-[19px] h-[19px] text-white">
                <SaveIcon />
              </div>
              Save roadmap
            </button>
          </div>
        )}
      </div>
      {response && <GuideTour />}
    </>
  )
}
export default Offers
