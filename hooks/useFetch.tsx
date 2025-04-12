import { useState } from 'react'
import axios, { AxiosInstance, AxiosRequestConfig, AxiosRequestHeaders, CreateAxiosDefaults } from 'axios'
import { ApiRoutes } from '@/constants/routes'

const axiosConfig = { baseURL: ApiRoutes.BASE, withCredentials: true }
const instance: AxiosInstance = axios.create(axiosConfig as CreateAxiosDefaults)
instance.interceptors.request.use((req) => {
  req.headers = {
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
