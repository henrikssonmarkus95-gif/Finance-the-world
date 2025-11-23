import { useMemo } from 'react'
import Chart from 'react-apexcharts'
import Card from '../shared/Card'
import { MONTH_LABELS, PERIOD_LABEL } from '../../data/constants'
import { createLineChartOptions } from '../../utils/chartConfig'

export default function MonthlyRevenueChart() {
  const options = useMemo(() => createLineChartOptions(MONTH_LABELS), [])

  const series = useMemo(() => [{
    name: 'Intäkter',
    data: [73811, 243688, 141413, 331387, 627963, 805560,
           1373179, 837282, 782485, 1041615, 721678, 946023, 1925303]
  }], [])

  return (
    <Card title="Månatlig intäktsutveckling" subtitle={PERIOD_LABEL}>
      <div className="px-6 pb-6">
        <Chart options={options} series={series} type="line" height={300} />
      </div>
    </Card>
  )
}
