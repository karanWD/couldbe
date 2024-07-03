'use client'
import React from 'react'
import PageTitle from '@/components/preferences/pageTitle/PageTitle'
import PageContent from '@/components/preferences/pageContent/PageContent'

const Options = ['Less Than 3 months ', 'Less Than 6 months', 'More Than 6 months']
const DurationPage = () => {
  return (
    <>
      <article className="pt-10 flex flex-col flex-1 gap-24">
        <PageTitle
          title={'How Much Time Can You Allocate to This Development?'}
          description={
            'To help us tailor our courses to your schedule, please let us know how much time you can\n' +
            'dedicate to your development'
          }
        />
        <PageContent options={Options} name={'duration'} />
      </article>
    </>
  )
}

export default DurationPage
