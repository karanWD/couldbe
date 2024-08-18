'use client'
import { createContext, FC, ReactNode, useEffect, useState } from 'react'

export const DeviceTypeContext = createContext<boolean | null>(null)

function checkIsMobile() {
  const regex = /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i
  return regex.test(navigator.userAgent)
}

const DeviceDetector: FC<{ children: ReactNode }> = ({ children }) => {
  const [isMobile, setIsMobile] = useState<boolean | null>(null)
  useEffect(() => {
    const value = checkIsMobile()
    setIsMobile(value)
  }, [])
  return <DeviceTypeContext.Provider value={isMobile}>{isMobile !== null && children}</DeviceTypeContext.Provider>
}

export default DeviceDetector
