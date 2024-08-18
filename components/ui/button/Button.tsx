import React, { ButtonHTMLAttributes, FC } from 'react'

interface ButtonType extends ButtonHTMLAttributes<HTMLButtonElement> {
  format: 'fill' | 'outline'
  variant: 'primary' | 'secondary' | 'light'
  size?: 'sm' | 'md' | 'lg'
}

const Button: FC<ButtonType> = ({ children, format, variant, size = 'md', ...props }) => {
  const Variants = {
    primary: { bg: 'bg-primary', color: 'text-primary', border: 'border-primary' },
    secondary: { bg: 'bg-secondary', color: 'text-secondary', border: 'border-secondary' },
    light: { bg: 'bg-neutral-200', color: 'text-neutral-500', border: 'border-neutral-500' },
  }
  const bg = format === 'fill' ? Variants[variant].bg : 'bg-transparent'
  const color = format === 'fill' ? 'text-white' : Variants[variant].color
  const padding = size === 'sm' ? 'px-4 py-1' : size === 'md' ? 'px-5 py-2.5' : 'px-6 py-3.5'
  const border = format === 'fill' ? '' : 'border ' + Variants[variant].border
  const fontSize = size === 'sm' ? 'text-sm' : size === 'md' ? 'text-base' : 'text-xl'

  return (
    <button
      {...props}
      className={`${bg} ${color} ${border} ${padding} ${fontSize} disabled:opacity-50 disabled:pointer-events-none font-medium rounded-full text-center flex items-center justify-center ${props.className}`}>
      <>{children}</>
    </button>
  )
}

export default Button
