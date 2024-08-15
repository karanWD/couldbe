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
    <div className="flex flex-col gap-2  border border-neutral-200 rounded-[20px] shadow-[0_4px_24px_rgba(0,0,0,0.05)] min-h-[180px] ">
      <div className="flex gap-4 p-3">
        <div className="min-w-[86px] h-[108px] relative rounded-md overflow-hidden">
          <Image src={image} alt={title} layout={'fill'} objectFit={'cover'} />
        </div>
        <div className="flex flex-col gap-3">
          <span className="xs:text-[14px] xl:text-[20px] font-[CodecPro-Bold] ">{title}</span>
          <div className="flex flex-row items-center gap-2 flex-wrap">
            {skills?.map((item, index) => (
              <Badge key={index} type="secondary">
                {item}
              </Badge>
            ))}
            <Badge type="default">Level {level}</Badge>
          </div>
        </div>
      </div>
      <div className="flex justify-between text-neutral-500 xs:text-[14px] xl:text-[18px] font-[CodecPro-News] border-t border-neutral-200 p-3">
        <span>Price:</span>
        <span>{price > 0 ? ` ${price} $` : 'Free'}</span>
      </div>
    </div>
  )
}
export default PlanItem
