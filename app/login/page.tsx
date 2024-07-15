import React, { FC } from 'react'
import Login from '@/components/login/Login'

type Props = {
  params: any
}
const LoginPage: FC<Props> = ({ params }) => {
  return <Login pageParams={params} />
}

export default LoginPage
