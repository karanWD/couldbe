'use client'
import React, { FC, ReactNode } from 'react'
import CloseIcon from '@/components/icons/CloseIcon'
import Image from 'next/image'
import { useSearchParams, useRouter } from 'next/navigation'

type Props = {
  children: ReactNode
}
const percent = 100 / 20
const PreferencesLayout: FC<Props> = ({ children }) => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const id = +(searchParams.get('id') as string)
  const width = Math.floor(percent * id)

  return (
    <div className="flex flex-col h-screen max-h-screen">
      <header className="flex items-center justify-between border-b border-gray-300 py-6 px-20">
        <div className="w-6 h-6"></div>
        <Image src={'/images/db-logo.svg'} alt={'logo'} width={'186'} height={'50'} layout={'fixed'} />
        <div className="w-6 h-6" onClick={() => router.push('/')}>
          <CloseIcon />
        </div>
        <div
          className="duration-300 h-2 bg-gradient-to-r from-[#F25D1B] to-[#1232F0] absolute -bottom-1 left-0"
          style={{ width: width + '%' }}></div>
      </header>
      {children}
    </div>
  )
}

export default PreferencesLayout
