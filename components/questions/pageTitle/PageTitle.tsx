import React, { FC } from 'react'

type Props = {
  title: string
  description: string
}
const PageTitle: FC<Props> = ({ title, description }) => {
  return (
    <div className="flex flex-col gap-10 w-full max-w-screen-lg xl:max-w-screen-xl mx-auto">
      <h3 className="font-[CodecPro-Heavy] text-[24px]">{title}</h3>
      <h5 className="font-[CodecPro-News] text-gray-400 text-[16px]">{description}</h5>
    </div>
  )
}

export default PageTitle
