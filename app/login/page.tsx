import React, { FC } from 'react'
import Login from '@/components/login/Login'

type Props = {
  searchParams: any
}
const LoginPage: FC<Props> = ({ searchParams }) => {
  return <Login pageParams={searchParams} />
}

export default LoginPage
