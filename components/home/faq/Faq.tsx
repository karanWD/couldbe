import ArrowDown from '@/components/icons/arrowDown'
import { FC } from 'react'

const Faq: FC = () => {
  return (
    <div className="flex flex-col justify-center  gap-y-32 mb-32">
      <div className="flex flex-col justify-center items-center text-center gap-y-3">
        <span className="font-[CodecPro-Bold] text-[20px] text-[#1232F0] uppercase">Imagine what it couldbe</span>
        <span className="font-[CodecPro-ExtraBold] text-[70px]">FAQ</span>
        <span className="font-[CodecPro-Light] text-[35px] px-32">
          Still having questions?
          <br />
          Visit our FAQ page or contact us.
        </span>
      </div>
      <div id="accordion-collapse" data-accordion="collapse">
        <h2 id="accordion-collapse-heading-1">
          <button
            className="flex items-center justify-between w-full h-[120px] bg-[#4D67F0] font-[CodecPro-Ligh] text-[30px] rtl:text-right text-white rounded-[24px] focus:ring-4 focus:ring-gray-200  gap-3 p-9"
            data-accordion-target="#accordion-collapse-body-1"
            aria-expanded="true"
            aria-controls="accordion-collapse-body-1">
            <span>What is Flowbite?</span>
            <div className="w-[18px]">
              <ArrowDown />
            </div>
          </button>
        </h2>
      </div>
    </div>
  )
}
export default Faq
