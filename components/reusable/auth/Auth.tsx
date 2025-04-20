'use client'
import { FC, ReactNode } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { getCookie } from 'cookies-next'

type Props = {
  children: ReactNode
}
const Auth: FC<Props> = ({ children }) => {
  const pathname = usePathname()
  const router = useRouter()
  const auth = getCookie('authorized')
  if (!auth) {
    router.push(`/login?return_url=${pathname || '/'}`)
  }
  return children
}

export default Auth
