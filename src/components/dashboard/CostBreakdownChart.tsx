import { useMemo } from 'react'
import Chart from 'react-apexcharts'
import Card from '../shared/Card'
import { CHART_COLORS, PERIOD_LABEL } from '../../data/constants'
import { createDonutChartOptions } from '../../utils/chartConfig'

export default function CostBreakdownChart() {
  const labels = [
    'Leverantörsbetalningar (86.6%)',
    'Löner (12.1%)',
    'Måltider & Representation (0.9%)',
    'Digital & Media (0.2%)',
    'Övriga kostnader (0.1%)',
    'Skatter (0.0%)',
    'Räntor (0.0%)'
  ]

  const options = useMemo(
    () => createDonutChartOptions(labels, CHART_COLORS, 'Totala kostnader', '9 464 401 kr'),
    []
  )

  const series = useMemo(() => [8195774, 1145318, 89611, 22422, 7188, 3390, 699], [])

  return (
    <Card title="Kostnadsnedbrytning" subtitle={PERIOD_LABEL}>
      <div className="px-6 pb-6">
        <Chart options={options} series={series} type="donut" height={320} />
      </div>
    </Card>
  )
}
