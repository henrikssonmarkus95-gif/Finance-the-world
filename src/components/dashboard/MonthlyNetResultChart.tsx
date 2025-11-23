import { useMemo } from 'react'
import Chart from 'react-apexcharts'
import Card from '../shared/Card'
import { MONTH_LABELS, PERIOD_LABEL } from '../../data/constants'
import { createAreaChartOptions } from '../../utils/chartConfig'

export default function MonthlyNetResultChart() {
  const options = useMemo(() => createAreaChartOptions(MONTH_LABELS), [])

  const series = useMemo(() => [{
    name: 'Nettoresultat',
    data: [73574, -4737, -229410, -12211, -82181, 305468,
           -311510, 159448, 418326, -131526, -48293, -457734, 707772]
  }], [])

  return (
    <Card title="Månatligt nettoresultat" subtitle={PERIOD_LABEL}>
      <div className="px-6 pb-6">
        <Chart options={options} series={series} type="area" height={300} />
      </div>
    </Card>
  )
}
