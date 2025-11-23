interface KPICardProps {
  title: string
  value: string
  comparison?: string
  changeText?: string
}

export default function KPICard({ title, value, comparison, changeText }: KPICardProps) {
  return (
    <div className="bg-white border border-[#e5e7eb] rounded-xl p-5 shadow-sm min-h-[140px] transition-all duration-300 hover:shadow-lg hover:border-[#427bf6]/30 hover:-translate-y-1 cursor-default">
      <p className="text-[14px] text-[#050316]/60 mb-2">{title}</p>
      <p className="text-[28px] font-semibold text-[#050316] mb-2">{value}</p>
      {comparison && (
        <p className="text-[12px] text-[#050316]/60">{comparison}</p>
      )}
      {changeText && (
        <p className="text-[14px] font-medium text-[#050316] mt-1">{changeText}</p>
      )}
    </div>
  )
}
