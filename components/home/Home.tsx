import { FC } from 'react'
import Hero from './hero/Hero'
import Introduction from './introduction/Introduction'
import Guide from './guide/Guide'
import Faq from './faq/Faq'
import Banner from './banner/Banner'
import Video from '@/components/home/video/Video'

const Home: FC = () => {
  return (
    <div className="flex flex-col items-center justify-between gap-y-16 w-full">
      <Hero />
      <Introduction />
      <Video />
      <Guide />
      <Faq />
      <Banner />
    </div>
  )
}
export default Home
