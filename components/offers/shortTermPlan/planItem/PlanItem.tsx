import Badge from '@/components/ui/badge/Badge'
import Image from 'next/image'
import { FC } from 'react'
import LongText from './longText/LongText'
import Button from '@/components/ui/button/Button'
interface Props {
  badge: string[]
  title: string
  level: string
  details: {
    author: string
    publisher: string
    language: string
    numberOfPage: string
  }
  description: string
  price: string
  image: string
}
const PlanItem: FC<Props> = ({ title, badge, level, details, description, price, image }) => {
  const planDetails = [
    {
      title: 'Author',
      description: details.author,
    },
    {
      title: 'Publisher',
      description: details.publisher,
    },
    {
      title: 'Language',
      description: details.language,
    },
    {
      title: 'Number of pages',
      description: details.numberOfPage,
    },
  ]
  return (
    <div className="flex flex-col gap-y-10 ">
      <div className="flex items-center gap-x-8">
        <Image src={image} alt={title} width={234} height={300} />
        <div className="flex flex-col gap-y-2 flex-1">
          <span className="text-[30px] font-[CodecPro-Bold] mb-16">{title}</span>
          <div className="flex items-center gap-2 flex-wrap">
            {badge?.map((item, index) => (
              <Badge key={index} type="secondary">
                {item}
              </Badge>
            ))}
          </div>
          <div className="max-w-fit">
            <Badge type="default">{level}</Badge>
          </div>
          <div className="flex flex-col gap-y-2.5 mt-3">
            {planDetails.map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-[15px] font-[CodecPro-Bold] text-[#9C9B9B]">{item.title}</span>
                <span className="text-[15px] font-[CodecPro-News] text-[#9C9B9B]">{item.description}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <LongText text={description} />
      <div className="flex justify-between items-center">
        <span className="text-[40px] font-[CodecPro-Bold]">Price: {price} $</span>
        <Button format="fill" variant="primary" className="w-[235px]">
          + Add{' '}
        </Button>
      </div>
    </div>
  )
}
export default PlanItem
