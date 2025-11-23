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
    <div className="bg-white border border-[#e2e4e9] rounded-sm overflow-hidden">
      <div className="px-5 pt-5 pb-3">
        <h3 className="text-[15px] font-bold text-[#050316] tracking-tight">{title}</h3>
        {subtitle && (
          <p className="text-[11px] text-[#050316]/40 mt-0.5">{subtitle}</p>
        )}
      </div>
      <div className="px-3 pb-3">
        <Chart options={options} series={series} type={type} height={height} />
      </div>
      {insight && (
        <div className="px-5 py-3 bg-[#f1f3f5] border-t border-[#e2e4e9]">
          <p className="text-[12px] text-[#050316]/55 leading-relaxed">
            {insight}
          </p>
        </div>
      )}
    </div>
  )
}
