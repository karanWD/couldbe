import Accordion from '@/components/ui/accordion/Accordion'
import { FC, useState } from 'react'

const questions = [
  {
    question: '',
    answer: '',
  },
]

const Faq: FC = () => {
  const [activeIndex, setActiveIndex] = useState(1)
  return (
    <div className="flex flex-col justify-center  gap-y-32 mb-32 lg:w-[80%] xl:w-[65%] 2xl:w-[55%]">
      <div className="flex flex-col justify-center items-center text-center gap-y-3">
        <span className="font-[CodecPro-Bold] text-[16px] text-[#1232F0] uppercase">Imagine what it couldbe</span>
        <span className="font-[CodecPro-ExtraBold] text-[44px]">FAQ</span>
        <span className="font-[CodecPro-Light] text-[24px] px-32">
          Still having questions?
          <br />
          Visit our <span className="underline">FAQ page</span> or <span className="underline">contact us</span>.
        </span>
      </div>
      <div id="accordion-collapse" data-accordion="collapse" className=" flex flex-col gap-y-8">
        <div>
          <Accordion
            variant="contained"
            title="What is Flowbite?"
            index={1}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
            className="bg-[#4D67F0] rtl:text-right text-white rounded-[24px] py-5">
            <p className="text-gray-500 font-[CodecPro-Light] text-[20px] ">
              The main difference is that the core components from Flowbite are open source under the MIT license,
              whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and
              standalone components, whereas Tailwind UI offers sections of pages.
            </p>
          </Accordion>
        </div>
        <div>
          <Accordion
            variant="contained"
            title="What is Flowbite?"
            index={2}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
            className="bg-[#4D67F0] rtl:text-right text-white rounded-[24px] py-5">
            <p className="text-gray-500 font-[CodecPro-Light] text-[20px]">
              The main difference is that the core components from Flowbite are open source under the MIT license,
              whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and
              standalone components, whereas Tailwind UI offers sections of pages.
            </p>
          </Accordion>
        </div>
      </div>
    </div>
  )
}
export default Faq
