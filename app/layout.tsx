import './globals.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import DeviceDetector from '@/context/deviceDetector'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="/images/favicon.ico" />
      </head>
      <body>
        <DeviceDetector>
          <ToastContainer theme={'light'} autoClose={3000} closeOnClick={true} position={'top-left'} />
          {children}
        </DeviceDetector>
      </body>
    </html>
  )
}
