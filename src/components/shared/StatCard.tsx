interface StatCardProps {
  title: string
  value: string
  change?: string
  changeLabel?: string
  trend?: 'up' | 'down' | 'neutral'
  accent?: boolean
}

export default function StatCard({ title, value, change, changeLabel, trend, accent }: StatCardProps) {
  return (
    <div className={`
      bg-white border border-[#e2e4e9] rounded-sm p-5 card-hover
      ${accent ? 'border-l-[3px] border-l-[#050316]' : ''}
    `}>
      <p className="text-[10px] text-[#050316]/40 font-semibold tracking-[0.12em] uppercase mb-3">{title}</p>
      <p className="text-[26px] font-bold text-[#050316] tracking-tight number-display leading-none">{value}</p>
      {(change || changeLabel) && (
        <div className="flex items-baseline gap-1.5 mt-3 pt-3 border-t border-[#e2e4e9]">
          {change && (
            <span className={`text-[12px] font-semibold ${
              trend === 'up' ? 'text-[#050316]' :
              trend === 'down' ? 'text-[#050316]/45' :
              'text-[#050316]/35'
            }`}>
              {change}
            </span>
          )}
          {changeLabel && (
            <span className="text-[10px] text-[#050316]/30">{changeLabel}</span>
          )}
        </div>
      )}
    </div>
  )
}
