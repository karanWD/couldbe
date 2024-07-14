import React, { FC } from 'react'

type Props = {
  title: string
  description?: string
}
const PreferencesTitle: FC<Props> = ({ title, description }) => {
  return (
    <section className="flex flex-col gap-4 w-full max-w-screen-lg xl:max-w-screen-xl mx-auto py-8">
      <h1 className="font-[CodecPro-Heavy] text-[32px] text-left  w-full  mx-auto ">{title}</h1>
      <h5 className="font-[CodecPro-News] text-gray-400 text-[20px]">{description}</h5>
    </section>
  )
}

export default PreferencesTitle
