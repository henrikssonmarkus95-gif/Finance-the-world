import { useMemo } from 'react'
import Chart from 'react-apexcharts'
import { ApexOptions } from 'apexcharts'
import Card from '../shared/Card'
import { COLORS, formatCurrency } from '../../data/constants'

export default function QuarterlyGrowthChart() {
  const options: ApexOptions = useMemo(() => ({
    chart: {
      type: 'bar',
      height: 350,
      toolbar: { show: false },
      fontFamily: 'Inter, sans-serif'
    },
    plotOptions: {
      bar: {
        columnWidth: '60%',
      }
    },
    colors: [COLORS.primary],
    dataLabels: {
      enabled: true,
      formatter: (val: number) => (val / 1000).toFixed(0) + 'k',
      offsetY: -20,
      style: {
        fontSize: '12px',
        colors: [COLORS.text]
      }
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    grid: {
      borderColor: COLORS.border,
      strokeDashArray: 4
    },
    xaxis: {
      categories: ['Q4 2024', 'Q1 2025', 'Q2 2025', 'Q3 2025', 'Q4 2025 (prel)'],
      labels: {
        style: { colors: COLORS.text, fontSize: '12px' }
      }
    },
    yaxis: {
      labels: {
        formatter: formatCurrency,
        style: { colors: COLORS.text, fontSize: '12px' }
      }
    },
    tooltip: {
      y: { formatter: formatCurrency }
    }
  }), [])

  const series = useMemo(() => [{
    name: 'Omsättning',
    data: [458912, 1764910, 2993346, 2709316, 1925303]
  }], [])

  return (
    <Card title="Kvartalsutveckling" subtitle="Omsättning per kvartal">
      <div className="px-6 pb-6">
        <Chart options={options} series={series} type="bar" height={350} />
      </div>
    </Card>
  )
}
