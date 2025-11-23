import { useMemo } from 'react'
import Chart from 'react-apexcharts'
import { ApexOptions } from 'apexcharts'
import Card from '../shared/Card'
import { MONTH_LABELS, PERIOD_LABEL, COLORS, formatCurrency } from '../../data/constants'

export default function WaterfallChart() {
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
        colors: {
          ranges: [
            { from: -1000000, to: 0, color: COLORS.text },
            { from: 0, to: 1000000, color: COLORS.primary }
          ]
        }
      }
    },
    dataLabels: { enabled: false },
    grid: {
      borderColor: COLORS.border,
      strokeDashArray: 4
    },
    xaxis: {
      categories: MONTH_LABELS as unknown as string[],
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
    name: 'Kumulativt kassaflöde',
    data: [73574, 68837, -160573, -172784, -254965, 50503,
           -261007, -101559, 316767, 185241, 136948, -320786, 386985]
  }], [])

  return (
    <Card title="Kumulativt kassaflöde" subtitle={PERIOD_LABEL}>
      <div className="px-6 pb-6">
        <Chart options={options} series={series} type="bar" height={350} />
      </div>
    </Card>
  )
}
