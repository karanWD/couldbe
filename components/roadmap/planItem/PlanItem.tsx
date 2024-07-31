import Badge from '@/components/ui/badge/Badge'
import Image from 'next/image'
import { FC } from 'react'
interface Props {
  skills: string[]
  title: string
  level: number
  price: number
  image: string
}
const PlanItem: FC<Props> = ({ title, skills, level, price, image }) => {
  return (
    <div className="flex items-center  xs:gap-x-4 xl:gap-x-6 p-5 border-[1px] border-solid border-[rgba(0, 0, 0, 0.15)] rounded-[20px] shadow-[0_4px_24px_rgba(0,0,0,0.05)] ">
      <div className="flex shrink w-[150px] h-[190px]">
        <Image src={image} alt={title} width={150} height={190} />
      </div>
      <div className="flex flex-col gap-y-3 flex-1">
        <span className="xs:text-[22px] xl:text-[24px] font-[CodecPro-Bold] line-clamp-3">{title}</span>
        <div className="flex items-center gap-2 flex-wrap">
          {skills?.map((item, index) => (
            <Badge key={index} type="secondary">
              {item}
            </Badge>
          ))}
        </div>
        <div className="flex justify-between items-center">
          <div className="max-w-fit">
            <Badge type="default">Level {level}</Badge>
          </div>
          <span className="xs:text-[22px] xl:text-[24px] font-[CodecPro-Bold]">{price}$</span>
        </div>
      </div>
    </div>
  )
}
export default PlanItem
