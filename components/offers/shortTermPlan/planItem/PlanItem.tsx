import Badge from '@/components/ui/badge/Badge'
import Image from 'next/image'
import { FC } from 'react'
import LongText from './longText/LongText'
import Button from '@/components/ui/button/Button'
import { truncate } from '@/helpers/truncate'
interface Props {
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
  handleAddCourses: (id: number) => void
  loading: boolean
}
const PlanItem: FC<Props> = ({
  title,
  badge,
  level,
  details,
  description,
  price,
  image,
  id,
  handleAddCourses,
  loading,
}) => {
  const joinItems = (items: string[]) => {
    return items.join(' , ')
  }
  return (
    <div className="flex flex-col gap-y-4 border-[rgba(0, 0, 0, 0.3)] border-opacity-0.3 border-[1px] border-solid p-3 rounded-[20px] min-h-[360px]">
      <div className="flex items-center gap-x-3 ">
        <div className="flex shrink w-[86px] xs:h-[108px]  rounded-[13px] border-[1px] border-solid border-gray-900">
          <Image
            src={image}
            alt={title}
            width={86}
            height={108}
            className="rounded-[13px] border-[1px] border-solid border-gray-900"
          />
        </div>
        <div className="flex flex-col gap-y-1  flex-1">
          <span className="text-[16px]  font-[CodecPro-Bold] xs:mb-2 line-clamp-2">{title}</span>
          <div className="flex items-center gap-1 flex-wrap">
            {badge?.map((item, index) => (
              <Badge key={index} type="secondary">
                {item}
              </Badge>
            ))}
          </div>
          <div className="max-w-fit flex">
            <Badge type="default">Level {level}</Badge>
          </div>
        </div>
      </div>
      <div className="flex flex-col  ">
        {details?.map((item, index) => (
          <div key={index} className="flex items-center justify-between gap-x-3">
            <span className="text-[14px] font-[CodecPro-Bold] text-[#9C9B9B]">{item.title}</span>
            <div className="flex items-center justify-end">
              {typeof item.description === 'object' && item.description.length > 1 ? (
                <span className="text-[14px] font-[CodecPro-News] text-[#9C9B9B] line-clamp-1 w-fit">
                  {joinItems(item.description)}
                </span>
              ) : (
                <span className="text-[14px] font-[CodecPro-News] text-[#9C9B9B] line-clamp-1">{item.description}</span>
              )}
            </div>
          </div>
        ))}
      </div>
      <LongText text={description} />
      <div className="flex justify-between items-center mt-auto">
        <span className="text-[18px] font-[CodecPro-Bold]">${price}</span>
        <div className="max-w-[100px] h-[30px]">
          <Button
            format="fill"
            variant="primary"
            className="w-[100px] h-[30px] !text-[12px] font-[CodecPro-News]"
            onClick={() => handleAddCourses(id)}
            disabled={loading}>
            {loading ? '...' : 'Add'}
          </Button>
        </div>
      </div>
    </div>
  )
}
export default PlanItem
