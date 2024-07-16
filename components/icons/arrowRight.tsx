import { FC } from 'react'
interface Props {
  color?: string
}
const ArrowRight: FC<Props> = () => {
  return (
    <svg width="100%" height="100%" viewBox="0 0 25 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M2 42L22.5201 21.7615L2 1.52291"
        stroke="black"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
export default ArrowRight
