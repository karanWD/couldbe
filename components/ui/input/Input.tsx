import React, { FC, InputHTMLAttributes } from 'react'

const Input: FC<InputHTMLAttributes<HTMLInputElement>> = (props) => {
  return <input {...props} className={`border border-black/[0.3] rounded-md p-3 ${props.className}`} />
}

export default Input
