import Chart from 'react-apexcharts'
import { ApexOptions } from 'apexcharts'
import Card from '../shared/Card'

export default function WaterfallChart() {
  const options: ApexOptions = {
    chart: {
      type: 'bar',
      height: 350,
      toolbar: { show: false },
      fontFamily: 'Inter, sans-serif'
    },
    plotOptions: {
      bar: {
        columnWidth: '60%',
        colors: {
          ranges: [{
            from: -1000000,
            to: 0,
            color: '#050316'
          }, {
            from: 0,
            to: 1000000,
            color: '#427bf6'
          }]
        }
      }
    },
    dataLabels: {
      enabled: false
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
    name: 'Kumulativt kassaflöde',
    data: [73574, 68837, -160573, -172784, -254965, 50503,
           -261007, -101559, 316767, 185241, 136948, -320786, 386985]
  }]

  return (
    <Card title="Kumulativt kassaflöde" subtitle="Oktober 2024 - Oktober 2025">
      <div className="px-6 pb-6">
        <Chart options={options} series={series} type="bar" height={350} />
      </div>
    </Card>
  )
}
