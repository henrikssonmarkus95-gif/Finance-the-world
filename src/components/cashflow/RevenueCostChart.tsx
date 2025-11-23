import Chart from 'react-apexcharts'
import { ApexOptions } from 'apexcharts'
import Card from '../shared/Card'

export default function RevenueCostChart() {
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
        columnWidth: '70%',
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
      name: 'Intäkter',
      data: [73811, 243688, 141413, 331387, 627963, 805560,
             1373179, 837282, 782485, 1041615, 721678, 946023, 1925303]
    },
    {
      name: 'Kostnader',
      data: [236, 248425, 370823, 343598, 710144, 500092,
             1684689, 677834, 364159, 1173141, 769971, 1403757, 1217531]
    }
  ]

  return (
    <Card title="Intäkter vs Kostnader" subtitle="Månatlig jämförelse">
      <div className="px-6 pb-6">
        <Chart options={options} series={series} type="bar" height={350} />
      </div>
    </Card>
  )
}
