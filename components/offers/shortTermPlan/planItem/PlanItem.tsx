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
  return (
    <div className="flex flex-col gap-y-10 border-black border-opacity-0.3 border-[1px] border-solid xs:p-5 2xl:p-8 rounded-[20px]">
      <div className="flex items-center xs:gap-x-4 2xl:gap-x-8">
        <div className="flex shrink w-[234px] h-[300px]">
          <Image src={image} alt={title} width={234} height={300} />
        </div>
        <div className="flex flex-col xs:gap-y-1 2xl:gap-y-2 flex-1">
          <span className="xs:text-[22px] 2xl:text-[30px] font-[CodecPro-Bold] xs:mb-4 2xl:mb-16">
            {truncate(title, ' ', 5)}
          </span>
          <div className="flex items-center gap-2 flex-wrap">
            {badge?.map((item, index) => (
              <Badge key={index} type="secondary">
                {item}
              </Badge>
            ))}
          </div>
          <div className="max-w-fit">
            <Badge type="default">Level {level}</Badge>
          </div>
          <div className="flex flex-col gap-y-2.5 mt-3">
            {details?.map((item, index) => (
              <div key={index} className="flex items-center justify-between gap-x-1">
                <span className="text-[15px] font-[CodecPro-Bold] text-[#9C9B9B]">{item.title}</span>
                <div className="flex items-center flex-wrap justify-end">
                  {typeof item.description === 'object' ? (
                    item.description.map((description, index) => (
                      <span className="text-[15px] font-[CodecPro-News] text-[#9C9B9B]" key={index}>
                        {description}
                        {index !== item.description.length - 1 && ' , '}
                      </span>
                    ))
                  ) : (
                    <span className="text-[15px] font-[CodecPro-News] text-[#9C9B9B]">
                      {truncate(item.description, ' ', 3)}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <LongText text={description} />
      <div className="flex justify-between items-center">
        <span className="xs:text-[28px] 2xl:text-[40px] font-[CodecPro-Bold]">Price: {price}$</span>
        <div className="max-w-[235px]">
          <Button
            format="fill"
            variant="primary"
            className="w-[235px]"
            onClick={() => handleAddCourses(id)}
            disabled={loading}>
            {loading ? '...' : '+ Add'}
          </Button>
        </div>
      </div>
    </div>
  )
}
export default PlanItem
