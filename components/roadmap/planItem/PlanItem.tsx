import Badge from '@/components/ui/badge/Badge'
import Image from 'next/image'
import { FC } from 'react'
interface Props {
  badge: string[]
  title: string
  level: string
  price: string
  image: string
}
const PlanItem: FC<Props> = ({ title, badge, level, price, image }) => {
  return (
    <div className="flex items-center gap-x-8 py-[52px] px-[40px] border-[1px] border-solid border-[rgba(0, 0, 0, 0.15)] rounded-[20px] shadow-[0_4px_24px_rgba(0,0,0,0.05)] my-[68px]">
      <Image src={image} alt={title} width={174} height={219} />
      <div className="flex flex-col gap-y-4 flex-1">
        <span className="text-[30px] font-[CodecPro-Bold] h-[116px]">{title}</span>
        <div className="flex items-center gap-2 flex-wrap">
          {badge?.map((item, index) => (
            <Badge key={index} type="secondary">
              {item}
            </Badge>
          ))}
        </div>
        <div className="flex justify-between items-center">
          <div className="max-w-fit">
            <Badge type="default">{level}</Badge>
          </div>
          <span className="text-[30px] font-[CodecPro-Bold]">{price} $</span>
        </div>
      </div>
    </div>
  )
}
export default PlanItem
