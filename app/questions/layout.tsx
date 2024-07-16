import React, { FC, ReactNode } from 'react'
import Auth from '@/components/reusable/auth/Auth'
import Header from '@/components/questions/header/Header'

type Props = {
  children: ReactNode
}
const PreferencesLayout: FC<Props> = ({ children }) => {
  return (
    <Auth>
      <div className="flex flex-col h-screen max-h-screen">
        <Header />
        {children}
      </div>
    </Auth>
  )
}

export default PreferencesLayout
