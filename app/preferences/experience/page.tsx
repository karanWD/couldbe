'use client'
import React from 'react'
import PageContent from '@/components/preferences/pageContent/PageContent'
import PreferencesTitle from '@/components/preferences/preferencesTitle/PreferencesTitle'

const Options = ['0-2 Years', '2-5 Years', '+5 Years', 'Career Changer - Looking to switch career?']
const ExperiencePage = () => {
  return (
    <article className="pt-10 flex flex-col flex-1 gap-12 ">
      <PreferencesTitle
        title={'Share Your Work Experience'}
        description="To provide you with the most relevant courses and career advice, please let us know about your job experience"
      />
      <PageContent options={Options} name={'work_experience'} />
    </article>
  )
}

export default ExperiencePage
