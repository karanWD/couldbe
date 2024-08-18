import Home from '@/components/home/Home'
import Header from '@/components/layout/footer/header/Header'
import Footer from '@/components/layout/footer/Footer'
import { cookies } from 'next/headers'
import Head from 'next/head'

export default function HomePage() {
  const cookieStore = cookies()
  const isAuth = !!cookieStore.get('auth_key' as any)?.value
  return (
    <>
      <Head>
        <link rel="icon" type="image/x-icon" href="/public/images/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-between ">
        <div className="z-10 w-full flex flex-col gap-12">
          <Header isAuthorized={isAuth} />
          <Home />
          <Footer />
        </div>
      </main>
    </>
  )
}
