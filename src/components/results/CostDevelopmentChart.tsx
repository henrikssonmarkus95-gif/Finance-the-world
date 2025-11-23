import { useMemo } from 'react'
import Chart from 'react-apexcharts'
import { ApexOptions } from 'apexcharts'
import Card from '../shared/Card'
import { COLORS, formatCurrency } from '../../data/constants'

export default function CostDevelopmentChart() {
  const options: ApexOptions = useMemo(() => ({
    chart: {
      type: 'bar',
      height: 350,
      toolbar: { show: false },
      fontFamily: 'Inter, sans-serif'
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '65%',
      }
    },
    colors: [COLORS.primary, COLORS.text],
    dataLabels: { enabled: false },
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
      categories: ['Råvaror', 'Externa kostnader', 'Personal', 'Avskrivningar'],
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
    legend: {
      position: 'top',
      fontSize: '14px'
    },
    tooltip: {
      y: { formatter: formatCurrency }
    }
  }), [])

  const series = useMemo(() => [
    { name: '2024', data: [119150, 363041, 823090, 69840] },
    { name: '2023', data: [5500, 131568, 10180, 37800] }
  ], [])

  return (
    <Card title="Kostnadsutveckling" subtitle="Jämförelse 2024 vs 2023">
      <div className="px-6 pb-6">
        <Chart options={options} series={series} type="bar" height={350} />
      </div>
    </Card>
  )
}
