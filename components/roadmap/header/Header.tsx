'use client'
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { UseIsMobile } from '@/hooks/useIsMobile'

const Header = () => {
  const router = useRouter()
  const isMobile = UseIsMobile()
  return (
    <header className="border-b border-gray-300 py-6 relative w-full">
      <div className="w-full max-w-screen-lg xl:max-w-screen-xl mx-auto flex items-center justify-between">
        <div className="w-6 h-6"></div>
        <Image
          src={'/images/db-logo.svg'}
          alt={'logo'}
          width={isMobile ? 132 : 186}
          height={isMobile ? 32 : 50}
          layout={'fixed'}
        />
        <div
          className="w-6 h-6"
          onClick={() => {
            router.push('/')
          }}></div>
        <div
          className="duration-300 h-2 bg-gradient-to-r from-[#F25D1B] to-[#1232F0] absolute -bottom-1 left-0"
          style={{ width: '100%' }}></div>
      </div>
    </header>
  )
}

export default Header
