'use client'
import React from 'react'
import PageTitle from '@/components/preferences/pageTitle/PageTitle'
import PageContent from '@/components/preferences/pageContent/PageContent'

const Options = ['Yes', 'No', 'Not Sure Yet']
const DegreePage = () => {
  return (
    <>
      <article className="flex flex-1 flex-col gap-24 pt-10">
        <PageTitle
          title={'Are you looking for a Degree'}
          description={
            'To better understand your preferences and provide you with the best learning experience,\n' +
            'please let us know which course format you prefer'
          }
        />
        <PageContent options={Options} name={'need_degree'} />
      </article>
    </>
  )
}

export default DegreePage
