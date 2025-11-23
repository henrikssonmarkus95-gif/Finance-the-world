import Chart from 'react-apexcharts'
import { ApexOptions } from 'apexcharts'
import Card from '../shared/Card'

export default function MonthlyNetResultChart() {
  const options: ApexOptions = {
    chart: {
      type: 'area',
      height: 300,
      toolbar: { show: false },
      fontFamily: 'Inter, sans-serif'
    },
    stroke: {
      curve: 'smooth',
      width: 2,
      colors: ['#427bf6']
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.4,
        opacityTo: 0.1,
        stops: [0, 90, 100]
      },
      colors: ['#427bf6']
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
    name: 'Nettoresultat',
    data: [73574, -4737, -229410, -12211, -82181, 305468,
           -311510, 159448, 418326, -131526, -48293, -457734, 707772]
  }]

  return (
    <Card title="Månatligt nettoresultat" subtitle="Oktober 2024 - Oktober 2025">
      <div className="px-6 pb-6">
        <Chart options={options} series={series} type="area" height={300} />
      </div>
    </Card>
  )
}
