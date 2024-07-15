import React, { FC, ReactNode } from 'react'
import { cookies, headers } from 'next/headers'
import { redirect } from 'next/navigation'
import Header from '@/components/preferences/header/Header'

type Props = {
  children: ReactNode
}

const PreferencesLayout: FC<Props> = ({ children }) => {
  const cookieStore = cookies()
  const auth = cookieStore.get('auth_key' as any)?.value
  if (!auth) {
    const headersList = headers()
    const pathname = headersList.get('x-current-path') || ''
    redirect(`/login?return_url=${pathname}`)
  }
  return (
    <div className="flex flex-col h-screen">
      <Header />
      {children}
    </div>
  )
}

export default PreferencesLayout
