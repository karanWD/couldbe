'use client'
import React from 'react'
import PageContent from '@/components/preferences/pageContent/PageContent'
import PreferencesTitle from '@/components/preferences/preferencesTitle/PreferencesTitle'

const Options = [
  { title: '0-2 Years', value: 1 },
  { title: '2-5 Years', value: 2 },
  { title: '+5 Years', value: 3 },
  { title: 'Career Changer - Looking to switch career?', value: 4 },
]
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
