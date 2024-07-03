import React, { FC } from 'react'
import Button from '@/components/ui/button/Button'

type Props = {
  onClick: () => void
  disabled: boolean
}
const SubmitHandler: FC<Props> = ({ onClick, disabled }) => {
  return (
    <section className="flex justify-end shadow-[0_4px_18.5px_rgba(0,0,0,0.1)] py-6 px-20">
      <Button disabled={disabled} format="fill" variant="primary" className="w-[235px]" onClick={onClick}>
        Next
      </Button>
    </section>
  )
}

export default SubmitHandler
