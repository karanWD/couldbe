import React, { FC } from 'react'
import Button from '@/components/ui/button/Button'

type Props = {
  onClick: () => void
  disabled: boolean
}
const SubmitHandler: FC<Props> = ({ onClick, disabled }) => {
  return (
    <section className="flex justify-end shadow-[0_4px_18.5px_rgba(0,0,0,0.1)] py-4 w-full">
      <div className="w-full mx-auto max-w-screen-lg xl:max-w-screen-xl flex justify-center lg:justify-end">
        <Button disabled={disabled} format="fill" variant="primary" className="w-11/12 lg:w-[235px]" onClick={onClick}>
          Next
        </Button>
      </div>
    </section>
  )
}

export default SubmitHandler
