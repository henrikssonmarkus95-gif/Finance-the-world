import Chart from 'react-apexcharts'
import { ApexOptions } from 'apexcharts'
import Card from '../shared/Card'

export default function CostBreakdownChart() {
  const options: ApexOptions = {
    chart: {
      type: 'donut',
      height: 320,
      fontFamily: 'Inter, sans-serif'
    },
    colors: ['#427bf6', '#6b95ff', '#94b3ff', '#bdd0ff', '#dce6ff', '#eff4ff', '#f9faf7'],
    labels: ['Leverantörsbetalningar (86.6%)', 'Löner (12.1%)',
             'Måltider & Representation (0.9%)', 'Digital & Media (0.2%)',
             'Övriga kostnader (0.1%)', 'Skatter (0.0%)', 'Räntor (0.0%)'],
    legend: {
      position: 'bottom',
      fontSize: '12px'
    },
    dataLabels: {
      enabled: true,
      formatter: (val: number) => val.toFixed(1) + '%',
      style: {
        fontSize: '12px',
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
              label: 'Totala kostnader',
              formatter: () => '9 464 401 kr'
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

  const series = [8195774, 1145318, 89611, 22422, 7188, 3390, 699]

  return (
    <Card title="Kostnadsnedbrytning" subtitle="Oktober 2024 - Oktober 2025">
      <div className="px-6 pb-6">
        <Chart options={options} series={series} type="donut" height={320} />
      </div>
    </Card>
  )
}
