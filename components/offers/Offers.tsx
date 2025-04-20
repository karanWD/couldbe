'use client'
import React, { FC, useEffect, useState } from 'react'
import DescriptionSection from './descriptionSection/DescriptionSection'
import UseFetch from '@/hooks/useFetch'
import { ApiRoutes } from '@/constants/routes'
import { DataTypeKey } from './types'
import Chart from './chart/Chart'
import { toast } from 'react-toastify'
import Spinner from '../ui/spinner/Spinner'
import SaveIcon from '@/components/icons/saveIcon'
import { useRouter } from 'next/navigation'
import { UseIsMobile } from '@/hooks/useIsMobile'
import Suggestions from '@/components/offers/suggestions/Suggestions'
import PlanItem from '@/components/offers/shortTermPlan/planItem/PlanItem'
import GuideTour from '@/components/reusable/guideTour/GuideTour'

type addedCoursesType = {
  books: any[]
  videos: any[]
  articles: any[]
}

const handleDetails = (type: DataTypeKey, data: any) => {
  switch (type) {
    case 'articles': {
      return [
        {
          title: 'Author',
          description: data.author,
        },
        {
          title: 'Publisher',
          description: data.publication,
        },
      ]
    }
    case 'books': {
      return [
        {
          title: 'Author',
          description: data.author,
        },
        {
          title: 'Publisher',
          description: data.publisher,
        },
        {
          title: 'Language',
          description: data.language,
        },
        {
          title: 'Number of pages',
          description: String(data.number_of_pages),
        },
      ]
    }
    case 'videos': {
      return [
        {
          title: 'Channel',
          description: data.channel,
        },
        {
          title: 'Duration',
          description: String(data.duration),
        },
      ]
    }
  }
}

const Offers: FC = () => {
  const isMobile = UseIsMobile()
  const router = useRouter()
  const { request, response } = UseFetch()
  const { request: addCourseRequest, loading } = UseFetch()
  const [addedCourses, setAddedCourses] = useState<addedCoursesType>({ books: [], articles: [], videos: [] })
  const [chartData, setChartData] = useState<any>({ current: null, couldbe: null, average: null })
  useEffect(() => {
    request({
      url: ApiRoutes.SUGGESTION,
      method: 'get',
    }).then((res) => {
      setAddedCourses(res?.data.courses)
      setChartData(res?.data.scores)
    })
  }, [])

  const handleAddCourses = (id: number, type: DataTypeKey) => {
    addCourseRequest({
      method: 'POST',
      url: ApiRoutes.COURSES + '/' + type,
      data: { courseId: id },
    })
      .then((res) => {
        setAddedCourses(res?.data.courses)
        setChartData((prev: any) => ({ ...prev, couldbe: res?.data.couldbe }))
        toast.success(res?.data.message)
      })
      .catch((e) => {
        toast.error(e.message)
      })
  }

  return (
    <>
      <div className=" max-w-[90%] xl:max-w-[80%] flex flex-col items-center mx-auto py-[32px] lg:py-[95px] gap-y-[88px] ">
        <div className="w-full flex flex-col-reverse lg:flex-row justify-between items-start gap-y-12 lg:gap-y-0 lg:gap-x-6">
          <div className="w-full lg:w-[50%] flex flex-col items-end ">
            <DescriptionSection />
            {(response as any)?.suggestions && (
              <div className="w-full flex flex-col gap-12 mt-6">
                <Suggestions
                  title={'Books'}
                  data={(response as any).suggestions.books}
                  renderCards={(item) => {
                    return (
                      <PlanItem
                        image={'/'}
                        title={item.title}
                        badge={item.skill}
                        description={item.description}
                        level={item.level}
                        price={item.price}
                        id={item._id}
                        details={handleDetails('books', item)}
                        handleAddCourses={handleAddCourses}
                        loading={loading}
                        type={'books'}
                        added={!!addedCourses?.books?.find((book) => book._id === item._id)}
                      />
                    )
                  }}
                />
                <Suggestions
                  title={'Videos'}
                  data={(response as any).suggestions.videos}
                  renderCards={(item) => (
                    <PlanItem
                      image={'/'}
                      title={item.title}
                      badge={item.skill}
                      description={item.description}
                      level={item.level}
                      price={item.price}
                      id={item._id}
                      details={handleDetails('videos', item)}
                      handleAddCourses={handleAddCourses}
                      loading={loading}
                      type={'videos'}
                      added={!!addedCourses?.videos?.find((video) => video._id === item._id)}
                    />
                  )}
                />

                <Suggestions
                  title={'Articles'}
                  data={(response as any).suggestions.articles}
                  renderCards={(item) => (
                    <PlanItem
                      image={'/'}
                      title={item.title}
                      badge={item.skill}
                      description={item.description}
                      level={item.level}
                      price={item.price}
                      id={item._id}
                      details={handleDetails('articles', item)}
                      handleAddCourses={handleAddCourses}
                      loading={loading}
                      type={'articles'}
                      added={!!addedCourses?.articles?.find((article) => article._id === item._id)}
                    />
                  )}
                />
              </div>
            )}

            {!isMobile && (
              <div className="hidden lg:flex text-left  flex-col lg:flex-row justify-between items-center gap-3 w-full mt-12 bg-blue-50 py-3 px-3 rounded-xl">
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
              {(response as any)?.scores ? (
                <Chart data={chartData} />
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
      <GuideTour />
    </>
  )
}
export default Offers
