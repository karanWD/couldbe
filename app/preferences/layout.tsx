'use client'
import React, { FC, ReactNode } from 'react'
import CloseIcon from '@/components/icons/CloseIcon'
import Image from 'next/image'
import Button from '@/components/ui/button/Button'
import { usePathname, useRouter } from 'next/navigation'

type Props = {
  children: ReactNode
}
const steps = {
  career: 1,
  budget: 2,
  experience: 3,
  degree: 4,
  duration: 5,
  format: 6,
}
const percent = 100 / 6
const PreferencesLayout: FC<Props> = ({ children }) => {
  const router = useRouter()
  const pathname = usePathname()
  const paths = pathname.split('/')
  const path = paths[paths.length - 1] as keyof typeof steps
  const width = Math.floor(percent * steps[path])

  return (
    <div className="flex flex-col h-screen">
      <header className="border-b border-gray-300 py-6 relative w-full">
        <div className="w-full max-w-screen-lg xl:max-w-screen-xl mx-auto flex items-center justify-between">
          <div className="w-6 h-6"></div>
          <Image src={'/images/db-logo.svg'} alt={'logo'} width={'186'} height={'50'} layout={'fixed'} />
          <div className="w-6 h-6" onClick={() => router.push('/')}>
            <CloseIcon />
          </div>
          <div
            className="duration-300 h-2 bg-gradient-to-r from-[#F25D1B] to-[#1232F0] absolute -bottom-1 left-0"
            style={{ width: width + '%' }}></div>
        </div>
      </header>
      {children}
    </div>
  )
}

export default PreferencesLayout
