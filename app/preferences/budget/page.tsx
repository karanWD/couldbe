'use client'
import React, { useRef } from 'react'
import Range from '@/components/reusable/range/Range'
import SubmitHandler from '@/components/preferences/submitHandler/SubmitHandler'
import { useRouter } from 'next/navigation'
import PreferencesTitle from '@/components/preferences/preferencesTitle/PreferencesTitle'

const BudgetPage = () => {
  const router = useRouter()
  const budgetRef = useRef({ value: [0, 100000] })
  const submitHandler = () => {
    const values = JSON.parse(sessionStorage.getItem('preferences') as any)
    sessionStorage.setItem(
      'preferences',
      JSON.stringify({
        ...values,
        budget_amount: { min: budgetRef.current.value[0], max: budgetRef.current.value[1] },
      })
    )
    router.push('experience')
  }
  return (
    <>
      <article className="flex flex-col flex-1 w-full max-w-screen-lg xl:max-w-screen-xl mx-auto pt-6">
        <PreferencesTitle title="What is your budget for the course?" />
        <div className="w-full max-w-[700px] relative px-6 py-10 rounded-2xl border border-black/[0.2] shadow-[0_4px_18px_rgba(0,0,0,0.15)]">
          <Range max={100000} min={0} onChange={({ min, max }) => ((budgetRef?.current as any).value = [min, max])} />
        </div>
      </article>
      <SubmitHandler disabled={false} onClick={submitHandler} />
    </>
  )
}

export default BudgetPage
