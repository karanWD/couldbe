import ArrowUp from '@/components/icons/ArrowUp'
import ArrowDown from '@/components/icons/arrowDown'
import { FC, HTMLAttributes } from 'react'
interface AccordionType extends HTMLAttributes<HTMLDivElement> {
  title: string
  variant: 'contained' | 'text'
  index: number
  activeIndex: number
  setActiveIndex: (index: number) => void
}
const Accordion: FC<AccordionType> = ({ children, title, variant, index, activeIndex, setActiveIndex, ...props }) => {
  const Variant = {
    contained: {
      fontFamily: 'font-[CodecPro-Light]',
      fontSize: 'text-[30px]',
      color: 'white',
      textColor: 'text-white',
    },
    text: {
      fontFamily: 'font-[CodecPro-ExtraBold]',
      fontSize: 'text-[30px]',
      color: '#4D67F0',
      textColor: 'text-[#4D67F0]',
    },
  }
  const handleSetIndex = (index: number) => activeIndex !== index && setActiveIndex(index)
  return (
    <>
      <div
        onClick={() => handleSetIndex(index)}
        className={`flex items-center justify-between w-full gap-3 px-9 py-3.5 ${props.className}`}>
        <span className={`${Variant[variant].fontFamily} ${Variant[variant].fontSize} ${Variant[variant].textColor}`}>
          {title}
        </span>
        <div className="w-[18px]">
          {activeIndex === index ? (
            <ArrowUp color={Variant[variant].color} />
          ) : (
            <ArrowDown color={Variant[variant].color} />
          )}
        </div>
      </div>
      <div
        className={`bg-white rounded-[24px] transition-all ease-in-out duration-300 max-w-[100%] px-4 ${activeIndex === index ? 'max-h-[300px] py-4' : 'max-h-[0]'} overflow-hidden`}>
        {children}
      </div>
    </>
  )
}
export default Accordion
