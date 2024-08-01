'use client'
import React from 'react'
import PageContent from '@/components/preferences/pageContent/PageContent'
import PreferencesTitle from '@/components/preferences/preferencesTitle/PreferencesTitle'

const Options = [
  { title: 'Online', value: 1 },
  { title: 'In-person', value: 2 },
  { title: 'Both', value: 3 },
]
const FormatPage = () => {
  return (
    <article className="pt-10 flex flex-col flex-1 gap-12">
      <PreferencesTitle
        title={'Choose Your Preferred Course Format'}
        description="To better understand your preferences and provide you with the best learning experience,please let us know which course format you prefer"
      />
      <PageContent options={Options} name={'course_format'} />
    </article>
  )
}

export default FormatPage
