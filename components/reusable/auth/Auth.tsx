import { FC, ReactNode } from 'react'
import { cookies, headers } from 'next/headers'
import { redirect } from 'next/navigation'

type Props = {
  children: ReactNode
}
const Auth: FC<Props> = ({ children }) => {
  const cookieStore = cookies()
  const auth = cookieStore.get('auth_key' as any)?.value
  if (!auth) {
    const headersList = headers()
    const pathname = headersList.get('x-current-path') || ''
    redirect(`/login?return_url=${pathname}`)
  }
  return children
}

export default Auth
