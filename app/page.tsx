'use client'
import Button from '@/components/ui/button/Button'
import Badge from '@/components/ui/badge/Badge'
import Chips from '@/components/ui/chips/Chips'
import { useState } from 'react'
import Input from '@/components/ui/input/Input'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl  font-mono text-sm ">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">app/page.tsx</code>
        </p>
        <br />
        <h1 className={'text-3xl'}>Button</h1>
        <div className={'flex gap-2'}>
          <Button format={'fill'} variant={'secondary'} size={'sm'}>
            HI
          </Button>
          <Button format={'outline'} variant={'secondary'} size={'sm'}>
            HI
          </Button>
          <Button format={'fill'} variant={'primary'} size={'sm'}>
            HI
          </Button>
          <Button format={'outline'} variant={'primary'} size={'sm'}>
            HI
          </Button>
        </div>
        <br />
        <hr />
        <br />
        <h1 className={'text-3xl'}>Badge</h1>
        <div className={'flex gap-2'}>
          <Badge type={'default'}>Level 2</Badge>
          <Badge type={'secondary'}>Problem Solving</Badge>
        </div>
        <br />
        <hr />
        <br />
        <h1 className={'text-3xl'}>Chips</h1>
        <div className={'flex gap-2'}>
          <Chips checked={true} clickHandler={() => {}}>
            Education
          </Chips>
          <Chips clickHandler={() => {}}>Health Care</Chips>
        </div>
        <br />
        <hr />
        <br />
        <h1 className={'text-3xl'}>Input</h1>
        <Input onChange={() => {}} placeholder={'Tourism'} />
      </div>
    </main>
  )
}
