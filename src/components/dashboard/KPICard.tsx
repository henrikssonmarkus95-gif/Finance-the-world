interface KPICardProps {
  title: string
  value: string
  comparison?: string
  changeText?: string
}

export default function KPICard({ title, value, comparison, changeText }: KPICardProps) {
  return (
    <div className="bg-white border border-[#e5e7eb] rounded-xl p-6 min-h-[140px] transition-colors duration-200 hover:border-[#050316]/20">
      <p className="text-[13px] text-[#050316]/50 mb-3 font-medium tracking-wide uppercase">{title}</p>
      <p className="text-[32px] font-semibold text-[#050316] mb-2 tracking-tight">{value}</p>
      {comparison && (
        <p className="text-[13px] text-[#050316]/50">{comparison}</p>
      )}
      {changeText && (
        <p className="text-[14px] font-medium text-[#050316] mt-1">{changeText}</p>
      )}
    </div>
  )
}
