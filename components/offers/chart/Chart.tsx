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
          Math.min(data?.couldbe?.problemSolving, 15),
          Math.min(data?.couldbe?.selfManagement, 15),
          Math.min(data?.couldbe?.leadership, 15),
          Math.min(data?.couldbe?.technology, 15),
        ],
        backgroundColor: 'rgba(18, 50, 240, 0.28)',
        borderColor: '#1232F0',
        borderWidth: 1,
      },
      {
        label: 'Your result',
        data: [
          Math.min(data?.current?.problemSolving, 15),
          Math.min(data?.current?.selfManagement, 15),
          Math.min(data?.current?.leadership, 15),
          Math.min(data?.current?.technology, 15),
        ],
        backgroundColor: 'rgba(242, 93, 27, 0.28)',
        borderColor: '#F25D1B',
        borderWidth: 1,
      },
      {
        label: 'Average of results',
        data: [
          Math.min(data?.average?.problemSolving, 15),
          Math.min(data?.average?.selfManagement, 15),
          Math.min(data?.average?.leadership, 15),
          Math.min(data?.average?.technology, 15),
        ],
        backgroundColor: 'rgba(156, 155, 155, 0.5)',
        borderColor: '#9C9B9B',
        borderWidth: 1,
      },
    ],
  }

  const options: any = {
    scale: {
      ticks: {
        min: 0,
        max: 16,
        stepSize: 2,
        showLabelBackdrop: false,
        backdropColor: 'rgba(203, 197, 11, 1)',
      },
      angleLines: {
        color: 'rgba(255, 255, 255, .3)',
        lineWidth: 1,
      },
      gridLines: {
        color: 'rgba(255, 255, 255, .3)',
        circular: true,
      },
    },

    legend: {
      labels: {
        position: 'bottom',
      },
    },
  }

  return (
    <div className="w-full px-2 lg:px-5 py-8 flex flex-col items-center gap-y-2 lg:gap-y-8">
      <span className="text-[24px] font-[CodecPro-Bold] text-[#1232F0]">Discovery phase result</span>
      <span className="text-[20px] font-[CodecPro-Thin] text-[#000000]">Make your skills wider</span>
      <Radar data={chartData} options={options} className={'chart-container'} />
    </div>
  )
}
export default Chart
