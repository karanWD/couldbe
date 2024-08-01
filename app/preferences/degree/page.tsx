'use client'
import React from 'react'
import PageContent from '@/components/preferences/pageContent/PageContent'
import PreferencesTitle from '@/components/preferences/preferencesTitle/PreferencesTitle'

const Options = [
  { title: 'Yes', value: 1 },
  { title: 'No', value: 2 },
  { title: 'Not Sure Yet', value: 3 },
]
const DegreePage = () => {
  return (
    <>
      <article className="flex flex-1 flex-col gap-12 pt-10">
        <PreferencesTitle
          title={'Are you looking for a Degree'}
          description="To better understand your preferences and provide you with the best learning experience please let us know which course format you prefer"
        />
        <PageContent options={Options} name={'need_degree'} />
      </article>
    </>
  )
}

export default DegreePage
