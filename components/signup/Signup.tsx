'use client'
import React, { FC, useEffect, useMemo, useRef, useState } from 'react'
import Image from 'next/image'
import Input from '@/components/ui/input/Input'
import EyeIcon from '@/components/icons/EyeIcon'
import Button from '@/components/ui/button/Button'
import axios from 'axios'
import { ApiRoutes } from '@/constants/routes'
import { setCookie } from 'cookies-next'
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'
import Dropdown from '@/components/ui/dropdown/Dropdown'
import { Months } from '@/constants/Dates'
import { Controller, useForm } from 'react-hook-form'
import Link from 'next/link'
import { Countries } from '@/constants/countries'

type Props = {
  pageParams: any
}
const Signup: FC<Props> = ({ pageParams }) => {
  const router = useRouter()
  const [isHide, setHide] = useState(true)
  const [loading, setLoading] = useState(false)

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm()

  const days = useMemo(() => {
    const res = []
    for (let i = 1; i < 32; i++) {
      res.push({ title: i, value: ('0' + i).slice(-2) })
    }
    return res
  }, [])

  const months = useMemo(() => {
    const res = []
    for (const item in Months) {
      res.push({
        title: Months[item as keyof typeof Months],
        value: ('0' + (+item + 1)).slice(-2),
      })
    }
    return res
  }, [])

  const years = useMemo(() => {
    const res = []
    const now = new Date().getFullYear()
    for (let i = now - 5; i > now - 100; i--) {
      res.push({ title: i, value: i })
    }
    return res
  }, [])

  const passHandler = () => {
    setHide((prev) => !prev)
  }
  const signupHandler = (formdata: any) => {
    setLoading(true)
    const data = {
      ...formdata,
      place_of_residence: formdata.place_of_residence?.title,
      password_confirmation: formdata.password,
      birth_date: formdata.birth_day.value + '-' + formdata.birth_month.value + '-' + formdata.birth_year.value,
      sex: formdata.gender?.value,
    }
    delete data.birth_day
    delete data.birth_month
    delete data.birth_year
    delete data.gender

    axios
      .post(ApiRoutes.BASE + ApiRoutes.REGISTER, data)
      .then((res) => {
        setCookie('auth_key', res.data.data.authentication_token)
        router.push(pageParams?.return_url ?? '/')
      })
      .catch((e) => {
        toast.error(e?.response?.data?.message)
      })
      .finally(() => setLoading(false))
  }

  return (
    <section className="flex items-center h-screen w-full">
      <div className="h-full flex flex-col flex-1 justify-center ">
        <div className="w-full max-w-screen-sm lg:max-w-screen-sm mx-auto flex flex-col gap-4 p-4 lg:p-0 ">
          <div className="flex flex-col">
            <h5 className="font-[CodecPro-Bold] text-[32px]">Get started with couldbe</h5>
            <h6 className="font-[CodecPro-Light] text-[20px]">Envision Your Success toward Your Future Success</h6>
          </div>
          <form action="" onSubmit={handleSubmit(signupHandler)}>
            <div className="w-full flex flex-col gap-3">
              <div className="w-full flex gap-3">
                <div className="flex flex-col flex-1 gap-2">
                  <label htmlFor="" className={errors?.first_name ? 'text-red-500' : ''}>
                    First Name
                    {errors?.first_name?.message && <span className="text-red-500 text-xs"> (required)</span>}
                  </label>
                  <Controller
                    name="first_name"
                    control={control}
                    rules={{ required: 'Enter your first name' }}
                    render={({ field }) => <Input type={'text'} name={'first_name'} onChange={field.onChange} />}
                  />
                </div>
                <div className="flex flex-col flex-1 gap-2">
                  <label htmlFor="" className={errors?.last_name ? 'text-red-500' : ''}>
                    Last Name
                    {errors?.last_name?.message && <span className="text-red-500 text-xs"> (required)</span>}
                  </label>

                  <Controller
                    name="last_name"
                    control={control}
                    rules={{ required: 'Enter your last name' }}
                    render={({ field }) => (
                      <>
                        <Input type={'text'} name={'last_name'} onChange={field.onChange} />
                      </>
                    )}
                  />
                </div>
              </div>
              <div className="w-full flex flex-col  gap-2">
                <label htmlFor="" className={errors?.last_name ? 'text-red-500' : ''}>
                  Birth Date
                  {(errors?.birth_day || errors?.birth_month || errors?.birth_year) && (
                    <span className="text-red-500 text-xs"> (Enter your birth date in correct format) </span>
                  )}
                </label>
                <div className="flex gap-3 w-full">
                  <div className="flex-1">
                    <Controller
                      name="birth_day"
                      control={control}
                      rules={{ required: true }}
                      render={({ field }) => (
                        <Dropdown
                          value={field?.value?.value}
                          title={field.value ? field.value.title : 'Day'}
                          onClick={(obj) => field.onChange(obj)}
                          options={days}
                        />
                      )}
                    />
                  </div>
                  <div className="flex-1">
                    <Controller
                      name="birth_month"
                      control={control}
                      rules={{ required: true }}
                      render={({ field }) => (
                        <Dropdown
                          value={field?.value?.value}
                          title={field.value ? field.value.title : 'Month'}
                          onClick={(obj) => field.onChange(obj)}
                          options={months}
                        />
                      )}
                    />
                  </div>
                  <div className="flex-1">
                    <Controller
                      name="birth_year"
                      control={control}
                      rules={{ required: true }}
                      render={({ field }) => (
                        <Dropdown
                          value={field?.value?.value}
                          title={field.value ? field.value.title : 'Year'}
                          onClick={(obj) => field.onChange(obj)}
                          options={years}
                        />
                      )}
                    />
                  </div>
                </div>
              </div>
              <div className="w-full flex gap-3">
                <div className="flex flex-col flex-1 gap-2 w-[50%]">
                  <label htmlFor="" className={errors?.place_of_residence ? 'text-red-500' : ''}>
                    Place of residence
                    {errors?.place_of_residence && <span className="text-red-500 text-xs"> (required) </span>}
                  </label>
                  <Controller
                    name="place_of_residence"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                      <Dropdown
                        value={field.value?.value}
                        title={field.value ? field.value.title : 'select your country'}
                        onClick={(obj) => field.onChange(obj)}
                        options={Countries}
                      />
                    )}
                  />
                </div>
                <div className="flex flex-col flex-1 gap-2 w-[50%]">
                  <label htmlFor="" className={errors?.gender ? 'text-red-500' : ''}>
                    Gender
                    {errors?.gender && <span className="text-red-500 text-xs"> (required) </span>}
                  </label>
                  <Controller
                    name="gender"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                      <Dropdown
                        value={field.value?.value}
                        title={field.value ? field.value.title : 'select your gender'}
                        onClick={(obj) => field.onChange(obj)}
                        options={[
                          { title: 'Male', value: 1 },
                          { title: 'Female', value: 2 },
                          { title: 'Prefer not to say', value: 3 },
                        ]}
                      />
                    )}
                  />
                </div>
              </div>

              <div className="flex flex-col  gap-2">
                <label htmlFor="" className={errors?.email ? 'text-red-500' : ''}>
                  Email
                  {errors?.email && <span className="text-red-500 text-xs"> (required) </span>}
                </label>
                <Controller
                  name="email"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => <Input type={'email'} name={'email'} onChange={field.onChange} />}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="" className={errors?.password ? 'text-red-500' : ''}>
                  Password
                  {errors?.password && <span className="text-red-500 text-xs"> (required) </span>}
                </label>
                <div className="relative ">
                  <Controller
                    name="password"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                      <Input
                        className="w-full"
                        type={isHide ? 'password' : 'text'}
                        name={'password'}
                        onChange={field.onChange}
                      />
                    )}
                  />
                  <div
                    className="w-8 h-6 absolute top-1/2 right-1.5 -translate-y-1/2 cursor-pointer"
                    onClick={passHandler}>
                    <EyeIcon />
                  </div>
                </div>
              </div>
              <Button disabled={loading} type={'submit'} format={'fill'} variant={'secondary'} className="w-full mt-4">
                {loading ? '...' : 'Signup'}
              </Button>
              <div>
                {`Already have an account? `}
                <Link className="text-secondary font-bold mx-2" href={'/login'}>
                  Login
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="h-full flex flex-1 bg-neutral-200">
        <div className="h-full flex flex-1 relative">
          <Image src="/images/login.png" alt="couldbe logo" layout="fill" objectFit="cover" />
        </div>
      </div>
    </section>
  )
}

export default Signup
