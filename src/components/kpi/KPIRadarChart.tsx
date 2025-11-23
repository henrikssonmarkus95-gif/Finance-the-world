import Chart from 'react-apexcharts'
import { ApexOptions } from 'apexcharts'
import Card from '../shared/Card'

export default function KPIRadarChart() {
  const options: ApexOptions = {
    chart: {
      type: 'radar',
      height: 400,
      fontFamily: 'Inter, sans-serif'
    },
    stroke: {
      width: 2,
      colors: ['#427bf6', '#050316']
    },
    fill: {
      opacity: 0.2,
      colors: ['#427bf6', '#050316']
    },
    markers: {
      size: 4,
      colors: ['#427bf6', '#050316']
    },
    xaxis: {
      categories: ['Rörelsemarginal', 'Avk. totalt kapital',
                   'Avk. sysselsatt kapital', 'Avk. eget kapital',
                   'Kassalikviditet', 'Soliditet'],
      labels: {
        style: { fontSize: '12px', colors: ['#050316'] }
      }
    },
    legend: {
      position: 'bottom',
      fontSize: '14px'
    }
  }

  const series = [
    {
      name: '2024',
      data: [2.0, 4.1, 8.1, 8.0, 98.3, 50.0]
    },
    {
      name: '2023',
      data: [110.3, 8.4, 52.2, 51.9, 83.3, 16.1]
    }
  ]

  return (
    <Card title="Nyckeltalsanalys" subtitle="Jämförelse 2024 vs 2023">
      <div className="px-6 pb-6">
        <Chart options={options} series={series} type="radar" height={400} />
      </div>
    </Card>
  )
}
