import React, { FC, ReactNode } from 'react'
import Auth from '@/components/reusable/auth/Auth'
import Header from '@/components/roadmap/header/Header'

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
