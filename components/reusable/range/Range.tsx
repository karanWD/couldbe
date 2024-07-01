'use client'
import React, { FC, useCallback, useEffect, useRef, useState } from 'react'
import Styles from './RangeStyle.module.css'

type Props = {
  min: number
  max: number
  onChange: (params: any) => void
}

const Range: FC<Props> = ({ min, max, onChange }) => {
  const [minVal, setMinVal] = useState(min)
  const [maxVal, setMaxVal] = useState(max)

  const minValRef = useRef<any>(null)
  const maxValRef = useRef<any>(null)
  const range = useRef<any>(null)

  const getPercent = useCallback((value: any) => Math.round(((value - min) / (max - min)) * 100), [min, max])

  // Set width of the range to decrease from the left side
  useEffect(() => {
    if (maxValRef.current) {
      const minPercent = getPercent(minVal)
      const maxPercent = getPercent(+maxValRef.current.value)
      if (range.current) {
        range.current.style.left = `${minPercent}%`
        range.current.style.width = `${maxPercent - minPercent}%`
      }
    }
  }, [minVal, getPercent])

  // Set width of the range to decrease from the right side
  useEffect(() => {
    if (minValRef.current) {
      const minPercent = getPercent(+minValRef.current.value)
      const maxPercent = getPercent(maxVal)

      if (range.current) {
        range.current.style.width = `${maxPercent - minPercent}%`
      }
    }
  }, [maxVal, getPercent])

  // Get min and max values when their state changes
  useEffect(() => {
    onChange({ min: minVal, max: maxVal })
  }, [minVal, maxVal, onChange])
  return (
    <>
      <div className="relative w-full">
        <div className="flex justify-between items-center">
          <div className="bg-neutral-200 rounded-md text-neutral-800 px-2.5 py-1 mb-8">$0</div>
          <div className="bg-neutral-200 rounded-md text-neutral-800 px-2.5 py-1 mb-8">$100 000</div>
        </div>
        <div className={Styles['slider__range']} />
        <input
          type="range"
          min={min}
          max={max}
          value={minVal}
          ref={minValRef}
          onChange={(event) => {
            const value = Math.min(+event.target.value, maxVal - 1)
            setMinVal(value)
            event.target.value = value.toString()
          }}
          className={
            Styles['thumb'] + ' ' + (minVal > max - 100 ? Styles['thumb--zindex-5'] : Styles['thumb--zindex-3'])
          }
        />
        <input
          type="range"
          min={min}
          max={max}
          value={maxVal}
          ref={maxValRef}
          onChange={(event) => {
            const value = Math.max(+event.target.value, minVal + 1)
            setMaxVal(value)
            event.target.value = value.toString()
          }}
          className={Styles['thumb'] + ' ' + Styles['thumb--zindex-4']}
        />
        <div ref={range} className={Styles['slider__range']} />

        <div className={Styles['slider']}>
          <div className={Styles['slider__track']} />
          <div className={Styles['slider__range']} />
        </div>

        <div className="py-2">
          <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-0 -bottom-6">0</span>
          <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-1/4 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">
            25000
          </span>
          <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-2/4 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">
            50000
          </span>
          <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-3/4 -translate-x-1/2 -bottom-6">
            75000
          </span>
          <span className="text-sm text-gray-500 dark:text-gray-400 absolute end-0 -bottom-6">100000</span>
        </div>
      </div>

      <div className={'w-full flex gap-3 mt-8'}>
        <div className={' flex flex-col flex-1 gap-2'}>
          <div className="font-[CodecPro-Bold]">From ($)</div>
          <div className="w-full py-5 px-3 bg-neutral-200 rounded-xl text-xl">{minVal}</div>
        </div>
        <div className={' flex flex-col flex-1 gap-2  '}>
          <div className="font-[CodecPro-Bold]">To ($)</div>
          <div className="w-full  py-5 px-3 bg-neutral-200 rounded-xl text-xl">{maxVal}</div>
        </div>
      </div>
    </>
  )
}

export default Range
