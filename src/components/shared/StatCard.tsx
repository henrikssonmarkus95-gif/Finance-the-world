interface StatCardProps {
  title: string
  value: string
  change?: string
  changeLabel?: string
  trend?: 'up' | 'down' | 'neutral'
  icon?: React.ReactNode
}

export default function StatCard({ title, value, change, changeLabel, trend, icon }: StatCardProps) {
  return (
    <div className="bg-white border border-[#e5e7eb] rounded-2xl p-5 shadow-sm transition-all duration-300 hover:shadow-md hover:border-[#427bf6]/20">
      <div className="flex items-start justify-between">
        <p className="text-[13px] text-[#050316]/60 font-medium">{title}</p>
        {icon && (
          <div className="w-8 h-8 rounded-lg bg-[#427bf6]/10 flex items-center justify-center text-[#427bf6]">
            {icon}
          </div>
        )}
      </div>
      <p className="text-[26px] font-semibold text-[#050316] mt-2 tracking-tight">{value}</p>
      {(change || changeLabel) && (
        <div className="flex items-center gap-2 mt-2">
          {change && (
            <span className={`text-[13px] font-medium ${
              trend === 'up' ? 'text-[#427bf6]' :
              trend === 'down' ? 'text-[#050316]/70' :
              'text-[#050316]/60'
            }`}>
              {change}
            </span>
          )}
          {changeLabel && (
            <span className="text-[12px] text-[#050316]/50">{changeLabel}</span>
          )}
        </div>
      )}
    </div>
  )
}
