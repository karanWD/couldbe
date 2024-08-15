import React, { FC, ReactNode } from 'react'
import Button from '@/components/ui/button/Button'

type Props = {
  title: string
  children: ReactNode
  clickHandler: () => void
}
const Guide: FC<Props> = ({ title, children, clickHandler }) => {
  return (
    <div className="bg-white px-5 py-10 rounded-t-2xl lg:rounded-2xl flex flex-col gap-6 items-center w-full ">
      <div className="bg-neutral-300 w-[60px] h-[60px] rounded-full flex items-center justify-center text-[32px] font-bold">
        !
      </div>
      <div className="font-[CodecPro-Bold] text-2xl">{title}</div>
      <div>{children}</div>
      <Button className="w-full lg:w-[200px]" format={'fill'} variant={'primary'} onClick={clickHandler}>
        got it
      </Button>
    </div>
  )
}

export default Guide
