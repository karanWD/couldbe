'use client'

import NavItem from '@/components/bottomNavigation/navItem/NavItem'
import React, { FC, useEffect } from 'react'
import LoginIcon from '@/components/icons/LoginIcon'
import LogoutIcon from '@/components/icons/LogoutIcon'
import AddIcon from '@/components/icons/AddIcon'
import DocumentsIcon from '@/components/icons/DocumentsIcon'
import HomeIcon from '@/components/icons/HomeIcon'
import FolderIcon from '@/components/icons/FolderIcon'
import { usePathname, useRouter } from 'next/navigation'
import { deleteCookie } from 'cookies-next'
import { UseIsMobile } from '@/hooks/useIsMobile'
import { ApiRoutes } from '@/constants/routes'
import useFetch from '@/hooks/useFetch'

type Props = {
  isAuth: boolean
}

const BottomNavigation: FC<Props> = ({ isAuth }) => {
  const pathname = usePathname()
  const router = useRouter()
  const isMobile = UseIsMobile()
  const { request, response } = useFetch()

  const items = [
    { text: 'New Test', icon: <AddIcon />, href: '/preferences/career' },
    { text: 'Courses', icon: <DocumentsIcon />, href: '/offers' },
    { text: 'Roadmap', icon: <FolderIcon />, href: '/roadmap' },
  ]

  const logoutHandler = () => {
    deleteCookie('authorized')
    window.location.href = '/'
  }

  useEffect(() => {
    if (isAuth) request({ url: ApiRoutes.STATUS })
  }, [isAuth])

  return (
    isMobile && (
      <div className="fixed bottom-0 bg-white w-full border-t border-neutral-200 py-3 px-1 z-10">
        <div className="flex items-center w-full justify-between">
          <NavItem
            text={'Home'}
            icon={<HomeIcon />}
            isActive={pathname === '/' || pathname.startsWith('/')}
            onClick={() => router.push('/')}
          />
          {items.map(
            ({ text, icon, href }, index) =>
              index <= ((response as any)?.step || 0) && (
                <NavItem
                  key={text}
                  text={text}
                  icon={icon}
                  isActive={pathname === href || pathname.startsWith(href)}
                  onClick={text === 'Logout' ? logoutHandler : () => router.push(href)}
                />
              )
          )}
          {isAuth ? (
            <NavItem
              text={'Logout'}
              icon={<LogoutIcon />}
              isActive={pathname === '/logout' || pathname.startsWith('/logout')}
              onClick={logoutHandler}
            />
          ) : (
            <NavItem
              text={'Login'}
              icon={<LoginIcon />}
              isActive={pathname === '/login' || pathname.startsWith('/login')}
              onClick={() => router.push('/login')}
            />
          )}
        </div>
      </div>
    )
  )
}

export default BottomNavigation
