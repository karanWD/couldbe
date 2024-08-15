import React, { FC, ReactNode } from 'react'

type Props = {
  children: ReactNode
  open: boolean
  closeHandler: () => void
}
const DrawerHandler: FC<Props> = ({ children, open, closeHandler }) => {
  return (
    <div className={`w-full h-full fixed bottom-0 left-0 right-0 overflow-hidden ${open ? 'z-30' : 'z-[-1]'}`}>
      <div
        className={`z-30 w-full h-full bg-black/50 absolute bottom-0 right-0 left-0 ${open ? 'block' : 'hidden'}`}
        onClick={closeHandler}></div>
      <div
        className={`absolute w-full lg:max-w-[600px] bottom-0 right-0 left-0 lg:bottom-1/2 lg:left-1/2  lg:translate-y-1/2 lg:-translate-x-1/2 z-40  overflow-y-auto transition-transform  ${open ? 'translate-y-0 lg:block' : 'translate-y-full lg:hidden'}`}>
        {children}
      </div>
    </div>
  )
}

export default DrawerHandler
