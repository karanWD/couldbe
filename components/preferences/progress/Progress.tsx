'use client'
import React from 'react'
import { usePathname, useRouter } from 'next/navigation'

const steps = {
  career: 1,
  budget: 2,
  experience: 3,
  degree: 4,
  duration: 5,
  format: 6,
}
const percent = 100 / 6

const Progress = () => {
  const router = useRouter()
  const pathname = usePathname()
  const paths = pathname.split('/')
  const path = paths[paths.length - 1] as keyof typeof steps
  const width = Math.floor(percent * steps[path])
  return (
    <div
      className="duration-300 h-2 bg-gradient-to-r from-[#F25D1B] to-[#1232F0] absolute -bottom-1 left-0"
      style={{ width: width + '%' }}></div>
  )
}

export default Progress
