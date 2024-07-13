'use client'
import Home from '@/components/home/Home'
import Header from '@/components/layout/footer/header/Header'
import Footer from '@/components/layout/footer/Footer'

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <div className="z-10 w-full ">
        <Header />
        <Home />
        <Footer />
      </div>
    </main>
  )
}
