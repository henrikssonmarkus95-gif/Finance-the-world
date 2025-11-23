interface AverageCardProps {
  title: string
  value: string
  subtitle: string
}

function AverageCard({ title, value, subtitle }: AverageCardProps) {
  return (
    <div className="bg-white border border-[#e5e7eb] rounded-lg p-5 shadow-sm">
      <p className="text-[14px] text-[#050316]/60 mb-2">{title}</p>
      <p className="text-[24px] font-semibold text-[#050316] mb-1">{value}</p>
      <p className="text-[12px] text-[#050316]/60">{subtitle}</p>
    </div>
  )
}

export default function AverageKPICards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
      <AverageCard
        title="Genomsnittlig månatlig intäkt"
        value="757 799 kr"
        subtitle="Period: 13 månader"
      />
      <AverageCard
        title="Genomsnittlig månatlig kostnad"
        value="-728 031 kr"
        subtitle="Period: 13 månader"
      />
      <AverageCard
        title="Genomsnittligt månatligt netto"
        value="29 768 kr"
        subtitle="Period: 13 månader"
      />
      <AverageCard
        title="Bästa månad"
        value="Oktober 2025"
        subtitle="Netto: 707 772 kr"
      />
      <AverageCard
        title="Sämsta månad"
        value="September 2025"
        subtitle="Netto: -457 734 kr"
      />
    </div>
  )
}
