'use client'
import Accordion from '@/components/ui/accordion/Accordion'
import { FC, useState } from 'react'

const questions = [
  {
    question: 'What is Could Be?',
    answer:
      'Could Be is an AI-based platform designed to help individuals advance their personal and professional development. By assessing your background and aspirations, we provide personalized development plans, curated resources, and access to human coaches and mentors.',
  },
  {
    question: 'How does Could Be work?',
    answer:
      'Could Be begins by gathering information about your personal preferences, education, career history, and desired skills. We then assess your current skill levels in problem-solving, working with people, self-management, and AI & technology use. Based on this assessment, we generate a personalized development roadmap that includes books, articles, videos, online courses, and university degree programs.',
  },
  {
    question: 'What kind of resources does Could Be provide?',
    answer:
      'Could Be offers a variety of resources including books, articles, videos, online courses, and degree programs from universities. We tailor these resources to your specific needs and goals, creating a personalized roadmap for your development.',
  },
  {
    question: 'How can Could Be help me identify my strengths and weaknesses?',
    answer:
      "Could Be's assessment phase evaluates your skills in problem-solving, working with people, self-management, and technology use. This helps identify your strengths and areas for improvement, forming the basis of your personalized roadmap.",
  },
  {
    question: 'What types of personalized development plans does Could Be offer?',
    answer:
      "Could Be offers development plans tailored to various career paths, educational goals, and skill enhancements. Whether you're looking to advance in your current job, switch careers, or gain new skills, we provide a customized plan to help you succeed",
  },
  {
    question: 'How does Could Be ensure the quality of the resources it recommends?',
    answer:
      'Could Be partners with reputable universities, course providers, and content creators to ensure the quality and relevance of the resources we recommend. Our AI continuously updates recommendations based on user feedback and new developments in various fields.',
  },
]

const Faq: FC = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  return (
    <div className="flex flex-col justify-center  gap-y-16 lg:gap-y-32 lg:mb-32 lg:w-[80%] xl:w-[65%] 2xl:w-[55%]">
      <div className="flex flex-col justify-center items-center text-center gap-y-3">
        <span className="font-[CodecPro-Bold] text-[16px] text-[#1232F0] uppercase">Imagine what it couldbe</span>
        <span className="font-[CodecPro-ExtraBold] text-[44px]">FAQ</span>
        <span className="font-[CodecPro-Light] text-[20px] lg:text-[24px] lg:px-32">
          Still having questions?
          <br />
          Visit our <span className="underline">FAQ page</span> or <span className="underline">contact us</span>.
        </span>
      </div>
      <div id="accordion-collapse" data-accordion="collapse" className=" flex flex-col gap-y-8 max-w-[90%] mx-auto">
        {questions.map((item, index) => (
          <div key={'FAQ_ITEM_' + index}>
            <Accordion
              variant="contained"
              title={item.question}
              index={index}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
              className="bg-[#4D67F0] rtl:text-right text-white rounded-[24px] py-5 lg:py-7">
              <p className="text-gray-500 font-[CodecPro-Light] text-[14px] lg:text-[20px] px-4 text-justify">
                {item.answer}
              </p>
            </Accordion>
          </div>
        ))}
      </div>
    </div>
  )
}
export default Faq
