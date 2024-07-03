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
    contained: { fontFamily: 'font-[CodecPro-Light]', fontSize: 'text-[30px]' },
    text: { fontFamily: 'font-[CodecPro-Light]', fontSize: 'text-[30px]' },
  }
  const handleSetIndex = (index: number) => activeIndex !== index && setActiveIndex(index)
  return (
    <>
      <div
        onClick={() => handleSetIndex(index)}
        className={`flex items-center justify-between w-full gap-3 px-9 py-3.5 ${props.className}`}>
        <span className={`${Variant[variant].fontFamily} ${Variant[variant].fontSize}`}>{title}</span>
        <div className="w-[18px]">{activeIndex === index ? <ArrowUp /> : <ArrowDown />}</div>
      </div>
      {activeIndex === index && (
        <div className="bg-white rounded-[24px] p-4 mb-6 transition ease-in-out delay-3000 duration-300">
          {children}
        </div>
      )}
    </>
  )
}
export default Accordion
