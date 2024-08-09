'use client'
import React from 'react'
import PreferencesTitle from '@/components/preferences/preferencesTitle/PreferencesTitle'
import PageContent from '@/components/preferences/pageContent/PageContent'

const Options = [
  { title: 'Yes', value: 1 },
  { title: 'No', value: 2 },
]
const Page = () => {
  return (
    <>
      <article className="flex flex-1 flex-col gap-12 pt-10">
        <PreferencesTitle
          title={'Are You Interested in Studying Abroad?'}
          description="To better understand your preferences and provide you with the best study abroad experience, please let us know if you are interested in studying abroad"
        />
        <PageContent options={Options} name={'study_abroad'} />
      </article>
    </>
  )
}

export default Page
