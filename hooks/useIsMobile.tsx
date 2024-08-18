import { useContext } from 'react'
import { DeviceTypeContext } from '@/context/deviceDetector'

export const UseIsMobile = () => useContext(DeviceTypeContext)
