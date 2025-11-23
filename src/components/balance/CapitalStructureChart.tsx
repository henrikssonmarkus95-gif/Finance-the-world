import { useMemo } from 'react'
import Chart from 'react-apexcharts'
import Card from '../shared/Card'
import { COLORS } from '../../data/constants'
import { createDonutChartOptions } from '../../utils/chartConfig'

export default function CapitalStructureChart() {
  const labels = ['Eget kapital (50.0%)', 'Kortfristiga skulder (50.0%)']

  const options = useMemo(
    () => createDonutChartOptions(
      labels,
      [COLORS.primary, COLORS.text],
      'Balansomslutning',
      '685 473 kr'
    ),
    []
  )

  const series = useMemo(() => [342684, 342789], [])

  return (
    <Card title="Kapitalstruktur 2024" subtitle="Fördelning eget kapital och skulder">
      <div className="px-6 pb-6">
        <Chart options={options} series={series} type="donut" height={300} />
      </div>
    </Card>
  )
}
