'use client'
import React, { FC, useState } from 'react'
import PageTitle from '@/components/preferences/pageTitle/PageTitle'
import AnswerItem from '@/components/questions/answerItem/AnswerItem'
import SubmitHandler from '@/components/preferences/submitHandler/SubmitHandler'
import Badge from '@/components/ui/badge/Badge'
import { questions } from '@/constants/CareerSuggestions'
import { useRouter } from 'next/navigation'

type Props = {
  params: any
}
const QuestionsPage: FC<Props> = ({ params }) => {
  const [checked, setChecked] = useState<string>('')
  const router = useRouter()
  const id = params?.id - 1
  const submitHandler = () => {
    const values = JSON.parse(sessionStorage.getItem('questions') as any) ?? []
    const newValue = { questionId: id, answerId: checked }
    values[id] = newValue
    sessionStorage.setItem('questions', JSON.stringify(values))
    router.push('/questions/' + (+params?.id + 1))
  }
  return (
    <>
      <section className="flex flex-col flex-1 overflow-auto py-5">
        <section className="max-w-[1200px] mx-auto ">
          <Badge type={'secondary'}>{questions[+id].category}</Badge>
          <PageTitle title={questions[+id].title} description={'Choose one'} />
        </section>
        <section className="flex flex-col gap-3 max-w-[1200px] mx-auto w-full">
          {questions[+id].answers.map((item, index) => (
            <AnswerItem
              title={item.title}
              key={item.value}
              checked={checked === item.value}
              number={index + 1}
              onClick={() => setChecked(item.value)}
            />
          ))}
        </section>
      </section>
      <SubmitHandler disabled={!checked} onClick={submitHandler} />
    </>
  )
}

export default QuestionsPage
