import Chart from 'react-apexcharts'
import { ApexOptions } from 'apexcharts'
import Card from '../shared/Card'

export default function AssetAllocationChart() {
  const options: ApexOptions = {
    chart: {
      type: 'bar',
      height: 350,
      toolbar: { show: false },
      fontFamily: 'Inter, sans-serif'
    },
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: '70%',
        dataLabels: {
          position: 'top'
        }
      }
    },
    colors: ['#427bf6', '#050316'],
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    grid: {
      borderColor: '#e5e7eb',
      strokeDashArray: 4
    },
    xaxis: {
      categories: ['Immateriella tillgångar', 'Kundfordringar',
                   'Förutbetalda kostnader', 'Kassa och bank'],
      labels: {
        formatter: (value: string) => parseInt(value).toLocaleString('sv-SE') + ' kr',
        style: { colors: '#050316', fontSize: '12px' }
      }
    },
    yaxis: {
      labels: {
        style: { colors: '#050316', fontSize: '12px' }
      }
    },
    legend: {
      position: 'top',
      fontSize: '14px'
    },
    tooltip: {
      y: {
        formatter: (value: number) => value.toLocaleString('sv-SE') + ' kr'
      }
    }
  }

  const series = [
    {
      name: '2024',
      data: [348360, 252995, 64727, 19391]
    },
    {
      name: '2023',
      data: [151200, 9395, 0, 312395]
    }
  ]

  return (
    <Card title="Tillgångsfördelning" subtitle="Jämförelse 2024 vs 2023">
      <div className="px-6 pb-6">
        <Chart options={options} series={series} type="bar" height={350} />
      </div>
    </Card>
  )
}
