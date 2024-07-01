'use client'
import React, { FC, ReactNode } from 'react'
import CloseIcon from '@/components/icons/CloseIcon'
import Image from 'next/image'
import Button from '@/components/ui/button/Button'
import { useRouter } from 'next/navigation'

type Props = {
  children: ReactNode
}
const PreferencesLayout: FC<Props> = ({ children }) => {
  const router = useRouter()
  return (
    <div className="flex flex-col h-screen">
      <header className="flex items-center justify-between border-b border-gray-300 py-6 px-20">
        <div className="w-6 h-6"></div>
        <Image src={'/images/db-logo.svg'} alt={'logo'} width={'186'} height={'50'} layout={'fixed'} />
        <div className="w-6 h-6" onClick={() => router.push('/')}>
          <CloseIcon />
        </div>
      </header>
      <article className="flex flex-1">{children}</article>
      <footer className="flex justify-end shadow-[0_4px_18.5px_rgba(0,0,0,0.1)] py-6 px-20">
        <Button format="fill" variant="primary" className="w-[235px]">
          Next
        </Button>
      </footer>
    </div>
  )
}

export default PreferencesLayout
