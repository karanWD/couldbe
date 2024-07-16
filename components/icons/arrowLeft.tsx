import { FC } from 'react'
interface Props {
  color?: string
}
const ArrowLeft: FC<Props> = () => {
  return (
    <svg width="100%" height="100%" viewBox="0 0 25 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M22.52 42L1.99994 21.7615L22.52 1.52291"
        stroke="black"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
export default ArrowLeft
