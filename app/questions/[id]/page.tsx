'use client'
import React, { FC, useEffect, useState } from 'react'
import PageTitle from '@/components/questions/pageTitle/PageTitle'
import AnswerItem from '@/components/questions/answerItem/AnswerItem'
import SubmitHandler from '@/components/preferences/submitHandler/SubmitHandler'
import Badge from '@/components/ui/badge/Badge'
import { useRouter } from 'next/navigation'
import useFetch from '@/hooks/useFetch'
import { ApiRoutes } from '@/constants/routes'
import { Categories, CategoriesType } from '@/constants/Categories'
import DrawerHandler from '@/components/reusable/drawerHandler/DrawerHandler'
import Guide from '@/components/reusable/guide/Guide'
import { questions } from '@/constants/questions'

type Props = {
  params: any
}
type answersType = { title: string; id: number }
type questionsType = {
  id: number
  title: string
  category: { name: CategoriesType; value: number }
  answers: answersType[]
}
type examType = {
  exam_id: string
  questions: questionsType[]
}

const QuestionsPage: FC<Props> = ({ params }) => {
  const [checked, setChecked] = useState<number | null>(null)
  const router = useRouter()
  const id = params?.id - 1
  const { request: submitAnswers } = useFetch()
  const [showGuide, setGuide] = useState(false)

  const submitHandler = () => {
    const values = JSON.parse(sessionStorage.getItem('questions') as any) ?? []
    const newValue = { answer_id: checked }
    values[id] = newValue
    sessionStorage.setItem('questions', JSON.stringify(values))
    if (+params.id === questions.length) {
      submitAnswers({
        url: ApiRoutes.EXAMS,
        method: 'POST',
        data: values,
      }).then(() => {
        router.push('/offers')
        sessionStorage.removeItem('exam')
      })
    } else {
      router.push('/questions/' + (+params?.id + 1))
    }
  }

  useEffect(() => {
    let timeout: null | ReturnType<typeof setTimeout> = null
    const values = JSON.parse(sessionStorage.getItem('questions') as any)
    const notCompleted = values?.findIndex((item: answersType) => item === null) + 1
    if (notCompleted && notCompleted !== +params.id) {
      router.push('/questions/' + notCompleted)
    }
    if (params?.id === '1') {
      timeout = setTimeout(() => {
        setGuide(true)
      }, 500)
    }
    return () => clearTimeout(timeout as any)
  }, [params?.id])

  return (
    <>
      <section className="flex flex-col flex-1 overflow-auto py-5 max-w-[90%] mx-auto lg:mx-0">
        <section className="w-full max-w-screen-lg xl:max-w-screen-xl mx-auto ">
          <div className="mb-4 w-fit">
            <Badge size={'large'} type={'secondary'}>
              {questions[+id].category}
            </Badge>
          </div>
          <PageTitle title={id + 1 + '-' + questions[+id].title} description={''} />
        </section>
        <section className="flex flex-col gap-3 w-full max-w-screen-lg xl:max-w-screen-xl mx-auto">
          {questions[+id].answers.map((item, index) => (
            <AnswerItem
              title={item.title}
              key={index + '-' + item.id}
              checked={checked === +item.id}
              number={index + 1}
              onClick={() => setChecked(+item.id)}
            />
          ))}
        </section>
      </section>
      <SubmitHandler disabled={!checked} onClick={submitHandler} />
      <DrawerHandler open={showGuide} closeHandler={() => setGuide(false)}>
        <Guide title={'Quick Skills Assessment'} clickHandler={() => setGuide(false)}>
          <p>
            To create the most effective development roadmap for you, we’ll now assess your skills in key areas based on
            insights from the World Economic Forum and McKinsey reports on future job skills.
            <br />
            <br />
            We’ll evaluate:
            <br />
            • Problem Solving <br />
            • Self Management <br />
            • Working with People <br />
            • AI & Technology Use <br />
            <br />
            This short assessment is designed to understand your strengths and areas for growth, ensuring your skills
            are future-proof. It only takes a few minutes and will help us tailor the perfect plan for your development.
            <br />
            Ready? Click ‘Next’ to start the assessment!
          </p>
        </Guide>
      </DrawerHandler>
    </>
  )
}

export default QuestionsPage
