import { useMemo } from 'react'
import Chart from 'react-apexcharts'
import { ApexOptions } from 'apexcharts'
import Card from '../shared/Card'
import { COLORS } from '../../data/constants'

export default function KPIDevelopmentChart() {
  const options: ApexOptions = useMemo(() => ({
    chart: {
      type: 'line',
      height: 300,
      toolbar: { show: false },
      fontFamily: 'Inter, sans-serif'
    },
    stroke: {
      curve: 'smooth',
      width: 3,
      colors: [COLORS.primary, COLORS.text]
    },
    markers: {
      size: 6,
      colors: [COLORS.primary, COLORS.text],
      strokeColors: COLORS.white,
      strokeWidth: 2
    },
    grid: {
      borderColor: COLORS.border,
      strokeDashArray: 4
    },
    xaxis: {
      categories: ['2023', '2024'],
      labels: {
        style: { colors: COLORS.text, fontSize: '12px' }
      }
    },
    yaxis: {
      labels: {
        formatter: (value: number) => value + '%',
        style: { colors: COLORS.text, fontSize: '12px' }
      }
    },
    legend: {
      position: 'top',
      fontSize: '14px'
    },
    tooltip: {
      y: {
        formatter: (value: number) => value + '%'
      }
    }
  }), [])

  const series = useMemo(() => [
    { name: 'Soliditet (%)', data: [16.1, 50.0] },
    { name: 'Kassalikviditet (%)', data: [83.3, 98.3] }
  ], [])

  return (
    <Card title="Nyckeltalsutveckling" subtitle="Soliditet och kassalikviditet">
      <div className="px-6 pb-6">
        <Chart options={options} series={series} type="line" height={300} />
      </div>
    </Card>
  )
}
