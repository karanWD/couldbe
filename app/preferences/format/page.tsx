'use client'
import React from 'react'
import PageTitle from '@/components/preferences/pageTitle/PageTitle'
import PageContent from '@/components/preferences/pageContent/PageContent'

const Options = ['Online', 'In-person', 'Both']
const FormatPage = () => {
  return (
    <article className="pt-10 flex flex-col flex-1 gap-24">
      <PageTitle
        title={'Choose Your Preferred Course Format'}
        description={
          'To better understand your preferences and provide you with the best learning experience,\n' +
          'please let us know which course format you prefer'
        }
      />
      <PageContent options={Options} name={'format'} />
    </article>
  )
}

export default FormatPage
