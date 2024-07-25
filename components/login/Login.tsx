'use client'
import React, { FC, FormEventHandler, useRef, useState } from 'react'
import Input from '@/components/ui/input/Input'
import Button from '@/components/ui/button/Button'
import { ApiRoutes } from '@/constants/routes'
import Image from 'next/image'
import axios from 'axios'
import { toast } from 'react-toastify'
import { setCookie } from 'cookies-next'
import EyeIcon from '@/components/icons/EyeIcon'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

type Props = {
  pageParams: any
}
const Login: FC<Props> = ({ pageParams }) => {
  const router = useRouter()
  const [isHide, setHide] = useState(true)
  const [loading, setLoading] = useState(false)
  const formRef = useRef<{ email: string; password: string }>({ email: '', password: '' })
  const changeHandler = (e: { target: HTMLInputElement }) => {
    const key = e.target.name as 'email' | 'password'
    formRef.current[key] = e.target.value
  }
  const passHandler = () => {
    setHide((prev) => !prev)
  }
  const loginHandler = (e: any) => {
    e.preventDefault()
    setLoading(true)
    axios
      .post(ApiRoutes.BASE + ApiRoutes.LOGIN, formRef.current)
      .then((res) => {
        setCookie('auth_key', res.data.data.authentication_token)
        router.push(pageParams?.return_url ?? '/preferences/career')
      })
      .catch((e) => {
        toast.error(e?.response?.data?.errors[0] || e?.response?.data?.errors?.email[0])
      })
      .finally(() => setLoading(false))
  }

  return (
    <section className="flex items-center h-screen w-full">
      <div className="h-full flex flex-1 relative">
        <Image src="/images/login.png" alt="couldbe logo" layout="fill" objectFit="cover" />
      </div>
      <div className="h-full flex flex-col flex-1 justify-center ">
        <div className="max-w-screen-md mx-auto flex flex-col  gap-10">
          <div className="flex flex-col gap-2.5">
            <h5 className="font-[CodecPro-Bold] text-[32px]">Welcome Back!</h5>
            <h6 className="font-[CodecPro-Light] text-[20px]">Envision your success toward your future success</h6>
          </div>
          <form action="" onSubmit={loginHandler as FormEventHandler<HTMLFormElement>}>
            <div className="flex flex-col gap-5">
              <div className="flex flex-col  gap-4">
                <label htmlFor="">Email</label>
                <Input type={'email'} name={'email'} onChange={changeHandler} />
              </div>
              <div className="flex flex-col gap-4">
                <label htmlFor="">Password</label>
                <div className="relative ">
                  <Input
                    type={isHide ? 'password' : 'text'}
                    className="w-full"
                    name={'password'}
                    onChange={changeHandler}
                  />
                  <div
                    className="w-8 h-6 absolute top-1/2 right-1.5 -translate-y-1/2 cursor-pointer"
                    onClick={passHandler}>
                    <EyeIcon />
                  </div>
                </div>
              </div>
              <Button disabled={loading} type={'submit'} format={'fill'} variant={'secondary'}>
                {loading ? '...' : 'Login'}
              </Button>
              <div>
                {` Don't have an account yet? `}{' '}
                <Link className="text-secondary font-bold mx-2" href={`/signup?return_url=${pageParams?.return_url}`}>
                  Sign up
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Login
