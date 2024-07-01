'use client'
import React from 'react'
import Range from '@/components/reusable/range/Range'

const BudgetPage = () => {
  return (
    <div className=" w-full px-40 ">
      <h1 className="font-[CodecPro-Heavy] text-[50px] text-left py-8  mx-auto ">
        What is your budget for the course?
      </h1>
      <div className="w-[700px] relative mt-8 px-9 py-12 rounded-2xl border border-black/[0.2] shadow-[0_4px_18px_rgba(0,0,0,0.15)]">
        <Range max={100000} min={0} onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)} />
      </div>
    </div>
  )
}

export default BudgetPage
