import Chart from 'react-apexcharts'
import { ApexOptions } from 'apexcharts'
import Card from '../shared/Card'

export default function CapitalStructureChart() {
  const options: ApexOptions = {
    chart: {
      type: 'donut',
      height: 300,
      fontFamily: 'Inter, sans-serif'
    },
    colors: ['#427bf6', '#050316'],
    labels: ['Eget kapital (50.0%)', 'Kortfristiga skulder (50.0%)'],
    legend: {
      position: 'bottom',
      fontSize: '14px'
    },
    dataLabels: {
      enabled: true,
      formatter: (val: number) => val.toFixed(1) + '%',
      style: {
        fontSize: '14px',
        colors: ['#ffffff']
      }
    },
    plotOptions: {
      pie: {
        donut: {
          size: '65%',
          labels: {
            show: true,
            total: {
              show: true,
              label: 'Balansomslutning',
              formatter: () => '685 473 kr'
            }
          }
        }
      }
    },
    tooltip: {
      y: {
        formatter: (value: number) => value.toLocaleString('sv-SE') + ' kr'
      }
    }
  }

  const series = [342684, 342789]

  return (
    <Card title="Kapitalstruktur 2024" subtitle="Fördelning eget kapital och skulder">
      <div className="px-6 pb-6">
        <Chart options={options} series={series} type="donut" height={300} />
      </div>
    </Card>
  )
}
