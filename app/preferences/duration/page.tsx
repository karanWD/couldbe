'use client'
import React from 'react'
import PageContent from '@/components/preferences/pageContent/PageContent'
import PreferencesTitle from '@/components/preferences/preferencesTitle/PreferencesTitle'

const Options = [
  { title: 'Less Than 3 months ', value: 1 },
  { title: 'Less Than 6 months', value: 2 },
  { title: 'More Than 6 months', value: 3 },
]
const DurationPage = () => {
  return (
    <>
      <article className="pt-10 flex flex-col flex-1 gap-12">
        <PreferencesTitle
          title={'How Much Time Can You Allocate to This Development?'}
          description="To help us tailor our courses to your schedule, please let us know how much time you can dedicate to your development"
        />
        <PageContent options={Options} name={'duration'} />
      </article>
    </>
  )
}

export default DurationPage
