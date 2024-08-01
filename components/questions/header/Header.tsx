'use client'
import React from 'react'
import Image from 'next/image'
import CloseIcon from '@/components/icons/CloseIcon'
import Progress from '@/components/preferences/progress/Progress'
import { useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'

const percent = 100 / 20
const Header = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const id = +(searchParams.get('id') as string)
  const width = Math.floor(percent * id)
  return (
    <header className="border-b border-gray-300 py-6 relative w-full">
      <div className="w-full max-w-screen-lg xl:max-w-screen-xl mx-auto flex items-center justify-between">
        <div className="w-6 h-6"></div>
        <Link href={'/'}>
          <Image src={'/images/db-logo.svg'} alt={'logo'} width={'186'} height={'50'} layout={'fixed'} />
        </Link>
        <div
          className="w-6 h-6"
          onClick={() => {
            router.push('/')
          }}>
          <CloseIcon />
        </div>
        <Progress />
      </div>
    </header>
  )
}

export default Header
