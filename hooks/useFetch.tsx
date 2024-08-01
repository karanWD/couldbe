import { useState } from 'react'
import axios, { AxiosInstance, AxiosRequestConfig, AxiosRequestHeaders, CreateAxiosDefaults } from 'axios'
import { getCookie } from 'cookies-next'
import { toast } from 'react-toastify'

// const hashedCookie = process.env.NEXT_PUBLIC_HASH_TOKEN
const hashedCookie = 'auth_key'
const axiosConfig = { baseURL: 'https://api.couldbe.io/api' }
const instance: AxiosInstance = axios.create(axiosConfig as CreateAxiosDefaults)
instance.interceptors.request.use((req) => {
  const token = getCookie(hashedCookie)
  req.headers = {
    Authorization: `Bearer ${token}`,
    Accept: 'application/json',
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
    }
  }

  return { ...response, request }
}

export default UseFetch
