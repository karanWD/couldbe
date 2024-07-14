import { useState } from 'react'
import axios, { AxiosInstance, AxiosRequestConfig, AxiosRequestHeaders, CreateAxiosDefaults } from 'axios'
import { getCookie } from 'cookies-next'
import { toast } from 'react-toastify'

const hashedCookie = process.env.NEXT_PUBLIC_HASH_TOKEN
const axiosConfig = { baseURL: 'http://dev.couldbe.io/api' }
const instance: AxiosInstance = axios.create(axiosConfig as CreateAxiosDefaults)
instance.interceptors.request.use((req) => {
  // const cookie = getCookie(hashedCookie) && JSON.parse(getCookie(hashedCookie) as string)
  const token = '1|tn1U6wy1Sy4QgGlYEWCH7lxhSZFiqoPFhRNzX9qb8b2840b0'
  req.headers = {
    Authorization: `Bearer ${token}`,
  } as AxiosRequestHeaders
  return req
})

instance.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response.status === 401) {
      window.location.href = '/login'
    }
    return err.response
  }
)

const UseFetch = () => {
  const [response, setResponse] = useState({
    response: null,
    loading: false,
  })

  const request = async (axiosParams: AxiosRequestConfig) => {
    try {
      setResponse({
        loading: true,
        response: null,
      })
      const res = (await instance.request(axiosParams)) as any
      if (res?.status < 400) {
        setResponse({
          loading: false,
          response: res.data,
        })
        return Promise.resolve({ data: res?.data, status: res?.status })
      } else {
        toast.error('Sorry we have an error,Please contact with support')
        await setResponse({
          loading: false,
          response: null,
        })
        return Promise.reject(res?.data)
      }
    } catch (e) {
      setResponse({
        loading: false,
        response: null,
      })
      toast.error('Sorry we have an error,Please contact with support')
    }
  }

  return { ...response, request }
}

export default UseFetch
