import React, { FC } from 'react'
import Signup from '@/components/signup/Signup'

type Props = {
  searchParams: any
}
const SignUpPage: FC<Props> = ({ searchParams }) => {
  return <Signup pageParams={searchParams} />
}

export default SignUpPage
