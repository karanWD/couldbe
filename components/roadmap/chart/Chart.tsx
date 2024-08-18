'use client'
import { FC } from 'react'
import { Chart as ChartJS, PointElement, LineElement, Tooltip, Legend, RadialLinearScale, Filler } from 'chart.js'
import { Radar } from 'react-chartjs-2'
import { GraphDataType } from '../types'

interface Props {
  data: GraphDataType
}
const Chart: FC<Props> = ({ data }) => {
  // chart config
  ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend, {
    id: 'noData',
    afterDraw: (chart) => {
      const ctx = chart.ctx
      ctx.save()
      ctx.textAlign = 'center'
      //   ctx.textBaseline = 'bottom'

      ctx.restore()
    },
  })
  const chartData = {
    labels: ['Problem solving', 'Self management', 'Working with people', 'AI & technology use'],
    datasets: [
      {
        label: 'What it couldbe',
        data: [
          data?.future?.PROBLEM_SOLVING,
          data?.future?.SELF_MANAGMENT,
          data?.future?.LEADER_SHIP_AND_PEPPLE_SKILLS,
          data?.future?.AI_AND_TECH,
        ],
        backgroundColor: 'rgba(18, 50, 240, 0.28)',
        borderColor: '#1232F0',
        borderWidth: 1,
      },
      {
        label: 'Your result',
        data: [
          data?.now?.PROBLEM_SOLVING,
          data?.now?.SELF_MANAGMENT,
          data?.now?.LEADER_SHIP_AND_PEPPLE_SKILLS,
          data?.now?.AI_AND_TECH,
        ],
        backgroundColor: 'rgba(242, 93, 27, 0.28)',
        borderColor: '#F25D1B',
        borderWidth: 1,
      },
      {
        label: 'Average of results',
        data: [
          data?.avrage?.PROBLEM_SOLVING,
          data?.avrage?.SELF_MANAGMENT,
          data?.avrage?.LEADER_SHIP_AND_PEPPLE_SKILLS,
          data?.avrage?.AI_AND_TECH,
        ],
        backgroundColor: 'rgba(156, 155, 155, 0.5)',
        borderColor: '#9C9B9B',
        borderWidth: 1,
      },
    ],
  }

  const options: any = {
    scales: {
      r: {
        ticks: {
          min: 0,
          max: 15,
          stepSize: 2,
          backdropPadding: {
            x: 10,
            y: 4,
          },
        },
      },
    },
  }

  return (
    <div className="w-full px-2 lg:px-5 py-8 flex flex-col items-center gap-y-2">
      <span className="text-[24px] font-[CodecPro-Bold] text-[#1232F0]">Discovery phase result</span>
      <span className="text-[20px] font-[CodecPro-Thin] text-[#000000]">Make your skills wider</span>
      <Radar data={chartData} options={options} />
    </div>
  )
}
export default Chart
