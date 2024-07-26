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
    <div className="flex items-center  xs:gap-x-4 xl:gap-x-8 p-[32px] border-[1px] border-solid border-[rgba(0, 0, 0, 0.15)] rounded-[20px] shadow-[0_4px_24px_rgba(0,0,0,0.05)] ">
      <div className="flex shrink w-[174px] h-[219px]">
        <Image src={image} alt={title} width={174} height={219} />
      </div>
      <div className="flex flex-col gap-y-4 flex-1">
        <span className="xs:text-[22px] xl:text-[30px] font-[CodecPro-Bold] xl:h-[116px]">{title}</span>
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
          <span className="xs:text-[22px] xl:text-[30px] font-[CodecPro-Bold]">{price}$</span>
        </div>
      </div>
    </div>
  )
}
export default PlanItem
