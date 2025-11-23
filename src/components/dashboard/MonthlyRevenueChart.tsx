import Chart from 'react-apexcharts'
import { ApexOptions } from 'apexcharts'
import Card from '../shared/Card'

export default function MonthlyRevenueChart() {
  const options: ApexOptions = {
    chart: {
      type: 'line',
      height: 300,
      toolbar: { show: false },
      fontFamily: 'Inter, sans-serif'
    },
    stroke: {
      curve: 'smooth',
      width: 3,
      colors: ['#427bf6']
    },
    markers: {
      size: 5,
      colors: ['#427bf6'],
      strokeColors: '#fff',
      strokeWidth: 2
    },
    grid: {
      borderColor: '#e5e7eb',
      strokeDashArray: 4
    },
    xaxis: {
      categories: ['Okt 24', 'Nov 24', 'Dec 24', 'Jan 25', 'Feb 25', 'Mar 25',
                   'Apr 25', 'Maj 25', 'Jun 25', 'Jul 25', 'Aug 25', 'Sep 25', 'Okt 25'],
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
    tooltip: {
      y: {
        formatter: (value: number) => value.toLocaleString('sv-SE') + ' kr'
      }
    }
  }

  const series = [{
    name: 'Intäkter',
    data: [73811, 243688, 141413, 331387, 627963, 805560,
           1373179, 837282, 782485, 1041615, 721678, 946023, 1925303]
  }]

  return (
    <Card title="Månatlig intäktsutveckling" subtitle="Oktober 2024 - Oktober 2025">
      <div className="px-6 pb-6">
        <Chart options={options} series={series} type="line" height={300} />
      </div>
    </Card>
  )
}
