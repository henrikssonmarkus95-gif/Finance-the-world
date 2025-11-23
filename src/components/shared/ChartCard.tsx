import { ReactNode } from 'react'
import Chart from 'react-apexcharts'
import { ApexOptions } from 'apexcharts'

interface ChartCardProps {
  title: string
  subtitle?: string
  children?: ReactNode
  options: ApexOptions
  series: ApexAxisChartSeries | number[]
  type: 'line' | 'area' | 'bar' | 'donut' | 'radar'
  height?: number
  insight?: string
}

export default function ChartCard({
  title,
  subtitle,
  options,
  series,
  type,
  height = 300,
  insight
}: ChartCardProps) {
  return (
    <div className="bg-white border border-[#e5e7eb] rounded-2xl shadow-sm overflow-hidden">
      <div className="px-6 pt-5 pb-4">
        <h3 className="text-[16px] font-medium text-[#050316]">{title}</h3>
        {subtitle && (
          <p className="text-[12px] text-[#050316]/50 mt-0.5">{subtitle}</p>
        )}
      </div>
      <div className="px-4 pb-4">
        <Chart options={options} series={series} type={type} height={height} />
      </div>
      {insight && (
        <div className="px-6 py-3 bg-[#f9faf7] border-t border-[#e5e7eb]">
          <p className="text-[12px] text-[#050316]/70">
            <span className="font-medium text-[#427bf6]">Insikt:</span> {insight}
          </p>
        </div>
      )}
    </div>
  )
}
