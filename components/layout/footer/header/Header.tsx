'use client'
import { FC, useEffect, useState } from 'react'
import Image from 'next/image'
import useFetch from '@/hooks/useFetch'
import { ApiRoutes } from '@/constants/routes'
import { useRouter } from 'next/navigation'
import { deleteCookie } from 'cookies-next'
import { UseIsMobile } from '@/hooks/useIsMobile'

type Props = {
  isAuthorized: boolean
}

const Statuses = {
  default: {
    title: 'Get Started',
    link: '/preferences/career',
  },
  personal_preferences: {
    title: 'Continue',
    link: '/preferences/career',
  },
  exam: {
    title: 'Continue',
    link: '/questions/1',
  },
  sugesstions: {
    title: 'Your Roadmap',
    link: '/roadmap',
  },
}

type Steps = 'default' | 'personal_preferences' | 'exam' | 'sugesstions'

const Header: FC<Props> = ({ isAuthorized }) => {
  const { request } = useFetch()
  const router = useRouter()

  // to handle authorization
  const [auth, setAuth] = useState<boolean>(isAuthorized)
  // to handle header buttons text
  const [status, setStatus] = useState<string>('')

  const isMobile = UseIsMobile()

  const authHandler = () => {
    if (auth) {
      deleteCookie('authorized')
      setAuth(false)
    } else {
      router.push('/login')
    }
  }

  useEffect(() => {
    if (auth) {
      request({
        url: ApiRoutes.PWD,
      }).then((res: any) => {
        setStatus(res.data.next_state as Steps)
      })
    }
  }, [auth])

  return (
    <div className="flex items-center justify-between max-w-full w-[90%] 2xl:w-[80%] py-6 2xl:py-16 mx-auto">
      <Image src="/images/logo.svg" alt="couldbe logo" width={isMobile ? 94 : 150} height={isMobile ? 17 : 50} />
      <div className="flex items-center gap-x-2">
        <div
          className="cursor-pointer rounded-[37px] text-[14px] lg:text-[16px] 2xl:text-[20px] font-[CodecPro-News] border border-[rgba(0, 0, 0, 0.3)] bg-white px-4 lg:px-8 py-1.5"
          onClick={authHandler}>
          {auth ? 'Logout' : 'Login'}
        </div>
        <a
          className="rounded-[37px] text-[14px] lg:text-[16px] 2xl:text-[20px] font-[CodecPro-News] text-white bg-[#2C2E86] py-1.5 px-4 lg:px-8"
          href={auth ? Statuses[status as Steps]?.link : Statuses.default.link}>
          {auth ? Statuses[status as Steps]?.title ?? '...' : Statuses.default.title}
        </a>
      </div>
    </div>
  )
}
export default Header
