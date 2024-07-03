'use client'
import React, { useRef } from 'react'
import Range from '@/components/reusable/range/Range'
import SubmitHandler from '@/components/preferences/submitHandler/SubmitHandler'
import { useRouter } from 'next/navigation'

const BudgetPage = () => {
  const router = useRouter()
  const budgetRef = useRef({ value: [0, 100000] })
  const submitHandler = () => {
    const values = JSON.parse(sessionStorage.getItem('preferences') as any)
    sessionStorage.setItem('preferences', JSON.stringify({ ...values, budget: budgetRef.current.value }))
    router.push('experience')
  }
  return (
    <>
      <article className=" px-40 flex flex-col flex-1 w-full">
        <h1 className="font-[CodecPro-Heavy] text-[50px] text-left py-8 w-full  mx-auto ">
          What is your budget for the course?
        </h1>
        <div className="w-[700px] relative mt-8 px-9 py-12 rounded-2xl border border-black/[0.2] shadow-[0_4px_18px_rgba(0,0,0,0.15)]">
          <Range max={100000} min={0} onChange={({ min, max }) => ((budgetRef?.current as any).value = [min, max])} />
        </div>
      </article>
      <SubmitHandler disabled={false} onClick={submitHandler} />
    </>
  )
}

export default BudgetPage
