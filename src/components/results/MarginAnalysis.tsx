interface MarginCardProps {
  title: string
  value: string
  comparison?: string
  change?: string
}

function MarginCard({ title, value, comparison, change }: MarginCardProps) {
  return (
    <div className="bg-white border border-[#e5e7eb] rounded-lg p-5 shadow-sm">
      <p className="text-[14px] text-[#050316]/60 mb-2">{title}</p>
      <p className="text-[28px] font-semibold text-[#050316] mb-1">{value}</p>
      {comparison && (
        <p className="text-[12px] text-[#050316]/60">{comparison}</p>
      )}
      {change && (
        <p className="text-[14px] font-medium text-[#050316] mt-1">{change}</p>
      )}
    </div>
  )
}

export default function MarginAnalysis() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <MarginCard
        title="Rörelsemarginal 2024"
        value="2.0%"
        comparison="vs 2023: 110.3%"
        change="-108.3 procentenheter"
      />
      <MarginCard
        title="Nettomarginal 2024"
        value="0.9%"
        comparison="vs 2023: 80.8%"
        change="-79.9 procentenheter"
      />
      <MarginCard
        title="Nettomarginal (13 mån)"
        value="3.9%"
        comparison="Okt 2024 - Okt 2025"
        change="Baserad på Gokind-data"
      />
    </div>
  )
}
