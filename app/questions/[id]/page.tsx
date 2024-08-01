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
  const [data, setData] = useState<examType | null>(null)
  const router = useRouter()
  const id = params?.id - 1
  const { request, response } = useFetch()
  const { request: submitAnswers } = useFetch()
  const submitHandler = () => {
    const values = JSON.parse(sessionStorage.getItem('questions') as any) ?? []
    const newValue = { question_id: data?.questions[id].id, answer_id: checked }
    values[id] = newValue
    sessionStorage.setItem('questions', JSON.stringify(values))
    if (+params.id === data?.questions.length) {
      submitAnswers({
        url: ApiRoutes.EXAMS + '/' + data?.exam_id,
        method: 'PUT',
        data: { answershit: values },
      }).then(() => {
        router.push('/offers')
        sessionStorage.removeItem('exam')
      })
    } else {
      router.push('/questions/' + (+params?.id + 1))
    }
  }

  useEffect(() => {
    const values = JSON.parse(sessionStorage.getItem('questions') as any)
    const notCompleted = values?.findIndex((item: answersType) => item === null) + 1
    if (notCompleted && notCompleted !== +params.id) {
      router.push('/questions/' + notCompleted)
    } else {
      const questions = JSON.parse(sessionStorage.getItem('exam') as any)
      if (!questions) {
        request({
          url: ApiRoutes.EXAMS,
          method: 'POST',
        }).then((res: any) => {
          sessionStorage.setItem('exam', JSON.stringify(res.data.data))
          setData(res.data.data)
        })
      } else {
        setData(questions)
      }
    }
  }, [params?.id])

  return (
    data &&
    data.questions?.length > 0 && (
      <>
        <section className="flex flex-col flex-1 overflow-auto py-5">
          <section className="w-full max-w-screen-lg xl:max-w-screen-xl mx-auto ">
            <div className="mb-4">
              <Badge size={'large'} type={'secondary'}>
                {Categories[data?.questions[+id]?.category.name as CategoriesType]}
              </Badge>
            </div>
            <PageTitle title={id + 1 + '-' + data?.questions[+id].title} description={''} />
          </section>
          <section className="flex flex-col gap-3 w-full max-w-screen-lg xl:max-w-screen-xl mx-auto">
            {data?.questions[+id].answers.map((item, index) => (
              <AnswerItem
                title={item.title}
                key={item.id}
                checked={checked === item.id}
                number={index + 1}
                onClick={() => setChecked(item.id)}
              />
            ))}
          </section>
        </section>
        <SubmitHandler disabled={!checked} onClick={submitHandler} />
      </>
    )
  )
}

export default QuestionsPage
