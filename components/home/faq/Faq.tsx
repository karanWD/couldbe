import ArrowDown from '@/components/icons/arrowDown'
import Accordion from '@/components/ui/accordion/Accordion'
import { FC, useState } from 'react'

const Faq: FC = () => {
  const [activeIndex, setActiveIndex] = useState(1)
  return (
    <div className="flex flex-col justify-center  gap-y-32 mb-32 w-[50%]">
      <div className="flex flex-col justify-center items-center text-center gap-y-3">
        <span className="font-[CodecPro-Bold] text-[20px] text-[#1232F0] uppercase">Imagine what it couldbe</span>
        <span className="font-[CodecPro-ExtraBold] text-[70px]">FAQ</span>
        <span className="font-[CodecPro-Light] text-[35px] px-32">
          Still having questions?
          <br />
          Visit our FAQ page or contact us.
        </span>
      </div>
      <div id="accordion-collapse" data-accordion="collapse" className=" flex flex-col gap-y-14">
        <Accordion
          variant="contained"
          title="What is Flowbite?"
          index={1}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          className="h-[120px] bg-[#4D67F0] rtl:text-right text-white rounded-[24px] ">
          <p className="mb-2 text-gray-500 font-[CodecPro-Light] text-[24px] ">
            The main difference is that the core components from Flowbite are open source under the MIT license, whereas
            Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone
            components, whereas Tailwind UI offers sections of pages.
          </p>
        </Accordion>
        <Accordion
          variant="contained"
          title="What is Flowbite?"
          index={2}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          className="h-[120px] bg-[#4D67F0] rtl:text-right text-white rounded-[24px]">
          <p className="mb-2 text-gray-500 font-[CodecPro-Light] text-[24px]">
            The main difference is that the core components from Flowbite are open source under the MIT license, whereas
            Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone
            components, whereas Tailwind UI offers sections of pages.
          </p>
        </Accordion>
      </div>
    </div>
  )
}
export default Faq
