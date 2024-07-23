'use client'
import { FC } from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  //   LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  RadialLinearScale,
  Filler,
} from 'chart.js'
import { Radar } from 'react-chartjs-2'
const Chart: FC = () => {
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
  const data = {
    labels: ['Problem solving', 'Self management', 'Working with people', 'AI & technology use'],
    datasets: [
      {
        label: '# of Votes',
        data: [2, 9, 3, 5],
        backgroundColor: 'rgba(18, 50, 240, 0.28)',
        borderColor: '#1232F0',
        borderWidth: 1,
      },
    ],
  }

  const options: any = () => {
    return {
      layout: {
        padding: {
          left: 50,
        },
      },
      scales: {
        r: {
          ticks: {
            backdropPadding: {
              x: 10,
              y: 4,
            },
          },
        },
      },

      legend: {
        labels: {
          position: 'bottom',
        },
      },
    }
  }
  return (
    <div className="w-full h-[500px]">
      <Radar data={data} options={options} />
    </div>
  )
}
export default Chart
