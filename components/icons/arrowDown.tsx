import { FC } from 'react'
interface Props {
  color?: string
}
const ArrowDown: FC<Props> = ({ color = 'white' }) => {
  return (
    <svg width="100%" height="100%" viewBox="0 0 19 9" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 1L9.5 8L18 1" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
export default ArrowDown
