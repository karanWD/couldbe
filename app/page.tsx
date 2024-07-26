import Home from '@/components/home/Home'
import Header from '@/components/layout/footer/header/Header'
import Footer from '@/components/layout/footer/Footer'
import { cookies } from 'next/headers'

export default function HomePage() {
  const cookieStore = cookies()
  const isAuth = !!cookieStore.get('auth_key' as any)?.value
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <div className="z-10 w-full ">
        <Header isAuthorized={isAuth} />
        <Home />
        <Footer />
      </div>
    </main>
  )
}
