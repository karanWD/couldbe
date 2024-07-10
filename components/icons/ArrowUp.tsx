import { FC } from 'react'
interface Props {
  color?: string
}
const ArrowUp: FC<Props> = ({ color = 'white' }) => {
  return (
    <svg width="100%" height="100%" viewBox="0 0 19 9" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M18.0061 7.98535L9.49392 1.00017L1.00613 8.01497"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
export default ArrowUp
