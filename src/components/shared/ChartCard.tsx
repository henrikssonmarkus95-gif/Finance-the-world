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
    <div className="bg-white border border-[#e5e7eb] rounded-xl overflow-hidden">
      <div className="px-6 pt-6 pb-4">
        <h3 className="text-[18px] font-semibold text-[#050316] tracking-tight">{title}</h3>
        {subtitle && (
          <p className="text-[13px] text-[#050316]/50 mt-1">{subtitle}</p>
        )}
      </div>
      <div className="px-4 pb-4">
        <Chart options={options} series={series} type={type} height={height} />
      </div>
      {insight && (
        <div className="px-6 py-4 bg-[#fafafa] border-t border-[#e5e7eb]">
          <p className="text-[13px] text-[#050316]/60">
            {insight}
          </p>
        </div>
      )}
    </div>
  )
}
