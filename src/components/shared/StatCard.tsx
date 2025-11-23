interface StatCardProps {
  title: string
  value: string
  change?: string
  changeLabel?: string
  trend?: 'up' | 'down' | 'neutral'
}

export default function StatCard({ title, value, change, changeLabel, trend }: StatCardProps) {
  return (
    <div className="bg-white border border-[#e5e7eb] rounded-xl p-6 transition-colors duration-200 hover:border-[#050316]/20">
      <p className="text-[13px] text-[#050316]/50 font-medium tracking-wide uppercase">{title}</p>
      <p className="text-[32px] font-semibold text-[#050316] mt-3 tracking-tight">{value}</p>
      {(change || changeLabel) && (
        <div className="flex items-center gap-2 mt-3">
          {change && (
            <span className={`text-[14px] font-medium ${
              trend === 'up' ? 'text-[#050316]' :
              trend === 'down' ? 'text-[#050316]/60' :
              'text-[#050316]/50'
            }`}>
              {change}
            </span>
          )}
          {changeLabel && (
            <span className="text-[13px] text-[#050316]/40">{changeLabel}</span>
          )}
        </div>
      )}
    </div>
  )
}
