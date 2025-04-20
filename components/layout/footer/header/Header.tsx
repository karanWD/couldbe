'use client'
import React, { FC, useEffect, useState } from 'react'
import Image from 'next/image'
import useFetch from '@/hooks/useFetch'
import { ApiRoutes } from '@/constants/routes'
import { useRouter } from 'next/navigation'
import { deleteCookie } from 'cookies-next'
import { UseIsMobile } from '@/hooks/useIsMobile'
import HomeIcon from '@/components/icons/HomeIcon'
import AddIcon from '@/components/icons/AddIcon'
import DocumentsIcon from '@/components/icons/DocumentsIcon'
import FolderIcon from '@/components/icons/FolderIcon'
import LogoutIcon from '@/components/icons/LogoutIcon'
import LoginIcon from '@/components/icons/LoginIcon'
import Link from 'next/link'

type Props = {
  isAuthorized: boolean
}

const navigations = [
  { text: 'New Test', icon: <AddIcon />, href: '/preferences/career' },
  { text: 'Courses', icon: <DocumentsIcon />, href: '/offers' },
  { text: 'Roadmap', icon: <FolderIcon />, href: '/roadmap' },
]

const Header: FC<Props> = ({ isAuthorized }) => {
  const { request, response } = useFetch()
  const router = useRouter()
  const [auth, setAuth] = useState<boolean>(isAuthorized)

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
        url: ApiRoutes.STATUS,
      })
    }
  }, [auth])

  return (
    <div className="flex items-center justify-between max-w-full w-[90%] 2xl:w-[80%] py-6 2xl:py-16 mx-auto">
      <Image src="/images/logo.svg" alt="couldbe logo" width={isMobile ? 94 : 150} height={isMobile ? 17 : 50} />
      {!isMobile && (
        <div className="flex items-center gap-x-2">
          {auth ? (
            navigations.map((item, index) => {
              return (
                index <= (response as any)?.step && (
                  <Link
                    key={'NAV_ITEM_' + index}
                    className="text-[14px] lg:text-[16px] 2xl:text-[20px] font-[CodecPro-News] text-neutral-700  py-1.5 px-4 lg:px-8"
                    href={item.href}>
                    {item.text}
                  </Link>
                )
              )
            })
          ) : (
            <Link
              className="text-[14px] lg:text-[16px] 2xl:text-[20px] font-[CodecPro-News] text-white bg-indigo-800 rounded-3xl  py-1.5 px-4 lg:px-8"
              href={'/preferences/career'}>
              {'Get Started'}
            </Link>
          )}
          <div
            className="cursor-pointer rounded-[37px] text-[14px] lg:text-[16px] 2xl:text-[20px] font-[CodecPro-News] border border-[rgba(0, 0, 0, 0.3)] bg-white px-4 lg:px-8 py-1.5"
            onClick={authHandler}>
            {auth ? 'Logout' : 'Login'}
          </div>
        </div>
      )}
    </div>
  )
}
export default Header
