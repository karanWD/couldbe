import React, { FC, ReactNode } from 'react'
import Header from '@/components/preferences/header/Header'
import Auth from '@/components/reusable/auth/Auth'

type Props = {
  children: ReactNode
}

const PreferencesLayout: FC<Props> = ({ children }) => {
  return (
    <Auth>
      <section className="flex flex-col h-screen">
        <Header />
        {children}
      </section>
    </Auth>
  )
}

export default PreferencesLayout
