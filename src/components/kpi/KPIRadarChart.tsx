import { useMemo } from 'react'
import Chart from 'react-apexcharts'
import Card from '../shared/Card'
import { COLORS } from '../../data/constants'
import { createRadarChartOptions } from '../../utils/chartConfig'

export default function KPIRadarChart() {
  const categories = [
    'Rörelsemarginal', 'Avk. totalt kapital',
    'Avk. sysselsatt kapital', 'Avk. eget kapital',
    'Kassalikviditet', 'Soliditet'
  ]

  const options = useMemo(
    () => createRadarChartOptions(categories, [COLORS.primary, COLORS.text]),
    []
  )

  const series = useMemo(() => [
    { name: '2024', data: [2.0, 4.1, 8.1, 8.0, 98.3, 50.0] },
    { name: '2023', data: [110.3, 8.4, 52.2, 51.9, 83.3, 16.1] }
  ], [])

  return (
    <Card title="Nyckeltalsanalys" subtitle="Jämförelse 2024 vs 2023">
      <div className="px-6 pb-6">
        <Chart options={options} series={series} type="radar" height={400} />
      </div>
    </Card>
  )
}
