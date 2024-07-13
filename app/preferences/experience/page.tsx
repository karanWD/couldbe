'use client'
import React, { useState } from 'react'
import PageTitle from '@/components/preferences/pageTitle/PageTitle'
import PageContent from '@/components/preferences/pageContent/PageContent'

const Options = ['0-2 Years', '2-5 Years', '+5 Years', 'Career Changer - Looking to switch career?']
const ExperiencePage = () => {
  return (
    <article className="pt-10 flex flex-col flex-1 gap-24">
      <PageTitle
        title={'Share Your Work Experience'}
        description={
          'To provide you with the most relevant courses and career advice, please let us know about your\n' +
          'job experience'
        }
      />
      <PageContent options={Options} name={'work_experience'} />
    </article>
  )
}

export default ExperiencePage
