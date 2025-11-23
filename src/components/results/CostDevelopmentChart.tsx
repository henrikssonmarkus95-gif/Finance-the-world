import Chart from 'react-apexcharts'
import { ApexOptions } from 'apexcharts'
import Card from '../shared/Card'

export default function CostDevelopmentChart() {
  const options: ApexOptions = {
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
      categories: ['Råvaror', 'Externa kostnader', 'Personal', 'Avskrivningar'],
      labels: {
        style: { colors: '#050316', fontSize: '12px' }
      }
    },
    yaxis: {
      labels: {
        formatter: (value: number) => value.toLocaleString('sv-SE') + ' kr',
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
      data: [119150, 363041, 823090, 69840]
    },
    {
      name: '2023',
      data: [5500, 131568, 10180, 37800]
    }
  ]

  return (
    <Card title="Kostnadsutveckling" subtitle="Jämförelse 2024 vs 2023">
      <div className="px-6 pb-6">
        <Chart options={options} series={series} type="bar" height={350} />
      </div>
    </Card>
  )
}
