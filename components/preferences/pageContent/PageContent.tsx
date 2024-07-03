import React, { FC, useState } from 'react'
import Chips from '@/components/ui/chips/Chips'
import SubmitHandler from '@/components/preferences/submitHandler/SubmitHandler'
import { usePathname, useRouter } from 'next/navigation'

const Routes = ['career', 'budget', 'experience', 'degree', 'duration', 'format', 'questions']
type Props = {
  options: string[]
  name: string
}
const PageContent: FC<Props> = ({ options, name }) => {
  const fullPath = usePathname()
  const paths = fullPath.split('/')
  const path = paths[paths.length - 1]
  const nextIndex = Routes.findIndex((item) => item === path) + 1
  const router = useRouter()
  const [selected, setSelected] = useState<string | null>(null)
  const submitHandler = () => {
    if (selected) {
      const values = JSON.parse(sessionStorage.getItem('preferences') as any)
      sessionStorage.setItem('preferences', JSON.stringify({ ...values, [name]: selected }))
      router.push('/preferences/' + Routes[nextIndex])
    }
  }

  return (
    <>
      <section className={'flex flex-1 w-full max-w-[1526px] mx-auto'}>
        <section className={'flex gap-4 h-fit '}>
          {options.map((item, index) => (
            <Chips key={'CHIPS_ITEM_' + index} clickHandler={() => setSelected(item)} checked={item === selected}>
              {item}
            </Chips>
          ))}
        </section>
      </section>
      <SubmitHandler disabled={!selected} onClick={submitHandler} />
    </>
  )
}

export default PageContent
