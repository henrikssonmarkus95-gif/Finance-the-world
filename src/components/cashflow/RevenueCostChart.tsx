import { useMemo } from 'react'
import Chart from 'react-apexcharts'
import { ApexOptions } from 'apexcharts'
import Card from '../shared/Card'
import { MONTH_LABELS, COLORS, formatCurrency } from '../../data/constants'

export default function RevenueCostChart() {
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
        columnWidth: '70%',
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
    legend: {
      position: 'top',
      fontSize: '14px'
    },
    tooltip: {
      y: { formatter: formatCurrency }
    }
  }), [])

  const series = useMemo(() => [
    {
      name: 'Intäkter',
      data: [73811, 243688, 141413, 331387, 627963, 805560,
             1373179, 837282, 782485, 1041615, 721678, 946023, 1925303]
    },
    {
      name: 'Kostnader',
      data: [236, 248425, 370823, 343598, 710144, 500092,
             1684689, 677834, 364159, 1173141, 769971, 1403757, 1217531]
    }
  ], [])

  return (
    <Card title="Intäkter vs Kostnader" subtitle="Månatlig jämförelse">
      <div className="px-6 pb-6">
        <Chart options={options} series={series} type="bar" height={350} />
      </div>
    </Card>
  )
}
