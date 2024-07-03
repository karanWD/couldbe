import React, { FC } from 'react'

type Props = {
  title: string
  description: string
}
const PageTitle: FC<Props> = ({ title, description }) => {
  return (
    <div className="flex flex-col gap-3 max-w-[1526px] mx-auto">
      <h3 className="font-[CodecPro-Heavy] text-[50px]">{title}</h3>
      <h5 className="font-[CodecPro-News] text-gray-400 text-[30px]">{description}</h5>
    </div>
  )
}

export default PageTitle
