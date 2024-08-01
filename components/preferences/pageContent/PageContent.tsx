import React, { FC, useState } from 'react'
import Chips from '@/components/ui/chips/Chips'
import SubmitHandler from '@/components/preferences/submitHandler/SubmitHandler'
import { usePathname, useRouter } from 'next/navigation'
import useFetch from '@/hooks/useFetch'
import { ApiRoutes } from '@/constants/routes'
import { toast } from 'react-toastify'

const Routes = ['career', 'budget', 'experience', 'degree', 'duration', 'format']
type Props = {
  options: { title: string; value: number }[]
  name: string
}
const PageContent: FC<Props> = ({ options, name }) => {
  const fullPath = usePathname()
  const paths = fullPath.split('/')
  const path = paths[paths.length - 1]
  const nextIndex = Routes.findIndex((item) => item === path) + 1
  const router = useRouter()
  const [selected, setSelected] = useState<number | null>(null)
  const { request } = useFetch()
  const { request: submitReq } = useFetch()
  const submitHandler = () => {
    if (selected) {
      const values = JSON.parse(sessionStorage.getItem('preferences') as any)
      const updated = { ...values, [name]: selected }
      sessionStorage.setItem('preferences', JSON.stringify(updated))
      if (path === 'format') {
        request({
          url: ApiRoutes.PREFERENCE_STORE,
          method: 'POST',
        }).then((res) => {
          submitReq({
            url: ApiRoutes.PREFERENCE_STORE + '/' + res?.data?.data?.id,
            method: 'PUT',
            data: updated,
          }).then(() => router.push('/questions/1'))
        })
      } else {
        router.push('/preferences/' + Routes[nextIndex])
      }
    }
  }

  return (
    <>
      <section className={'flex flex-1 w-full max-w-screen-lg xl:max-w-screen-xl mx-auto'}>
        <section className={'flex gap-4 h-fit '}>
          {options.map((item, index) => (
            <Chips
              key={'CHIPS_ITEM_' + index}
              clickHandler={() => setSelected(item.value)}
              checked={item.value === selected}>
              {item.title}
            </Chips>
          ))}
        </section>
      </section>
      <SubmitHandler disabled={!selected} onClick={submitHandler} />
    </>
  )
}

export default PageContent
