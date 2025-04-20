import { FC } from 'react'
import Badge from '@/components/ui/badge/Badge'
import LongText from './longText/LongText'
import Button from '@/components/ui/button/Button'
import { DataTypeKey } from '@/components/offers/types'

interface Props {
  type: DataTypeKey
  badge: string[]
  title: string
  level: number
  details: {
    title: string
    description: string | string[]
  }[]
  description: string
  price: number
  image: string
  id: number
  handleAddCourses: (id: number, type: DataTypeKey) => void
  loading: boolean
  added: boolean
}

const PlanItem: FC<Props> = ({
  type,
  title,
  badge,
  level,
  details,
  description,
  price,
  image,
  added,
  id,
  handleAddCourses,
  loading = false,
}) => {
  const joinItems = (items: string[]) => {
    return items.join(' , ')
  }
  return (
    <div className="flex flex-col gap-y-4 border-[rgba(0, 0, 0, 0.3)] border-opacity-0.3 border-[1px] border-solid p-3 rounded-[20px]">
      <div className="flex items-center gap-x-3 ">
        {/*<div className="flex shrink w-[86px] xs:h-[108px]  rounded-[13px] border-[1px] border-solid border-gray-900">*/}
        {/*  <Image*/}
        {/*    src={image || "/images/book.png"}*/}
        {/*    alt={title}*/}
        {/*    width={86}*/}
        {/*    height={108}*/}
        {/*    className="rounded-[13px] border-[1px] border-solid border-gray-900"*/}
        {/*  />*/}
        {/*</div>*/}
        <div className="flex flex-col gap-y-1  flex-1">
          <span className="text-[16px]  font-[CodecPro-Bold] line-clamp-1">{title}</span>
          <div className="flex items-center gap-2">
            <Badge type="secondary">{badge}</Badge>
            <Badge type="default">Level {level}</Badge>
          </div>
        </div>
      </div>
      <div className="flex flex-col  ">
        {details?.map((item, index) => (
          <div key={index} className="flex items-center justify-between gap-x-3">
            <span className="text-[14px] font-[CodecPro-News] text-[#9C9B9B]">{item.title}</span>
            <span className="text-[14px] font-[CodecPro-News] text-[#9C9B9B]  w-fit max-w-[160px] overflow-hidden text-ellipsis whitespace-nowrap">
              {item.description}
            </span>
          </div>
        ))}
      </div>

      <hr />
      <LongText text={description} />
      <div className={`flex ${price ? 'justify-between' : 'justify-end'} items-center mt-auto`}>
        {price && <span className="text-[18px] font-[CodecPro-Bold]">{price}</span>}
        <div className="max-w-[100px] h-[30px]">
          <Button
            format={added ? 'outline' : 'fill'}
            variant="primary"
            className={`w-[100px] h-[30px] !text-[12px] font-[CodecPro-News] guide-tour-button ${loading ? 'opacity-70' : 'opacity-100'}`}
            onClick={() => handleAddCourses(id, type)}
            disabled={loading}>
            {loading ? '...' : added ? 'remove' : 'add'}
          </Button>
        </div>
      </div>
    </div>
  )
}
export default PlanItem
